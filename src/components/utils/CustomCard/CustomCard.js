import React from 'react';
import { Card, CardContent, CardActions, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    height: '5rem',
    width: '5rem',
  },
  card: {
    width: '15.68rem',
    padding: '3%' /* '2.5rem' */,
    margin: '1rem',
    height: 'auto',
  },
}));

const CustomCard = ({ name, username, website, id }) => {
  const classes = useStyles();
  //console.log(id, name);
  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.root}>
          <div>
            <Avatar className={classes.avatar}>{name.substring(0, 1)}</Avatar>
          </div>

          <p>
            <b>{name}</b>
          </p>
          <p>@{username}</p>

          <a href={`http://${website}`}>{`http://${website}`}</a>
        </CardContent>
        <CardActions className={classes.root}>
          <Link to={`/users/${id}`}>
            <Button variant="contained" color="primary">
              More Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default CustomCard;
