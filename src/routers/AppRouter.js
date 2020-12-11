import Homepage from '../components/Homepage/Homepage';
import User from '../components/User/User';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
function AppRouter() {
  const [data, setData] = useState([]);
  //const data = useSelector((state) => state.userData);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users/');
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage data={data} />
        </Route>
        <Route path="/users/:id">
          <User data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
