import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Input,
  ListItemSecondaryAction,
  Checkbox,
  Typography
  } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
root: {
  width: "350px",
  color: "#fff",
  backgroundColor: "#3e3364",
  paddingTop: "10px"
},
media: {
  height: 0,
  paddingTop: '56.25%', // 16:9
},
expand: {
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
},
expandOpen: {
  transform: 'rotate(180deg)',
},
cardmarginleft: {
paddingLeft: "20px"
},
textboldeffect: {
  fontWeight: "bold"
},
listitemflex: {
  display: "flex",
  justifyContent: "center"
}
}));


function AnimeList() {
  const [users, setUsers] = useState([])
  const classes = useStyles();

  useEffect(() => {
    axios.get('https://api.moemoe.tokyo/anime/v1/master/2021/1')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <Container　component='main' maxWidth='xs'>
    <br/>
    <br/>
    <Typography variant="h3"
    style={{ color: "#fff", textAlign: "center"}}
    >ANIMATION</Typography>

  <br/>
  <br/>

  <Typography variant="h5"
  style={{ color: "#fff", textAlign: "center"}}
  >2021年冬期アニメ一覧!</Typography>
<br/>
   <List>
        {users.map((user, index) => (
          <ListItem key={index}>
<Card className={classes.root}>
<CardContent>
<Grid container>
<Grid item xs={12} lg={12}>
          <Typography variant="h5" style={{ color: "#fff", textAlign: "center"}}>{user.title}</Typography>
            </Grid>

<Grid item xs={12} lg={12}>
          <Typography style={{ color: "#fff", textAlign: "center", opacity: "0.8"}}>製作:{user.product_companies}</Typography>
            </Grid>
            <br/>
            <br/>
            <br/>
            <Grid item xs={6} lg={6} style={{display: "flex", justifyContent: "center"}}>
          <a href={"https://twitter.com/"+user.twitter_account}><TwitterIcon fontSize="large" style={{color: "#fff", backgroundColor: "#1da1f2", padding: "8px", borderRadius: "50%"}}/></a>
            </Grid>
            <Grid item xs={6} lg={6} style={{display: "flex", justifyContent: "center"}}>
          <a href={user.public_url}><LanguageIcon fontSize="large" style={{color: "#fff", backgroundColor: "#6c1df2", padding: "7px", borderRadius: "50%"}}/></a>
            </Grid>
          </Grid>
          </CardContent>
          </Card>
        </ListItem>


        ))}
        </List>
    </Container>
  );
}

export default AnimeList;
