import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    // <>
    <header className="flex flex-row justify-between items-center p-2 bg-green-300 text-sm ">
      <h1 className="font-bold   ">Todo App</h1>
      <nav>
        <ul className="flex flex-row gap-3  ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">Todo</NavLink>
          <NavLink to="/login">Todo Api</NavLink>
        </ul>
      </nav>
    </header>
    // </>
  );
}

export default Navbar;
