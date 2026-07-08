import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import authServices from '../../../services/authServices';
import Loader from '../../../common_comp/loader';
import { NotificationManager } from 'react-notifications';

// Validation schema using Yup
const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

const ForgetPassword = () => {
  const [isLoaded,setIsLoaded]=useState(false)
  const navigate=useNavigate()
  return (
    <div>
      {isLoaded?<Loader/>:''}
      <h4 className="mb-4">Forget Password</h4>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={ForgetPasswordSchema}
        onSubmit={async (values, { resetForm }) => {
          setIsLoaded(true)
          try {

            const response = await authServices.forgetPass(values);
            if (response.status == 200) {
              NotificationManager.success("OTP sent successfully. Please verify to change password.", 'Success', 3000);
              navigate('/auth/reset-password', {
                state: {
                  email: values.email
                }
              })
            }
            setIsLoaded(false)
          } catch (error) {
            setIsLoaded(false)
            NotificationManager.error("User does not exist!", 'Error', 4000)
            console.error('Error during login:', error);
            // Handle error (e.g., show a message to the user)
          }
          resetForm();
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <Box
              sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  className="w-100"
                  label="Email"
                  id="email"
                  name="email"
                  size="small"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </div>
              <Button
                variant="contained"
                type="submit"
                className="w-50 base_background_color"
              >
                Send OTP
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      <div>
        <Link to="/auth/login">Log In</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/auth/register">Register here</Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
