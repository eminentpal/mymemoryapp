//remember posts is the state
import {DELETE, FETCH_ALL, UPDATE, LIKE, CREATE} from '../constants/actionTypes'

 const post = (posts = [], action) => {
   switch (action.type) {
    case DELETE:
     return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
        return posts.map((post) => post._id === action.payload._id ? action.payload : post );
    case LIKE:
        return posts.map((post) => post._id === action.payload._id ? action.payload : post );
       case FETCH_ALL:
           return  action.payload;
       case CREATE:
           return [...posts, action.payload];
       default:
           return posts;
   }
}

// the like is left under update cus both perform same funtion which is updating
// if the post.id is === action.payload.id then we return the updated post else we return the post just as it was before
//keep in mind action.payload is the post and also updated post under Updtae

export default post;
//action.payload is our posts

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case 'FETCH_ALL':
//             return  state;
//         case 'CREATE':
//             return state;
//             break;
    
//         default:
//             break;
//     }
//  }