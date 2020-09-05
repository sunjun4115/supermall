import axios from 'axios'


export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
            baseURL: "http://123.207.32.32:8000/",
            timeout: 5000
        })
        //2.1axios拦截器（请求拦截）拦截之后需要返回
    instance.interceptors.request.use(config => {
        //console.log("req拦截器config", config)

        //拦截器可以做的事情： 1.处理config中一些不符合服务器要求的数据。2.添加等待框，成功之后关掉。
        //3.某些网络请求，比如登录，必须携带特殊信息（token）,可以在此做判断
        return config
    }, err => {
        console.log("req拦截器err", err)
    })

    //2.2axios拦截器（相应拦截）拦截之后需要返回
    instance.interceptors.response.use(res => {
        //console.log("res拦截器config", res)
        return res.data
    }, err => {
        console.log("res拦截器config", err)
    })

    //3.发送真正的网络请求
    return instance(config)
}