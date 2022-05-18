function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      const res = [...state];
      res[i].likes = res[i].likes + 1;
      return res;
    default:
      return state;
  }
}

export default posts;
