import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

export const createAxios = axios.create({
  baseURL: '/api/v1/',
  timeout: 1000,
  headers: {}
});

export const requestInterceptors = [
  function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
]

export const responseInterceptors = [function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // if (response.data.code !== 200) {
  //   alert(response.data.msg)
  // }

  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
}]

createAxios.interceptors.request.use(...requestInterceptors);

// 添加响应拦截器
createAxios.interceptors.response.use(...responseInterceptors);

export default createAxios