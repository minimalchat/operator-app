const initialState = {

};

const reducer = function ChatReducer(state = initialState, action) {
  console.log('CHAT', action.type); // commenting out temp to clean up test output

  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
