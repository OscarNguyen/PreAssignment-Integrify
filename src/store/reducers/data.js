import React, { useEffect, useState } from 'react';
import { ADD_FETCHED_DATA } from '../actions/data';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_FETCHED_DATA:
      return [...action.data];
    default:
      return state;
  }
};
