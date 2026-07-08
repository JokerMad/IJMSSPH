import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import ForgetPassword from "./forgetPassword";
import Footer from "../../common_comp/Footer/Footer";
import VerifyOtp from "./verifyOtp";
import ResetPassword from "./resetPassword";
import { useAuth } from "../../hooks/useAuth";
import { Navbar, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../common_comp/Header/Header.css";

const AuthRoute = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/author/articles");
    }
  }, [isAuthenticated]);
  return (
    <>
      <Navbar expand="lg" sticky="top" className="jab_navbar2_common_bgcolor mb-0">
            <Container>
              <Navbar.Brand href="/" className="d-flex align-items-center w-100">
               
                <h1
                  className={`jab_logo_name  display-4`}
                  style={{
                    "transition": "all 0.3s ease", // Smooth transition
                    "font-size": "33px"
                  }}
                >
                  International journal of Medical science studies and Public Health.
                </h1>
              </Navbar.Brand>
            </Container>
          </Navbar>
      <div className="container-fluid">
        <div className="row" style={{ height: "100vh" }}>
          {/* <div className="col-md-6 d-flex align-items-center justify-content-center text-center auth_left base_background_color">
            <h1 className='my-auto' > 
              International Journal of Interdisciplinary <br/> Studies and System Science
            </h1>
        </div> */}
          <div className="col-md-12 d-flex align-items-center justify-content-center text-center">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verify-otp" element={<VerifyOtp />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "-70px" }}>
        <Footer />
      </div>
    </>
  );
};

export default AuthRoute;
