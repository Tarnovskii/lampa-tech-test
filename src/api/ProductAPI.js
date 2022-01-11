import axios from 'axios'

export class ProductAPI {
    constructor() {
        this._apiService = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com/albums'
        })
    }

   getProductsList = async page => {
        return await this._apiService.get(`/${page}/photos`)
    }

}