import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import authServices from '../../../services/authServices';
import Loader from '../../../common_comp/loader';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [viewPass, setViewPass] = useState(false)
    const [viewPass1, setViewPass1] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate()
    // Formik form logic
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            designation: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required('First name is required'),
            last_name: Yup.string().required('Last name is required'),
            designation: Yup.string().required('Designation is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters long')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setIsLoaded(true)
            try {

                const response = await authServices.clientRegister(values);
                console.log('response===', JSON.parse(response.data))
                if (response.status == 200) {
                    navigate('/auth/verify-otp', {
                        state: {
                            email: values.email
                        }
                    })
                } else {
                    setIsLoaded(false);
                }
            } catch (error) {
                setIsLoaded(false);
                console.error('Error during login:', error);
                // Handle error (e.g., show a message to the user)
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div>
            {isLoaded ? <Loader /> : ''}
            <h4 className="mb-2">Sign Up</h4>
            <p className="mb-4">
                Already have an account? <Link to="/auth/login">Login</Link>
            </p>

            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                {/* First Name */}
                <div className="mt-4">
                    <TextField
                        className="w-100"
                        label="First Name"
                        id="first_name"
                        name="first_name"
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                        helperText={formik.touched.first_name && formik.errors.first_name}
                        size="small"
                    />
                </div>
                {/* Last Name */}
                <div className="mt-4">
                    <TextField
                        className="w-100"
                        label="Last Name"
                        id="last_name"
                        name="last_name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                        helperText={formik.touched.last_name && formik.errors.last_name}
                        size="small"
                    />
                </div>
                {/* Designation */}
                <div className="mt-4">
                    <TextField
                        className="w-100"
                        label="Designation"
                        id="designation"
                        name="designation"
                        value={formik.values.designation}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.designation && Boolean(formik.errors.designation)}
                        helperText={formik.touched.designation && formik.errors.designation}
                        size="small"
                    />
                </div>
                {/* Email */}
                <div className="mt-4">
                    <TextField
                        className="w-100"
                        label="Email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        size="small"
                    />
                </div>
                {/* Password */}
                <div className="mt-4 position-relative">
                    <TextField
                        className="w-100"
                        label="Password"
                        id="password"
                        name="password"
                        type={viewPass ? "text" : "password"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        size="small"
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
                {/* Confirm Password */}
                <div className="mt-4 position-relative">
                    <TextField
                        className="w-100"
                        label="Confirm Password"
                        id="confirmPassword"
                        name="confirmPassword"
                        type={viewPass1 ? "text" : "password"}
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
                     <span className='paddwordView' onClick={() => setViewPass1(!viewPass1)} >
                                            {
                                                viewPass1 ?
                                                    <FaEye /> :
                                                    <FaEyeSlash />
                                            }
                                            {/* <FaEyeSlash /> */}
                                        </span>
                </div>
                <Button
                    variant="contained"
                    className="w-25 base_background_color mt-4"
                    type="submit"
                >
                    Submit
                </Button>
            </Box>
        </div>
    );
};

export default Register;
