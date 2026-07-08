import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ allowedRoles }) => {
    const { isAuthenticated, userRole } = useAuth();
  
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    }
  
    return <Outlet />;
}

export default ProtectedRoute