import React, {PureComponent} from "react";
import request from './service/request'

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        ////1:get请求
        // axios({
        //     url: "https://httpbin.org/get",
        //     method: 'GET',
        //     params: {
        //         name: 'why',
        //         age: 18
        //     }
        // }).then((res) => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })
        //
        // //第一个参数是url
        // axios.get("https://httpbin.org/get", {
        //     params: {
        //         name: 'why',
        //         age: 18
        //     }
        // }).then((res) => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })


        // //2:post请求
        // axios({
        //     url: "https://httpbin.org/post",
        //     method: 'POST',
        //     data: {
        //         name: 'why',
        //         age: 18
        //     }
        // }).then(console.log)
        //     .catch(err => {
        //         console.log(err)
        //     })
        //
        // axios.post("https://httpbin.org/post", {
        //     name: 'why',
        //     age: 18
        // }).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })


        // //3:Async await
        // try {
        //     const res = await axios.get(
        //         // "https://httpbin.org/get",
        //         '/get',
        //         {
        //             params: {
        //                 name: 'why',
        //                 age: 18
        //             }
        //         })
        //     console.log(res)
        // } catch (e) {
        //     console.log(e)
        // }


        // ////4:axios.all 本质是调用Promise.all()方法
        // const request1 = axios.get("https://httpbin.org/get", {
        //     params: {
        //         name: 'why',
        //         age: 18
        //     }
        // })
        //
        // const request2 = axios.post("https://httpbin.org/post", {
        //     name: 'why',
        //     age: 18
        // })
        //
        // axios.all([request1, request2]).then(([res1, res2]) => {
        //     console.log(res1)
        //     console.log(res2)
        // }).catch(e => {
        //     console.log(e)
        // })
        //
        // const p1 = new Promise(((resolve, reject) => {
        //     setTimeout(() => {
        //         console.log(1)
        //     }, 1000)
        // }))
        //
        // const p2 = new Promise(((resolve, reject) => {
        //     setTimeout(() => {
        //         console.log(2)
        //     }, 2000)
        // }))
        //
        // Promise.all([p1, p2]).then(([r1, r2]) => {
        //     console.log(r1, r2)
        // })


        // ////5:创建axios实例
        // const instance = axios.create({
        //     baseURL:"http://sxy.xyz",
        //     timeout:5000,
        // })

        // ////6:请求拦截
        // axios.interceptors.request.use(config => {
        //     //用处
        //     //1:显示loading状态
        //     //2:判断是否携带token 进行跳转到特定页面或者添加token
        //     //https://blog.csdn.net/u011067832/article/details/108599440
        //     //3:对请求携带的数据进行序列化操作
        //
        //     console.log('请求被拦截')
        //     //返回配置信息
        //     return config
        // }, err => {
        // })

        // ////7:响应拦截
        // axios.interceptors.response.use(res => {
        //     //返回响应结果信息
        //     return res
        // }, err => {
        //     if (err && err.response) {
        //         switch (err.response.status) {
        //             case 400:
        //                 console.log("请求错误");
        //                 break;
        //             case 401:
        //                 console.log("未授权访问");
        //                 break;
        //             default:
        //                 console.log("其他错误信息");
        //         }
        //     }
        // })

        ////8:使用二次封装的axios进行网络请求
        request({
            url: "https://httpbin.org/post",
            method: 'POST',
            data: {
                name: 'why',
                age: 18
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.products}</h1>
            </div>
        )
    }
}
