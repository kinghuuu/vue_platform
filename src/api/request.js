import axios from 'axios'

export function request(config, success, failure) {
    //1.创建axios的实例
    const instance = axios.create({
        baseURL: '',
        timeout: 5000
    })

    instance(config)
        .then(res => {
            success(res)
        })
        .catch(err => {
            failure(err)
        })
}

