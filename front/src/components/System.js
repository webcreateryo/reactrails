import React from 'react';
import axios from "axios";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { spacing } from '@material-ui/system';


export default class extends React.Component {

    render() {


        return (

<Container >
<br/>
<br/>
<Typography variant="h3"
style={{ color: "#fff", textAlign: "center"}}
>SYSTEM</Typography>
<br/>
<br/>
<Grid container spacing={5} wrap={"wrap-reverse"} >

<Grid item xs={12} lg={6} md={6}>
<Typography variant="h5"
style={{ color: "#fff"}}
>開発環境</Typography>
<br/>
<Typography style={{ color: "#fff", opacity: "0.8"}}>開発環境はDockerを使用し、ディレクトリをバックエンド、 フロントエンドに分け、ローカルホストでも別々のポートで開発しました。 バックエンドにはRails6、 フロントエンドにはReact.jsを使用し、
React.jsのデザインフレームワークのMaterial UIを導入しております。</Typography>

</Grid>
<Grid item xs={12} lg={6} md={6}>
<img src="reactsystem_img001.png" width="100%"
/>
</Grid>


</Grid>
<Grid container spacing={5} wrap={"wrap-reverse"}>

<Grid item xs={12} lg={6} md={6}>
<Typography variant="h5"
style={{ color: "#fff"}}
>本番環境</Typography>
<br/>
<Typography style={{ color: "#fff", opacity: "0.8"}}>本番環境はHerokuを使用し、ディレクトリ管理にはGithubを使用しました。 バックエンドからのデータをフロントエンドのAXIOSで受信したTODOアプリケーションを製作しました。
外部API(楽天API、OpenWeatherMap、TMDB等)からのデータも受信しデータを表示・検索するシステムも構築しました。</Typography>
</Grid>
<Grid item xs={12} lg={6} md={6}>
<img src="reactsystem_img002.png" width="100%"/>
</Grid>


</Grid>




</Container>

        );
    }
}
