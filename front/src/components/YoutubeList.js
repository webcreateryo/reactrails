import React from 'react';
import axios from 'axios';
import SearchMovie from './SearchMovie';
import Video from './Video';
import {
  Container,
  } from '@material-ui/core';
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


export default class YoutubeList extends React.Component {
  state = {
    videos: [],
  }

  onSerchYoutube = (keyword) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=5&key=AIzaSyAQxQQi5BTTjt2yrcQFpdrLaNeIN_8dOGY`;

    axios
      .get(url)
      .then(response => {
          this.setState({
            videos: response.data.items,
          });
      })
      .catch(() => {
          console.log('通信に失敗しました');
      });
  }

  render() {
    return (
<div>
    <Container>
    <br/>
    <br/>
    <Typography variant="h3"
    style={{ color: "#fff", textAlign: "center"}}
    >YOUTUBE</Typography>
    <br/>
    <br/>
    <Typography variant="h5"
    style={{ color: "#fff", textAlign: "center"}}
    >キーワードで動画検索!</Typography>
        <SearchMovie onSerchYoutube={this.onSerchYoutube} />
<br/>
        <Video videos={this.state.videos}/>

        </Container>
</div>
    )
  }
}
