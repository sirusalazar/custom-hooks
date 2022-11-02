import { useEffect, useReducer } from 'react';
import { todoReducer } from './todo.reducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add todo',
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] Remove todo',
      payload: id,
    };

    dispatch(action);
  };

  const handleToggletodo = (id) => {
    const action = {
      type: '[TODO] toggle todo',
      payload: id,
    };

    dispatch(action);
  };
  return {
    todos,
    todosCount: todos.length,
    pendigTodos: todos.filter((t) => !t.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggletodo,
  };
};
