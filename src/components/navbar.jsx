import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-200 p-8">
      <div className="flex flex-row justify-between  items-center p-4 text-sm mx-3">
        <h1 className="font-bold   ">Todo App</h1>
        <nav>
          <ul className="flex flex-row gap-4 mx-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/login">Todo Api</NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
