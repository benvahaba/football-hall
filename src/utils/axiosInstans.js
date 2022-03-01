import axios from "axios";

const headers = {
  "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  "x-rapidapi-key": "2090935e6dmsh6b4ec261a027d74p181990jsneb7c4aece90b",
};
const url = "https://api-football-v1.p.rapidapi.com/v3/";

const axiosInstance = axios.create({
  baseURL: url,
  headers: headers,
});

export default axiosInstance;
