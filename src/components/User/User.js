import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './User.css';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '18%',
    padding: '1rem 0',
  },

  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10rem 0',
  },

  noDash: {
    marginLeft: '1rem',
  },
}));

const User = ({ data }) => {
  const { id } = useParams();
  let { name, username, email, phone, company, website, address } = data.filter((item) => String(item.id) === id)[0];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <ul className="dashed">
            <li>name: {name}</li>
            <li>username: {username}</li>
            <li>email: {email}</li>
            <li>phone: {phone}</li>
            <li>company: {company.name}</li>
            <li>website: {website}</li>
            <li>address: </li>
          </ul>
          <ul className={classes.noDash}>
            <li>street: {address.street}</li>
            <li>suite: {address.suite}</li>
            <li>city: {address.city}</li>
            <li>zipcode: {address.zipcode}</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default User;
