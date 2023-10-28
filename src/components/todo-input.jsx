import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todo-provider";
import Swal from "sweetalert2";

function TodoInput() {
  const {
    todos,
    setTodos,
    todoInput,
    setTodoInput,
    isEdit,
    todoEdit,
    setIsEdit,
  } = useContext(TodoContext);

  const handleClick = (e) => {
    e.preventDefault();

    if (isEdit) {
      let cloneTodo = [...todos];
      let index = cloneTodo.findIndex((item) => item.id == todoEdit.id);
      cloneTodo[index].value = todoInput;

      setTodos(cloneTodo);
      setIsEdit(false);
      setTodoInput("");

      // alert
      Swal.fire({
        icon: "success",
        title: "Todo berhasil diubah",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      let newTodo = {
        id: new Date(),
        value: todoInput,
        status: false,
      };

      setTodos([...todos, newTodo]);
      // alert
      Swal.fire({
        icon: "success",
        title: "Todo berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    setTodoInput("");
  };

  return (
    <form className=" flex flex-row justify-between border-2 border-gray-400 p-2 gap-3 rounded-md">
      <input
        className="p-3 w-full border-solid border-gray-500 border-2 rounded-md"
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        className="flex flex-row justify-between border-2 border-gray-400 p-3 gap-3  rounded-md"
        onClick={handleClick}
      >
        {isEdit ? "Edit" : "Add"}
      </button>
    </form>
  );
}

export default TodoInput;
