import React from 'react';
import Post from './Post/Post';
import {useSelector} from "react-redux";
import useStyles from "./styles";
import { Grid, CircularProgress } from '@material-ui/core'


const Posts = ({ setCurrentId }) => {
    const classes = useStyles();

    //state is the global redux store we created in the main index
 //posts is created under reducers index
    const posts = useSelector(state => state.posts)
   // console.log(posts)

    return (
        // !posts.length this means if not or if ders no post
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                <Grid key={post.id} item xs={12} sm={6}> 
                  <Post setCurrentId={setCurrentId} post={post} />
               </Grid>
              ))}
            </Grid>
        )
        
      
    )
}

export default Posts
