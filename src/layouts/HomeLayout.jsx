import React from "react";
import Header from "../components/Header";
import Latestnews from "../components/Latestnews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-components/LeftNavbar";

import RightNavbar from "../components/layout-components/RightNavbar";
import CategoryNews from "../Pages/CategoryNews";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <Latestnews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar />
        </aside>
        <section className="main col-span-6">
        <CategoryNews/>
        </section>
        <aside className="right col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
