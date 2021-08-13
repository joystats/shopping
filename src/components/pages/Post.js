import Layout from '../Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../actions'
import { useEffect } from 'react'

const Post = ()=>{

    const dispatch = useDispatch()

    const post = useSelector(state=>state.post)

    const listPost = ()=>{
        return post.map((item, index)=>{
            return <li key={index}>{item.title}</li>
        })
    }

    useEffect(()=>{
        dispatch(getPost())
    },[dispatch])
    
    return(
        <Layout>
            Post page
            <br/>
            <button onClick={()=>dispatch(getPost())}>get post</button>
            <hr/>
            { listPost() }
        </Layout>
    )
}

export default Post

