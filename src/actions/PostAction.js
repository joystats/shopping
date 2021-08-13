import Axios from "../configs/Axios"

const getPost = ()=>{

    return (dispatch)=>{
        Axios.get('/posts')
        .then((res)=>{
            dispatch({
                type: 'GET_POST',
                payload: res.data
            })
        })
    }

    /*return {
        type: 'GET_POST',
        payload: [1, 2, 3, 4]
    }*/
}

const getXXX = ()=>{

}

export {
    getPost,
    getXXX
}

