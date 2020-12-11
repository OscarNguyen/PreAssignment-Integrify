import axios from 'axios';

export const ADD_FETCHED_DATA = 'ADD_FETCH_DATA';

export const fetchData = () => {
  return (dispatch) => {
    return axios
      .get('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: ADD_FETCHED_DATA,
          data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
