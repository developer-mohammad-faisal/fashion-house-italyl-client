import React from "react";
import Left from "../../components/Home/Left";
import Middle from "../../components/Home/Middle";
import Right from "../../components/Home/Right";

const Home = () => {
  return (
    <main className="bg-[#F7F7F7] px-0 md:px-[45px] lg:px-[90px] py-10">
      <div className="flex justify-center items-start gap-5">
        <section className=" w-1/6 h-full hidden lg:block">
          <Left />
        </section>
        <section className=" w-full h-full lg:w-4/6">
          <Middle />
        </section>
        <section className=" w-1/6  h-full hidden lg:block">
          <Right />
        </section>
      </div>
    </main>
  );
};

export default Home;
