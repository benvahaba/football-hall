const initialState = {
  payload: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_TEAMS": {
      return { payload: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
