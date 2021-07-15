import React, { useEffect, useState } from "react";
import Person from "./Person";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, []);
  return (
    <div>
      {data.map((val) => (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Person key={val.id} person={val}></Person>{" "}
              </Paper>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
}
