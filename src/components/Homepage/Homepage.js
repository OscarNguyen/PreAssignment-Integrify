import React, { useState, useEffect } from 'react';
import CustomCard from '../utils/CustomCard/CustomCard';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { Card, CardContent, CardActions, Button, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '6% 8%',
  },
  smRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '6% 20%',
  },
}));

const Homepage = () => {
  const [data, setData] = useState([]);
  const theme = useTheme();
  const smMatch = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users/');
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <div className={smMatch ? classes.smRoot : classes.root}>
      {data &&
        data.map((item) => (
          <CustomCard key={item.id} id={item.id} name={item.name} username={item.username} website={item.website} />
        ))}
    </div>
  );
};

export default Homepage;
