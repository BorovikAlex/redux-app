function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log(state, action);
      const i = action.index;
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1), //why slice i+1
      ];
    // const res = [...state];
    // res[i].likes = res[i].likes+1;
    default:
      return state;
  }
}


export default posts;
