import axios from 'axios';
import { API_URL } from '../config';
// import { getCookie } from '../function'

export default axios.create({
    baseURL : API_URL,
    headers : {
        "Content-Type":"application/json",
        // "Authorization": getCookie('token'),
        "x-api-key":'i35qYtCC816wayt7jHrNE2DmpkTrAowL9LeovAc3'
    },
})


// const result = await api.post(Apis.GetAllArticlePath, data, {
            // withCredentials: true,
        //     headers: { 'Content-Type': 'multipart/form-data' }
        // });