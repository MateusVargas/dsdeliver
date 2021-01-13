import axios from "axios"

const API_URL = 'http://10.0.0.6:8080'

export function fetchOrders() {
    return axios.get(`${API_URL}/orders`)
}