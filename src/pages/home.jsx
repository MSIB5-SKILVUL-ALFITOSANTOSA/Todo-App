import React from "react";

function Home() {
  return (
    <>
      <div className="flex flex-col border-fuchsia-900 justify-center  border-2 p-3 gap-1 mt-3 rounded-md items-center w-auto mx-3 w-[50%]">
        <button className=" border-fuchsia-900  border-2 p-3 gap-3  rounded-md items-center w-40 ">
          {" "}
          Login{" "}
        </button>
        <button className=" border-fuchsia-900   w-40 border-2 p-3  rounded-md items-center w-auto s">
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
