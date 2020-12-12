import React, { useState, useEffect } from 'react';
import CustomCard from '../utils/CustomCard/CustomCard';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '6% 8%',
  },
}));

const Homepage = () => {
  const [data, setData] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users/');
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <div className={classes.root}>
      {data &&
        data.map((item) => (
          <CustomCard key={item.id} id={item.id} name={item.name} username={item.username} website={item.website} />
        ))}
    </div>
  );
};

export default Homepage;
