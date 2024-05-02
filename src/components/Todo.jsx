import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddForm from './AddForm';
import { deleteTodo } from '../features/todo/todoSlice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-zinc-700 min-h-screen">
      <AddForm />
      <h1 className="font-mono font-extrabold text-white text-4xl sm:text-5xl mt-5">Todo</h1>
      <ul className="w-full max-w-screen-lg mt-5">
        {todos.map((todo) => (
          <li className="font-mono shadow-lg rounded-md flex p-2 justify-between items-center bg-zinc-300 m-3" key={todo.id}>
            <div className="shadow-md bg-zinc-100 rounded-md p-2 flex-1 mr-2">{todo.task}</div>
            <button className="bg-red-800 min-w-[30px] text-zinc-100 text-nowrap font-bold font-mono shadow-lg rounded-full p-2 pl-5 pr-5" onClick={() => clickHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
