import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddForm() {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (!task.trim()) return; // Prevent adding empty tasks
    dispatch(addTodo(task));
    setTask(''); // Reset input field
  };

  return (
    <form className="font-mono w-[80vw] max-w-screen-lg shadow-lg rounded-md flex p-2 justify-center items-center bg-zinc-300" onSubmit={submitHandler}>
      <input
        className="w-full mr-2 ml-5 rounded-full p-2 pl-5 pr-5 focus:outline-none focus:ring-2 ring-zinc-900 ring-inset shadow-md"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="bg-green-800 min-w-[30px] text-zinc-100 text-nowrap justify-center items-center flex-none mt-2 ml-2 mb-2 mr-5 tracking-tighter font-bold font-mono shadow-lg rounded-full p-2 pl-5 pr-5">Add Task</button>
    </form>
  );
}

export default AddForm;
