import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./componentes/Header";

function Layout(children) {
  return (
    <section className="w-full min-h-screen bg-gray-900">
      <Header />
      <main className="">
        <Outlet/>
      </main>
    </section>
  );
}

export default Layout;
