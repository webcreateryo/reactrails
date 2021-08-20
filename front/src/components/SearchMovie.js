import React from 'react';
import _ from 'lodash';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
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
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


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

export default class SearchMovie extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          keyword : "キーワードを入力",
      };
      this.handleChangeInput = this.handleChangeInput.bind(this);
      this._debounce = this._debounce.bind(this);
  }

    state = {
        keyword: "",
    };

    handleChangeInput = (e) => {
        this.setState({keyword: e.target.value});
        this._debounce(e.target.value)
    }




    _debounce = _.debounce(value => {
        this.props.onSerchYoutube(value);
    },200);

    componentDidMount() {
      this._debounce();

      }



    render() {

        return (

            <div style={{marginTop: '20px', textAlign:'center'}}>
　　　　　　　　　<Container>

                <Input
                  value={this.state.keyword}
                  onChange={this.handleChangeInput}
                  placeholder="動画を検索"
                  style={{ color: "#fff", backgroundColor: "#3e3364", paddingLeft: "10px", width: "300px", position: "relative", border: "1px solid #fff", borderRadius: "3px", padding: "4px"}}
                />




             </Container>
            </div>
        )
    }
}
