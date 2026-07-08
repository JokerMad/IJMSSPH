import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import authServices from '../../../services/authServices';
import { NotificationManager } from 'react-notifications';
import Loader from '../../../common_comp/loader';

const VerifyOtp = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [resendTimer, setResendTimer] = useState(30); // Timer starts at 30 seconds
    const [isResendDisabled, setIsResendDisabled] = useState(true); // Initially disabled
    const inputRefs = useRef([]);
    let location = useLocation()
    const navigate=useNavigate()
   
    useEffect(()=>{
        if(!location?.state?.email){
            navigate('/auth/register')
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
        setIsResendDisabled(true);
        setResendTimer(60);
        try {
            let data={
                email:location.state.email
            }
            const response = await authServices.resenrOtp(data);
            console.log('response===', response)
            if (response.status == 200) {
                NotificationManager.success("OTP resent successfully.", 'Success', 3000);
            }
        } catch (error) {
            console.error('Error during login:', error);
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

    const handleSubmit = async() => {
        setIsLoaded(true);
        const otpValue = otp.join('');
        try {
            let data={
                email:location.state.email,
                otp:otpValue
            }
            const response = await authServices.verifyOtp(data);
            console.log('response===', response)
            if (response.status == 200) {
                navigate('/auth/login')
                NotificationManager.success("OTP verification successfully.", 'Success', 3000);
            }
            setIsLoaded(false);
        } catch (error) {
            setIsLoaded(false);
            NotificationManager.error("Invalid OTP, Please enter valid otp.", 'Error', 4000);
            console.error('Error during login:', error);
            // Handle error (e.g., show a message to the user)
        }
    };

    return (
        <div>
            {isLoaded?<Loader/>:''}
            <h4 className="mb-4">Verify OTP</h4>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
                noValidate
                autoComplete="off"
                onSubmit={(e) => e.preventDefault()}
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
                <Button
                    variant="contained"
                    className="w-25 base_background_color mt-3"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Box>

            <div className="mt-3">
                <Link to="/auth/forget-password">Forgot Password?</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/auth/register">Register here</Link>
            </div>
        </div>
    );
};

export default VerifyOtp;
