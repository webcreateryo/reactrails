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
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';



const useStyles = makeStyles({
  root: {
    minWidth: 300,
    backgroundColor: "#3e3364",
  },
  root2: {
    minWidth: 300,
    color: "#fff",
    backgroundColor: "#3e3364",
    padding: "5px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  inputcard: {
    minWidth: 200,
    backgroundColor: "#1e1a3b",
    position: "relative",
  }
});


export default function MainContainer ()  {
  const [createissue, setCreateissue] = useState("");
  const [issues, setIssues] = useState([]);
  const [updateissue, setUpdateissue] = useState("");
  const classes = useStyles();

  const createIssue = (event) => {
    console.log("イベント発火")
    axios.post('https://reactbackend003.herokuapp.com/issues',
      {
        name: createissue
      }
    ).then(response => {
      console.log("registration response", response.data)
      setIssues([...issues, {
        id: response.data.id,
        name: response.data.name
      }])
      resetTextField()
    }).catch(error => {
      console.log("registration error", error)
    }).catch(data =>  {
      console.log(data)
    })
    event.preventDefault()
  }

  useEffect(()  =>  {
    async function fetchData()  {
      const result = await axios.get('https://reactbackend003.herokuapp.com/issues',)
        console.log(result)
        console.log(result.data)
        setIssues(result.data);
      }
      fetchData();
      }, []);

  const deleteIssue = (id) => {
    axios.delete(`https://reactbackend003.herokuapp.com/issues/${id}`)
    .then(response => {
      setIssues(issues.filter(x => x.id !== id))
      console.log("set")
    }).catch(data =>  {
      console.log(data)
    })
  }

  const updateIssue = (id) => {
    axios.patch(`https://reactbackend003.herokuapp.com/issues/${id}`,
    {
      name: updateissue
    }
    ).then(response => {
      setIssues(issues.filter(x => x.id !== id))
      console.log(response.data)
    }).catch(data =>  {
      console.log(data)
    })
  }

  const resetTextField = () => {
    setCreateissue('')
  }
  const handleUpdate = (event) => {
    setUpdateissue(event.target.value)
  }

  return (
    <React.Fragment>
    <br/>
    <br/>
      <Container component='main' maxWidth='xs' >
    <Typography variant="h3"
    style={{ color: "#fff", textAlign: "center"}}
    >TODO LIST</Typography>
        <CssBaseline/>
<br/>
<br/>
      <Container>
          <form onSubmit={createIssue}
          style={{ color: "#fff", backgroundColor: "#3e3364", position: "relative", width: "320px", border: "1px solid white", borderRadius: "3px", textAlign: "center" }}>

            <Input
                type="text"
                name="issue"
                value={createissue}
                placeholder="Write a Task"
                onChange={event => setCreateissue(event.target.value)}
                className={classes.root2}
                borderColor="white"
            />
            <IconButton aria-label="delete" size="small"
            type="submit"
            variant='contained'
            style={{ color: "#3e3364", backgroundColor: "#fff", position: "absolute", top: "20%", right: "2%"}}
            >
                      <ArrowDownwardIcon fontSize="inherit" />
                    </IconButton>



          </form>
</Container>
<Container>
        <List
          style={{marginTop: '48px'}}
          component='ul'
          width="100%"
        >
          {issues.map(item => (


            <ListItem key={item.id} component='li' m={3} width="100%">
            <Card className={classes.root}>
            <CardContent width="100%">

       <Grid container>
       <Grid item xs={4}>
              <Checkbox
                value='primary'
                onChange={() => deleteIssue(item.id)}
                style={{ color: "#fff"}}
              />
        </Grid>
        <Grid item xs={8}>
              <ListItemText style={{ color: "#fff"}}>
                {item.name}
              </ListItemText>
         </Grid>
</Grid>

              </CardContent>
  </Card>
            </ListItem>


          ))}
        </List>
        </Container>
      </Container>
    </React.Fragment>
  );
}
