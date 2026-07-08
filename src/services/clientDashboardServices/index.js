import api from "../ApiConfig";
import { Apis } from '../../config';

const submitArticle = async (data) => {
    try {
        const response = await api.post(`${Apis.GetSubmitArticle}`,data, {
            headers : {
                "Content-Type":"multipart/form-data",
            },
        });
        return response
    } catch (error) {
        console.error('Error in getUserLogin:', error);
        return null;
    }
};

const getAllArticle = async (data) => {
    try {
        const response = await api.get(`${Apis.GetAllUserArticle}?userId=${data.userId}`, {});
        return response
    } catch (error) {
        console.error('Error in getUserLogin:', error);
        return null;
    }
};
export default {
    submitArticle,
    getAllArticle
};