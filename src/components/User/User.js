import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardActions, Button, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './User.css';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '25%',
    margin: '4% 40%',
    padding: '2% 0',
    lineHeight: 2,
  },
  mdCard: {
    width: '39%',
    margin: '22% 32%',
    padding: '2% 0',
    lineHeight: 2,
  },
  smCard: {
    width: '83%',
    margin: '22% 9%',
    padding: '2% 0',
    lineHeight: 2,
  },

  content: {
    margin: '0 12%',
  },

  smMdContent: {
    margin: '0 3%',
  },

  mdContent: {},

  actions: {
    display: 'flex',
    justifyContent: 'center',
  },

  noDash: {
    marginLeft: '1rem',
  },

  button: {
    backgroundColor: 'green',
    color: 'white',
  },
}));

const User = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  let history = useHistory();
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.down('md'));
  const smMatch = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUserData(result.data);
    };

    fetchData();
  }, [id]);
  console.log(history);
  const classes = useStyles();
  return (
    <Card
      className={(smMatch ? classes.smCard : classes.card) || (mdMatch ? classes.mdCard : classes.card)}
      variant="outlined"
    >
      <CardContent className={smMatch || mdMatch ? classes.smMdContent : classes.content}>
        <ul className="dashed">
          <li>name: {userData.name}</li>
          <li>username: {userData.username}</li>
          <li>email: {userData.email}</li>
          <li>phone: {userData.phone}</li>
          <li>website: {userData.website}</li>

          {userData.company && <li>company: {userData.company.name}</li>}
          <li>address: </li>
        </ul>
        {userData.address && (
          <ul className={classes.noDash}>
            <li>street: {userData.address.street}</li>
            <li>suite: {userData.address.suite}</li>
            <li>city: {userData.address.city}</li>
            <li>zipcode: {userData.address.zipcode}</li>
          </ul>
        )}
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          className={classes.button}
          onClick={() => {
            history.push('/');
          }}
          variant="contained"
        >
          Back
        </Button>
      </CardActions>
    </Card>
  );
};

export default User;
