
import axios from "axios";
import Container from '@material-ui/core/Container';
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
  Typography,
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SearchIcon from '@material-ui/icons/Search';

const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&lang=ja';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey : 'fd4e0f8cb89542cd611b6b6decd1f971',
            requestCity: 'Tokyo',         //  ex. 'Tokyo,jp'
            city: 'Tokyo',
            response : []
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleGetWeather = this.handleGetWeather.bind(this);
    }
    handleGetWeather(){
        axios
            .get(API_ENDPOINT, {
                params: {
                    q: this.state.requestCity,
                    APPID: this.state.apiKey
                } })
            .then(res => {
                this.setState({
                    response: res.data.list,
                    city: res.data.city.name
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleInput({ target: { value } }) {
        this.setState({
            requestCity: value
        });
    }


    componentDidMount() {
      this.handleGetWeather();
      }


    render() {
        console.log(this.state.response);

        return (
          <Container component='main' maxWidth='xs'>
          <br/>
          <br/>
            <Container component='main' maxWidth='xs' >
          <Typography variant="h3"
          style={{ color: "#fff", textAlign: "center"}}
          >WEATHER</Typography>
              <CssBaseline/>
      <br/>
      <br/>
      </Container>
            <div>
            <Typography variant="h5"
            style={{ color: "#fff", textAlign: "center"}}
            >都市の天気を検索!</Typography>
            <br/>
            <Container>
              <div
              style={{position: "relative"}}
              >
                <Input type="text" value={this.state.requestCity} onChange={this.handleInput}
                style={{ color: "#fff", backgroundColor: "#3e3364", width: "340px",
                border: "1px solid white", borderRadius: "3px", textAlign: "center", padding: "5px" }}
                />
                <IconButton onClick={this.handleGetWeather}
                style={{ color: "#fff", backgroundColor: "", position: "absolute", top: "20%", right: "40px", padding: "3px"}}
                ><SearchIcon fontSize="small" /></IconButton>
               </div>
               </Container>
       <br/>
                <Container>
                <Typography variant="h6" style={{ color: "#fff"}}>Location: {this.state.city}</Typography>
                </Container>
                <List style={{width: "400px"}}>
                {Object.keys(this.state.response).map(key => (
                    <ListItem key={key} style={{width: "400px"}}>
                    <Card style={{backgroundColor: "#3e3364"}}>
                    <CardContent>
                    <Grid container>
                    <Grid item xs={12} lg={12}>
                      <Typography style={{color: "#fff"}}>
                    {this.state.response[key].dt_txt}
                    </Typography>
                    </Grid>

                  <Grid item xs={6} lg={6}>
                  <img src={'http://openweathermap.org/img/w/'+this.state.response[key].weather[0].icon+'.png'}
                  style={{ width: "100px" }}
                  />
                  <Typography variant="h5" style={{color: "#fff"}}>
                    {this.state.response[key].weather[0].description}
                    </Typography>
                  </Grid>

                 <Grid item xs={6} lg={6}>
                 <br/>
                 <Typography variant="h5" style={{color: "#ff0000"}}>
                        {this.state.response[key].main.temp_max}℃
                 </Typography>

                 <Typography variant="h6" style={{color: "#0000ff"}}>
                        {this.state.response[key].main.humidity}%
                </Typography>
                  </Grid>
                        </Grid>
                        </CardContent>
                        </Card>
                    </ListItem>
                ))}
          </List>

            </div>
            </Container>
        );



    }




}
