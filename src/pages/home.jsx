import React from "react";
import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1>Selamat Datang di Aplikasi Todo</h1>
        <p>Ini adalah halaman beranda aplikasi todo yang sederhana.</p>
        <p>menggunakan React-Context dan FlowbyteUI ❤️</p>
        <div className="mt-6">
          <Button style={{ margin: "0 auto" }}>
            <NavLink to="/todo">Get Started</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
