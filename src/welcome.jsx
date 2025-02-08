import React from "react";

const ResponsiveDivs = () => {
  return (
    <>
      <div className="">
        <img
          className="w-[200px] h-[204px] ml-[10%]"
          src="/Frame 159.png"
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row m-[10px] justify-between gap-4 pt-[50px]">
        {/* First Div */}
        <div className="flex-1  p-6 leading-[70px]  rounded-lg pl-[50px] ">
          <h2 className="text-rOrange text-[60px] font-bagel mobile:hidden">
            Welcome To <br /> Compound <br /> Bay
          </h2>
          <h2 className="text-rOrange text-[50px] font-bagel block sm:hidden ">
            Welcome To <br /> Compound Bay
          </h2>
          <button className="border-[2px] border-rOrange rounded-[50px] text-rOrange text-sm px-[20px] py-[8px]">
            Let's get started
          </button>
        </div>

        {/* Second Div */}
        <div className="flex-1  p-6 text-white text-center rounded-lg">
          <img className="-mt-[40px]" src="/Images.png" alt="" />
        </div>

        {/* Third Div */}
        <div className="flex-1  p-6 text-black rounded-lg  flex items-center justify-center">
          <p className="font-Inter  text-[21px]">
            At <b>Compound Bay</b>, we understand the challenges of sourcing
            high-quality compounds in an unregulated market. Whether you're
            delving into <b>peptides, amino acids, SARMs,</b> or <b>nootropics</b>, our
            platform is your ultimate resource for finding the best prices
            without compromising on quality.
          </p>
        </div>
      </div>
    </>
  );
};

export default ResponsiveDivs;
