import axios from "axios";
import endpoints from "./endpoints.json";

const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const get = async (key, params = {}) => {
  const apiUrl = baseUrl + endpoints[key];
  const headers = { "x-api-key": apiKey };
  console.log(endpoints[key])
  console.log(apiUrl , baseUrl , params , key, endpoints[key])

  try {
    const response = await axios.get(apiUrl, { params, headers });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("GET request failed:", error);
    return "";
  }
};

const post = async (key, body = {}) => {
  let apiUrl;
  if (key === "SUBSCRIBE") {
    apiUrl = baseUrl + endpoints[key] + body?.emailId;
    body = {};
  } else {
    apiUrl = baseUrl + endpoints[key];
  }

  const headers = { "x-api-key": apiKey };

  try {
    const response = await axios.post(apiUrl, body, { headers });
    console.log(response)
    return response;
  } catch (error) {
    console.error("POST request failed:", error);
    return error;
  }
};

const fetchApi = {
  get,
  post,
};

export default fetchApi;