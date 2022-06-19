import React from "react";
import Left from "../../components/Home/Left";
import Middle from "../../components/Home/Middle";
import Right from "../../components/Home/Right";

const Home = () => {
  return (
    <main className="bg-[#F7F7F7] px-0 md:px-[45px] lg:px-[90px] py-10">
      <div className="w-full flex justify-center space-x-0 lg:space-x-5">
        <section className="border-2 border-primary-600 w-[270px] h-full hidden md:block">
          <Left />
        </section>
        <section className="border-2 border-primary-600 w-full h-full lg:w-[1024px]">
          <Middle />
        </section>
        <section className="border-2 border-primary-600 w-[270px] h-full hidden md:block">
          <Right />
        </section>
      </div>
    </main>
  );
};

export default Home;
