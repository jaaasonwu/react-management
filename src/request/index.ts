import axios from "axios";

const instance = axios.create({
    baseURL: "http://xue.cnkdl.cn:23683",
    timeout: 20000
})

instance.interceptors.request.use(config => {
    return config;
}, (err) => {
    return Promise.reject(err);
})

instance.interceptors.response.use(res => {
    return res.data;
}, (error) => {
    return Promise.reject(error);
})

export default instance;