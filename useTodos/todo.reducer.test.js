const { todoReducer } = require('../../src/08-useReducer/todo.reducer');

describe('todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'demo todo',
      done: false,
    },
  ];
  test('should return initial state', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('should add a todo', () => {
    const action = {
      type: '[TODO] Add todo',
      payload: {
        id: 2,
        description: 'new todo #2',
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('should delete a todo', () => {
    const action = {
      type: '[TODO] Remove todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test('should toggle todo', () => {
    const action = {
      type: '[TODO] toggle todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();
  });
});
