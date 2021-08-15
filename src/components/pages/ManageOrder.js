import Layout from '../Layout'
import { useEffect, useState } from 'react'
import { AxiosShopping } from '../../configs/Axios'
import socketIO from 'socket.io-client'

const io = socketIO('http://localhost:5000')

const ManageOrder = ()=>{

    const [orders, setOrders] = useState([])
    const [counter, setCounter] = useState(0)

    const token = localStorage.getItem('shopping_token')

    useEffect(()=>{
        const headers = {
            /*'Content-Type': 'application/json',*/
            'Authorization': 'bearer '+token
        }
        AxiosShopping.get('/order/list', { headers })
        .then(({data})=>{
            setOrders(data.orders)
        })

        io.on("sendOrder",(data)=>{
            setCounter(counter+1)
        })

    },[token, counter])

    const listOrder = ()=>{
        return orders && orders.map((item, index)=>{
            const { member_id, order_id, item_name, item_price, item_amount } = item
            return (
                <tr key={index}>
                    <td>{member_id}</td>
                    <td>{order_id}</td>
                    <td>{item_name}</td>
                    <td>{item_price}</td>
                    <td>{item_amount}</td>
                </tr>
            )
        })
    }
    
    return(
        <Layout>
            Manage Order
            <table border="1">
                <thead>
                    <tr>
                        <th>Member ID</th>
                        <th>Order ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    { listOrder() }
                </tbody>
            </table>
        </Layout>
    )
}

export default ManageOrder;

