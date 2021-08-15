import Layout from '../Layout'
import { useRef } from 'react'
import { AxiosShopping} from '../../configs/Axios'

const Register = ()=>{
    const fullNameRef = useRef()
    const userNameRef = useRef()
    const passwordRef = useRef()

    const RegisterSubmit = ()=>{
        const postData = {
            member_name: fullNameRef.current.value,
            member_username: userNameRef.current.value,
            member_password: passwordRef.current.value
        }
        AxiosShopping.post('/member/register', postData)
        .then(({data})=>{
            if(data.success === true){
                alert('สมัครสมาชิกเรียบร้อยแล้ว')
            }else{
                alert('กรุณาลองใหม่')
            }
        })
    }
    return(
        <Layout>
            <input type="text" placeholder="Fullname" ref={fullNameRef}/>
            <input type="text" placeholder="Username" ref={userNameRef}/>
            <input type="password" placeholder="password" ref={passwordRef}/>
            <button onClick={()=>RegisterSubmit()}>Register</button>
        </Layout>
    )
}

export default Register;

