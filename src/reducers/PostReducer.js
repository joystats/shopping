
const PostReducer = (state=[], action)=>{
    switch (action.type){
        case "GET_POST": 
            return action.payload
        case "XXX":
            return []
        default:
            return state
    }

}

export default PostReducer

