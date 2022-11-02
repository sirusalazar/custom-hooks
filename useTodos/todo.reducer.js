export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case '[TODO] Add todo':
      return [...initialState, action.payload];

    case '[TODO] Remove todo':
      return initialState.filter((i) => i.id !== action.payload);

    case '[TODO] toggle todo':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
