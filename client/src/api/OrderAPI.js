import axios from 'axios'

export class OrderAPI {
    constructor() {
        this._apiService = axios.create({
            baseURL: 'http://localhost:1488'
        })
    }

    sendMakeOrderRequest = async jsonOrder => {
        return await this._apiService.post('/makeOrder', jsonOrder)
    }
}