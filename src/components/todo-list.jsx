import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todo-provider";
import Swal from "sweetalert2";
import { Button } from "flowbite-react";

function TodoList() {
  const { todos, setTodos, setTodoInput, setIsEdit, setTodoEdit } =
    useContext(TodoContext);

  const [filter, setFilter] = useState("All");

  // handle status dengan menggunakan spread operator dan index

  const handleStatus = (index) => {
    let cloneTodos = [...todos];
    cloneTodos[index].status = !cloneTodos[index].status;
    setTodos([...cloneTodos]);
  };

  // handle edit dengan menggunakan findIndex berdasarkan id

  const handleEdit = (todo) => {
    setTodoEdit(todo);
    setTodoInput(todo.value);
    setIsEdit(true);
  };

  // handle delete dengan menggunakan splice berdasaarkan index

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

  // untuk memfilter data todo berdasarkan status : active, completed, all
  const handleComplete = (index) => {
    let cloneTodos = [...todos];
    cloneTodos[index].completed = !cloneTodos[index].completed;
    setTodos([...cloneTodos]);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Active") {
      return !todo.completed; // Check the 'completed' property for active todos
    } else if (filter === "Completed") {
      return todo.completed; // Check the 'completed' property for completed todos
    }
    return true;
  });

  return (
    <>
      <div className="flex mt-3 gap-2">
        <Button onClick={() => setFilter("All")} active={filter === "All"}>
          All
        </Button>
        <Button
          onClick={() => setFilter("Active")}
          active={filter === "Active"}
        >
          Active
        </Button>
        <Button
          onClick={() => setFilter("Completed")}
          active={filter === "Completed"}
        >
          Completed
        </Button>
      </div>

      <div className="">
        {filteredTodos.map((todo, index) => (
          <div
            key={todo.id}
            className={
              todo.completed
                ? "underline p-2 bg-green-400 text-white flex flex-row justify-between border-2 border-gray-400  gap-4 mt-3 rounded-md items-center w-full"
                : "p-2 border-solid border-b-2  flex flex-row justify-between border-2 border-gray-400  gap-4 mt-3 rounded-md items-center w-full "
            }
          >
            <div onClick={() => handleStatus(index)} className="ml-2">
              {todo.value}
            </div>
            <div className="gap-3">
              <button
                className="border-2 border-gray-400 p-2 mr-1 rounded-md bg-white"
                onClick={() => handleEdit(todo)}
              >
                ✏️
              </button>
              <button
                className="border-2 border-gray-400 p-2 rounded-md  bg-white"
                onClick={() => handleDelete(index)}
              >
                ⛔
              </button>
              {/* Add a checkmark button for completion */}
              <button
                className="border-2 border-gray-400 p-2 rounded-md  bg-white"
                onClick={() => handleComplete(index)}
              >
                ✔️
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
