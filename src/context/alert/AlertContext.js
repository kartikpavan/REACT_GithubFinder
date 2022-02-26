import React, { useReducer } from 'react';
import alertReducer from './alertReducer';

const AlertContext = React.createContext();

export const AlertProvider = ({ children }) => {
  const defaultState = null;
  const [state, dispatch] = useReducer(alertReducer, defaultState);

  const setAlert = (msg, type) => {
    dispatch({ type: 'SET_ALERT', payload: { msg, type } });
    setTimeout(() => dispatch({ type: 'CLEAR_ALERT' }), 5000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
