import { useEffect, useState } from "react";
import {
  Container,
  } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { spacing } from '@material-ui/system';
import CardContent from '@material-ui/core/CardContent';
import {
  Button,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Input,
  ListItemSecondaryAction,
  Checkbox,
  Typography
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
root: {
  width: "350px",
  color: "#fff",
  backgroundColor: "#3e3364",
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



export default function NewMovie() {
  const [data, setDate] = useState([]);
  const [pageNum, setPagNum] = useState(1);
  const classes = useStyles();
  const APP_URL = `https://api.themoviedb.org/3/discover/movie?api_key=afee79db84f71f65b0e13b6aeb93f20d&language=ja&page=${pageNum}`;
  const posterURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(APP_URL)
      .then((response) => response.json())
      .then((data) => {
        setDate(data.results);
      });
  }, []);

  console.log(data);

  const movieList = data.map((movie, index) => {
    return (

      <div class="movielist" key={index}>

<Card class="cardmargin">
<CardContent>
<Grid container>
<Grid item xs={6} lg={6} >
<img
  style={{ width: "300px" }}
  src={`${posterURL}/${movie.poster_path}`}
  alt={movie.title}
/>
</Grid>
<Grid item xs={6} lg={6} >
        <Typography>{movie.title}</Typography>
      </Grid>


        </Grid>
</CardContent>
</Card>

      </div>

    );
  });

  return (

  <Container component='main' >
  <br/>
  <br/>
    <Container component='main' maxWidth='xs' >
  <Typography variant="h3"
  style={{ color: "#fff", textAlign: "center"}}
  >MOVIE LIST</Typography>

<br/>
<br/>
</Container>

<Typography variant="h5"
style={{ color: "#fff", textAlign: "center"}}
>上映中映画一覧!</Typography>
<br/>

  <List
    style={{marginTop: '48px'}}
    component='ul'
    width="100%"
  >
  {data.map((movie, index) => (

<ListItem key={index} m={3} width="100%" className={classes.listitemflex}>

<Card className={classes.root}>

<CardContent>
<Grid container>
<Grid item xs={6} lg={6}>
<img
  style={{ width: "150px" }}
  src={`${posterURL}/${movie.poster_path}`}
  alt={movie.title}
/>
</Grid>
<Grid item xs={6} lg={6} className={classes.cardmarginleft}>
      <Typography className={classes.textboldeffect}>{movie.title}</Typography>
      <Typography>{movie.release_date}</Typography>
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
