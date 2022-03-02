const initialState = {
  teams: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_TEAMS": {
      return { teams: action.teams };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
