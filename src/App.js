import React, { useState, useEffect } from "react"
import { Typography, Container, AppBar, Grow, Grid  } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts'
import memories from "./images/memories.png"
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PostDetail from "./components/Posts/Post/PostDetail";


function App() {

   const [currentId, setCurrentId ] = useState(null); 
  const classes = useStyles();
  const dispatch = useDispatch()

useEffect (() =>{
  dispatch(getPosts());
}, [currentId, dispatch ]);

// [currentId, dispatch ]) this part means dependency
// that means the function useeffect will be call again if any changes is 
//noticed in the currentId and dispatch, and d changes happen under form component

  return (

    <Router>
  <Switch>
    
 
   <Container maxidth="lg">
     <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img className={classes.image} src={memories} alt="memories" height="60" />
     </AppBar>
     <Grow in>
      <Container>
        <Grid container   className={classes.mainContainer} spacing={3} alignItems="stretch" justify="space-between" >
         <Grid item xs={12} sm={7} >
         <Route  exact path="/">

     
          <Posts setCurrentId={setCurrentId} />
          </Route>
         </Grid>
         
         <Grid item xs={12} sm={4} >
        
          <Form currentId={currentId} setCurrentId={setCurrentId} />
      
         </Grid>
         
        </Grid>
      </Container>

     </Grow>
   </Container>
   
<Route exact path ="/detail/:id"  > 
   <PostDetail  currentId={currentId} setCurrentId={setCurrentId} />
</Route>

   
   </Switch>
   </Router>
  );
}

export default App;
