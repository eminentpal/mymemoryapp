import {DELETE, FETCH_ALL, UPDATE, LIKE, CREATE} from '../constants/actionTypes'
// this * means we are importing everytin
import * as api from "../api"


//Action creators
//payload are data where we store all our posts
//  thunk helps us to create extra error function
export const getPosts = () => async (dispatch) =>{

     try {
         const {data} = await api.fetchPosts();
         dispatch ({type: FETCH_ALL, payload: data })
     } catch (error) {
         console.log(error.message)
     } 
   
}

export const createPost = (post) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(post);
        dispatch({type: CREATE , payload: data})
    } catch (error) {
        console.log(error)
    }
}

// remember under api you passed in id and updatedPost, updatedPost is the word post
export const updatePost = (id, post) => async (dispatch) =>{
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({type: UPDATE , payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        // we dont use const {data} cus we not expecting any ddata we only deleting a data
        await api.deletePost(id);
        dispatch({type: DELETE , payload: id});
    } catch (error) {
        console.log(error)
    }
}


export const likePost = (id) => async  (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({type: LIKE , payload:data})
    } catch (error) {
        console.log(error)
    }
}