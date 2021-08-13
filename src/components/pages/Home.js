import Layout from '../Layout'
import { useSelector } from 'react-redux';

const Home = ()=>{

    const post = useSelector(state=>state.post)
    const listPost = ()=>{
        return post.map((item, index)=>{
            return <li key={index}>{item.title}</li>
        })
    }

    return(
        <Layout>
            Home page
            <br/>
            { listPost() }
        </Layout>
    )
}

export default Home;

