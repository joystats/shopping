import Layout from '../Layout'
import { useRef } from 'react'
import { AxiosShopping } from '../../configs/Axios'

const Login = ()=>{

    const userNameRef = useRef()
    const passwordRef = useRef()
    
    const LoginSubmit = ()=>{
        const postData = {
            member_username: userNameRef.current.value,
            member_password: passwordRef.current.value
        }
        AxiosShopping.post('/authen/login', postData)
        .then(({data})=>{
            if(data.success === true){
                const token = data.data
                localStorage.setItem('shopping_token', token)
            }else{
                alert('กรุณาลองใหม่')
            }
        })
    }

    return(
        <Layout>
            Login page
            <div>
                <input type="text" placeholder="Username" ref={userNameRef}/>
                <input type="password" placeholder="Password" ref={passwordRef}/>
                <button onClick={()=>LoginSubmit()}>Login</button>
            </div>
        </Layout>
    )
}

export default Login;

