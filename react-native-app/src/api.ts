import axios from "axios"

const API_URL = 'http://10.0.0.6:8080'

export function fetchOrders() {
    return axios.get(`${API_URL}/orders`)
}

export function confirmDelivery(id: number) {
    return axios.put(`${API_URL}/orders/${id}/delivered`)
}