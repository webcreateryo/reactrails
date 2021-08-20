import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Todo from './components/Todo'
import Weather from './components/Weather'

import YoutubeList from './components/YoutubeList'
import NewMovie from './components/NewMovie'
import System from './components/System'
import AnimeList from './components/AnimeList'
import Rakuten from './components/Rakuten'
import Header from './components/modules/Header'
import Footer from './components/modules/Footer'
import { BrowserRouter, Route, Switch } from "react-router-dom";




class App extends Component {

  render() {

    return (
      <div classname="App" style={{backgroundColor: "#1e1a3b"}}>
      <br/>
      <br/>
      <br/>
      <div style={{backgroundColor: "#1e1a3b", position: "relative", minHeight: "100vh", paddingBottom: "200px"}}>
      <BrowserRouter>

        <Header />

        <Switch className="wrappcontainer">
          <Route exact path="/" component={Todo} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/youtube" component={YoutubeList} />
          <Route exact path="/newmovie" component={NewMovie} />
          <Route exact path="/system" component={System} />
          <Route exact path="/animelist" component={AnimeList} />
          <Route exact path="/rakuten" component={Rakuten} />

        </Switch>

      </BrowserRouter>
    <Footer />
    </div>
      </div>
    );
  }
}

export default App;
