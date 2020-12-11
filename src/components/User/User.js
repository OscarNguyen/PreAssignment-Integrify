import React, { useState, useEffect } from 'react';
import Request from 'axios-react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './User.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

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
  const [userData, setUserData] = useState({});
  /* const userData = useSelector((state) => state.userData);
  console.log(userData); */
  /*  let { name, username, email, phone, company, website, address } =
    userData && userData.filter((item) => String(item.id) === id)[0]; */
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUserData(result.data);
    };

    fetchData();
  }, [id]);
  console.log(userData, '', userData.company);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
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
      </Card>
      {/*   <Request config={{ method: 'GET', url: `https://jsonplaceholder.typicode.com/users/${id}` }}>
        {({ response }) => (
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <ul className="dashed">
                <li>name: {response.data.name}</li>
                <li>username: {response.data.username}</li>
                <li>email: {response.data.email}</li>
                <li>phone: {response.data.phone}</li>
                <li>company: {response.data.company.name}</li>
                <li>website: {response.data.website}</li>
                <li>address: </li>
              </ul>
              <ul className={classes.noDash}>
                <li>street: {response.data.address.street}</li>
                <li>suite: {response.data.address.suite}</li>
                <li>city: {response.data.address.city}</li>
                <li>zipcode: {response.data.address.zipcode}</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </Request> */}
    </div>
  );
};

export default User;
