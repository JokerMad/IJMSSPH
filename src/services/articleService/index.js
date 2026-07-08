import api from "../ApiConfig";
import { Apis } from '../../config';


const getSearchArticle = async (data) => {
    try {
        const response = await api.get(`${Apis.GetAllSearchArticle}?searchText=${data}`, {});
        console.log('response---search',response)
        return response
    } catch (error) {
        console.error('Error in getUserLogin:', error);
        return null;
    }
};
const getMostDownloadArticle = async (data) => {
    try {
        const response = await api.get(`${Apis.GetAllMostDownloadArticle}`, {});
        console.log('response---search',response)
        return response
    } catch (error) {
        console.error('Error in getUserLogin:', error);
        return null;
    }
};
const getMostViewArticle = async (data) => {
    try {
        const response = await api.get(`${Apis.GetAllMostViewArticle}`, {});
        console.log('response---search',response)
        return response
    } catch (error) {
        console.error('Error in getUserLogin:', error);
        return null;
    }
};
export default {
    getSearchArticle,
    getMostViewArticle,
    getMostDownloadArticle
};