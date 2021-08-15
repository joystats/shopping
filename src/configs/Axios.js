import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json';

const Axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const AxiosShopping = axios.create({
    baseURL: 'http://localhost:5000'
})

export default Axios
export { AxiosShopping }

