import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //set alert
  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  const { alert } = state;
  const value = {
    alert,
    setAlert,
  };
  return (
    <AlertContext.Provider value={value}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
