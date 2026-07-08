import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import authServices from '../../../services/authServices';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { setCookie } from '../../../function';
import Loader from '../../../common_comp/loader';

// Validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const Login = () => {
    const [viewPass, setViewPass] = useState(false)
    const [isLoaded,setIsLoaded]=useState(false)
    // Initialize Formik using useFormik hook
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setIsLoaded(true)
            console.log('Form Data:', values);
            try {
                const response = await authServices.login(values);
                console.log('response--',response)
                let parsedData = JSON.parse(response?.data)
                console.log('response===', parsedData)
                if (response.status == 200) {
                    setCookie('token', parsedData.additionalData.token, 30000)
                    window.location.reload();
                } else {

                }
                setIsLoaded(false)
            } catch (error) {
                console.error('Error during login:', error);
                setIsLoaded(false)
                // Handle error (e.g., show a message to the user)
            }
        },
    });

    return (
        <div>
            {isLoaded?<Loader/>:''}
            <h4 className="mb-4">Author Login</h4>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <div>
                    <TextField
                        className="w-100"
                        label="Email"
                        id="email"
                        name="email"
                        size="small"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        fullWidth
                        variant="outlined"
                        helperText={formik.touched.email && formik.errors.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                    />
                </div>
                <div className="mt-4 position-relative">
                    <TextField
                        className="w-100"
                        label="Password"
                        id="password"
                        name="password"
                        type={viewPass ? "text" : "password"}
                        size="small"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        fullWidth
                        variant="outlined"
                        helperText={formik.touched.password && formik.errors.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                    />
                    <span className='paddwordView' onClick={() => setViewPass(!viewPass)} >
                        {
                            viewPass ?
                                <FaEye /> :
                                <FaEyeSlash />
                        }
                        {/* <FaEyeSlash /> */}
                    </span>
                </div>
                <Button
                    variant="contained"
                    className="w-25 base_background_color"
                    type="submit"
                >
                    Submit
                </Button>
            </Box>

            <div>
                <Link to="/auth/forget-password">Forgot Password?</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/auth/register">Register here</Link>
            </div>
        </div>
    );
};

export default Login;
