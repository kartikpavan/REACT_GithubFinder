const alertReducer = (state, action) => {
  if (action.type === 'SET_ALERT') {
    return action.payload;
  }
  if (action.type === 'CLEAR_ALERT') {
    return null;
  } else {
    return state;
  }
};

export default alertReducer;
