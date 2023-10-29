import React from "react";

function Home() {
  return (
    <>
      <div className="flex flex-col border-fuchsia-900  border-2 p-3 gap-1 mt-3 rounded-md items-center w-auto mx-3 w-[50%]">
        <form className="flex flex-col border-fuchsia-900 justify-center  border-2 p-3 gap-1 mt-3 rounded-md items-center w-100 mx-3 w-[50%]">
          <label className="text-2xl">Login</label>
          <label className="text-2xl">Username</label>
          <input
            className="border-fuchsia-900  border-2 p-3 gap-3  rounded-md items-center w-full "
            type="text"
          />
          <label className="text-2xl">Password</label>
          <input
            className="border-fuchsia-900  border-2 p-3 gap-3  rounded-md items-center w-full "
            type="password"
          />
          <button className="border-fuchsia-900  border-2 p-3 gap-3  rounded-md items-center w-80 ">
            {" "}
            Login{" "}
          </button>
        </form>
        <button className="border-fuchsia-900  border-2 p-3 gap-3  rounded-md items-center w-80 ">
          {" "}
          register{" "}
        </button>
        <br />
        <div className="p-3 justify-center mx-3 ">
          <p> silahkan login terlebih dahulu...</p>
        </div>
      </div>
    </>
  );
}

export default Home;
