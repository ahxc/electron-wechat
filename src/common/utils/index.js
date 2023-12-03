import axios from "axios";


const instance = axios.create({
    baseURL: "http://123.207.32.32:8000"
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.header["Token"] = "xxxx";
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    if (response.status === 200) {
        return response.data;
    } else {
        return Promise.reject(new Error('error'));
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export const request = function (url, params = {}) {
    return axios.request({
        url,
        ...params,
    });
};


export function debounce(fn, delay = 400) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}

export function throttle(fn, delay = 400) {

}