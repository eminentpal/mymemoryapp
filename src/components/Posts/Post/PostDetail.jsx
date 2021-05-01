import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const PostDetail = ({currentId, setCurrentId}) => {


    const [item , setItem] = useState(currentId)

    // const dispatch = useDispatch()
    
    const post  = useSelector(state =>  currentId ? state.posts.find((post) => post._id === currentId) : null)
 console.log(post)

    return (
        <div>
            <h1 style={{marginTop:"600px"}} >{post.id}</h1>
       <img src="http://localhost:3000/static/media/memories.9cfa8a46.png" />
        </div>
    )
}

export default PostDetail
