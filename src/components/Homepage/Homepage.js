import React from 'react';
import CustomCard from '../utils/CustomCard/CustomCard';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

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
  /*   const userData = useSelector((state) => state.userData);
  console.log(userData); */
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
