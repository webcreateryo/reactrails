import React from 'react';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { spacing } from '@material-ui/system';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Input,
  ListItemSecondaryAction,
  Checkbox
  } from '@material-ui/core';


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
}
}));


const Video = (props) => {
    const classes = useStyles();
    const video = props.videos.map((video) => {
        const url = 'https://www.youtube.com/embed/' + video.id.videoId;



        return (
            <div style={{margin: '20px', textAlign: 'center', display: "flex", justifyContent: "center"}}>
            <Card className={classes.root}>
<Grid container>
<Grid item xs={12} lg={12}>
                <iframe
                  id="ytplayer"
                  type="ytplayer"
                  width="350"
                  height="270"
                  src={url}
                  frameborder="0"
                />
                </Grid>
                <Grid item xs={12} lg={12}>
        　　　<p>{video.snippet.title}</p>
        </Grid>
        <Grid item xs={5} lg={5}>
        　　　<p>{video.snippet.channelTitle}</p>
        </Grid>
        <Grid item xs={7} lg={7}>
        　　　<p>{video.snippet.publishedAt}</p>
        </Grid>
        </Grid>
                </Card>
            </div>
        )



    });

    return (
      <Container>
        <div style={{marginTop: '10px'}}>
          {video}
        </div>
        </Container>
    )

}

export default Video;
