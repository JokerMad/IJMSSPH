import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import authServices from '../../../services/authServices';
import { NotificationManager } from 'react-notifications';

const ResetPassword = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [resendTimer, setResendTimer] = useState(30); // Timer starts at 30 seconds
    const [isResendDisabled, setIsResendDisabled] = useState(true); // Initially disabled
    const inputRefs = useRef([]);
    const location = useLocation();
    const navigate=useNavigate()
    useEffect(()=>{
        if(!location?.state?.email){
            navigate('/auth/forget-password')
        }
    },[location?.state?.email])
    useEffect(() => {
        // Countdown timer for "Resend OTP"
        let timer;
        if (resendTimer > 0) {
            timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
        } else {
            setIsResendDisabled(false); // Enable resend button when timer reaches 0
        }
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [resendTimer]);

    const handleResendOtp = async () => {
        setResendTimer(60);
                setIsResendDisabled(true);
        try {
            const data = { email: location.state.email };
            const response = await authServices.forgetPass(data);
            console.log('response===', response);
            if (response.status === 200) {
                NotificationManager.success("OTP resent successfully.", 'Success', 3000);
            }
        } catch (error) {
            setIsResendDisabled(false);
            setResendTimer(0);
            NotificationManager.error("Something went wrong, Please sent otp again!", 'Error', 3000);
            // Handle error (e.g., show a message to the user)
        }
    };

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return; // Allow only numbers
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1); // Limit input to one digit
        setOtp(newOtp);

        // Move focus to the next input if the current one is filled
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && otp[index] === '') {
            // Move focus to the previous input on backspace if current input is empty
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: async (values) => {
            setIsLoaded(true);
            const otpValue = otp.join('');
            try {
                const data = {
                    email: location.state?.email,
                    otp: otpValue,
                    newPassword: values.password,
                };
                const response = await authServices.resetPass(data);
                console.log('response===', response);
                if (response.status === 200) {
                    NotificationManager.success("Password changed successfully.", 'Success', 3000);
                    navigate('/auth/login')
                }
            } catch (error) {
                console.error('Error during password reset:', error);
                // Handle error (e.g., show a message to the user)
            }
        },
    });

    return (
        <div>
            <h4 className="mb-4">Verify OTP</h4>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <h6>
                    Please enter the one-time password <br /> to verify your account
                </h6>
                <div>
                    <span>A code has been sent to</span> <small>{location.state?.email}</small>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    {otp.map((digit, index) => (
                        <TextField
                            key={index}
                            inputRef={(el) => (inputRefs.current[index] = el)}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            size="small"
                            inputProps={{
                                maxLength: 1,
                                style: { textAlign: 'center' },
                            }}
                            sx={{ width: '40px' }}
                        />
                    ))}
                </div>
                <p className="text-start mt-3">
                    <Button
                        variant="text"
                        onClick={handleResendOtp}
                        disabled={isResendDisabled}
                        sx={{ textTransform: 'none', color: isResendDisabled ? 'gray' : 'blue' }}
                    >
                        Resend OTP {isResendDisabled && `(${resendTimer}s)`}
                    </Button>
                </p>
                <div className="mt-4">
                    <TextField
                        className="w-100"
                        label="New Password"
                        id="password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        size="small"
                    />
                </div>
                <div className="mt-4">
                    <TextField
                        className="w-100"
                        label="Confirm Password"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.confirmPassword &&
                            Boolean(formik.errors.confirmPassword)
                        }
                        helperText={
                            formik.touched.confirmPassword && formik.errors.confirmPassword
                        }
                        size="small"
                    />
                </div>
                <Button
                    variant="contained"
                    className="w-25 base_background_color mt-3"
                    type="submit"
                >
                    Submit
                </Button>
            </Box>

            <div className="mt-3">
                <Link to="/auth/login">Log In</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/auth/register">Register here</Link>
            </div>
        </div>
    );
};

export default ResetPassword;
