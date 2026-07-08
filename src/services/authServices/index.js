import api from "../ApiConfig";
import { Apis } from '../../config';
import unauthService from "../unauth";
import { NotificationManager } from 'react-notifications';
// BiDY3T06Cq7EWRsdmGNoxaunSeYoH2eQ17cTDKek
const clientRegister = async (data) => {
    console.log(Apis.GetUserRegsiter)
    try {
        const response = await api.post(`${Apis.GetUserRegsiter}`, data, {

        });
        if (response.status == 200) {
            let parsed = JSON.parse(response.data)
            NotificationManager.success(parsed.message, 'Success', 2000);
        }
        return response
    } catch (error) {
        console.error('Error in getUserLogin:', error);
        let msg = JSON.parse(error.response.data)
        NotificationManager.error(msg?.message || "Something went wrong please try again leter!", "Register Failed");
        return error;
    }
};

const resenrOtp = async (data) => {
    try {
        const response = await api.post(`${Apis.GetUserResendOtp}`, data, {});
        return response
    } catch (error) {
        console.error('Error in getUserLogin:', error);
        return null;
    }
};

const verifyOtp = async (data) => {
    try {
        const response = await api.post(`${Apis.GetUserVerify}`, data, {});
        return response
    } catch (error) {
        console.error('Error in getUserLogin:', error);
        return null;
    }
};


const forgetPass = async (data) => {
    try {
        const response = await api.post(`${Apis.GetUserForgetPass}`, data, {});
        return response
    } catch (error) {
        console.error('Error in getUserLogin:', error);
        return null;
    }
};
const resetPass = async (data) => {
    try {
        const response = await api.post(`${Apis.GetUserResetPass}`, data, {});
        return response
    } catch (error) {
        console.error('Error in getUserLogin:', error);
        let parsed = JSON.parse(error.response.data)
        NotificationManager.error(parsed.message, 'Error', 3000);
        return null;
    }
};

const login = async (data) => {
    try {
        const response = await api.post(`${Apis.GetUserLogin}`, data, {});
        console.log(response)
        return response
    } catch (error) {
        console.error('Error in getUserLogin:', error);
        NotificationManager.error("Please! Check Username & Password", "Login Failed");
        return null;
    }
};

export default {
    clientRegister,
    resenrOtp,
    verifyOtp,
    resetPass,
    forgetPass,
    login
};