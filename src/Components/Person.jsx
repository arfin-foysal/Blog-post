import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Person(props) {
    const classes = useStyles();
    const{title,id}=props.person
   
    return (
        <div className={classes.root}>
            <h3>Post Title: {title}</h3> 
            <Button variant="contained" color="secondary"> Post: 
            <Link to={`/person/${id}`}>Read More</Link>
      </Button>
     
        </div>
    )
}