import React, { useContext } from "react";
import { TodoContext } from "../context/todo-provider";
import Swal from "sweetalert2";

function TodoList() {
  const { todos, setTodos, setTodoInput, setIsEdit, setTodoEdit } =
    useContext(TodoContext);

  const handleStatus = (index) => {
    let cloneTodos = [...todos];
    cloneTodos[index].status = !cloneTodos[index].status;
    setTodos([...cloneTodos]);
  };

  const handleEdit = (todo) => {
    setTodoEdit(todo);
    setTodoInput(todo.value);
    setIsEdit(true);
  };

  const handleDelete = (index) => {
    let cloneTodos = [...todos];
    cloneTodos.splice(index, 1);
    setTodos(cloneTodos);
    Swal.fire({
      icon: "success",
      title: "Todo berhasil dihapus",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          className="flex flex-row justify-between border-2 border-gray-400 p-3 gap-3 mt-3 rounded-md items-center w-full"
        >
          <span
            onClick={() => handleStatus(index)}
            className={
              todo.status
                ? "line-through items-center p-3 rounded-md "
                : "p-3 pb-1 border-solid border-gray-500 border-b-2 rounded-sm "
            }
          >
            {todo.value}
          </span>
          <div className="gap-3">
            <button
              className="border-2 border-gray-400 p-3 mr-1 rounded-md"
              onClick={() => handleEdit(todo)}
            >
              ✏️
            </button>
            <button
              className="border-2 border-gray-400 p-3 rounded-md"
              onClick={() => handleDelete(index)} // Call handleDelete when the "Delete" button is clicked
            >
              ⛔
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
