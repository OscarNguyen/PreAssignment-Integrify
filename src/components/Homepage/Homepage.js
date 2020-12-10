import React, { useState } from 'react';
import Request from 'axios-react';
import CustomCard from '../utils/CustomCard/CustomCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8rem',
  },
}));

const Homepage = ({ data }) => {
  const classes = useStyles();

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
