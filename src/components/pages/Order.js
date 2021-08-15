import Layout from '../Layout'
import { AxiosShopping } from '../../configs/Axios'
import socketIO from 'socket.io-client'

const io = socketIO('http://localhost:5000')

const Order = ()=>{

    const token = localStorage.getItem('shopping_token')

    const products = [
        {
            item_name: "pen",
            item_price: 10,
            item_amount: 24
        },
        {
            item_name: "pencil",
            item_price: 20,
            item_amount: 48
        }
    ]

    const submitOrder = ()=>{
        const postData = {
            order_details: products
        }
        const headers = {
            'Authorization': 'bearer '+token
        }
        AxiosShopping.post('/order', postData, { headers })
        .then((res)=>{
            const { success, message } = res.data
            if(success === true){
                io.emit("insertOrder", { message: 'insert new order'})
                alert(message)
            }else{
                alert('กรุณาลองใหม่')
            }
        })
    }

    return(
        <Layout>
            Order page
            <div>
                <button onClick={()=>submitOrder()}>Submit Order</button>
            </div>
        </Layout>
    )
}

export default Order;

