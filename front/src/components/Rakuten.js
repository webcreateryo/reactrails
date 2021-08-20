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
import { Link } from 'react-router-dom'

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
    axios.get('https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?applicationId=1067950137121015258')
      .then(response => setUsers(response.data.Items))
      .catch(error => console.log(error))
  }, [])

  return (
    <Container　component='main' maxWidth='xs'>

    <br/>
    <br/>
    <Typography variant="h3"
    style={{ color: "#fff", textAlign: "center"}}
    >RAKUTEN</Typography>

  <br/>
  <br/>

  <Typography variant="h6"
  style={{ color: "#fff", textAlign: "center"}}
  >楽天市場商品総合売り上げランキング</Typography>
<br/>

<List>
    {users.map((user, index) => (
      <ListItem key={index} style={{marginBottom: "15px"}}>
      <Grid container>

      <Grid item xs={2} lg={2}>
　　　　<Card style={{textAlign: "center", marginRight: "10px", backgroundColor: "#ffab00"}}>
<CardContent style={{padding: "16px"}}>
<Typography variant="h5" style={{color: "#3e3364", fontWeight: "bold"}}>
{user.Item.rank}
</Typography>
</CardContent>
      </Card>
</Grid>

<Grid item xs={10} lg={10}>
      <Card style={{backgroundColor: "#3e3364"}}>
      <CardContent>

      <Grid container>

      <Grid item xs={12} lg={12}>
      <img src={user.Item.mediumImageUrls[0].imageUrl} width="100%"/>

      <Typography variant="h6" style={{color: "#fff", fontWeight: "bold"}}>
      <a href={user.Item.itemUrl}>
   {user.Item.itemName}
</a>
   </Typography>
      <Typography style={{color: "#fff", fontWeight: "bold", opacity: "0.8"}}>

   販売店:{user.Item.shopName}

   </Typography>
   <br/>
      <Typography variant="h5"　style={{color: "#ffab00", fontWeight: "bold"}}>

   {user.Item.itemPrice}円

   </Typography>

   </Grid>

   </Grid>

   </CardContent>
   </Card>
</Grid>


</Grid>
    </ListItem>


    ))}
</List>
    </Container>
  );
}

export default AnimeList;
