const Discover = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between pt-[100px]">
      {/* First Div */}
      <div className="flex-1 p-6 ml-[5%]">
        <div className=" flex-col md:flex-row ">
          <div className="flex-1 p-6 flex text-center justify-end">
            <img className="-mt-20 w-[317px]" src="/Frame 190.png" alt="" />
          </div>

          {/* Second Div */}
          <div className="flex-1 leading-[50px] p-6">
            <h2 className="text-rOrange text-[48px] font-bagel">
              Discover. Compare. Research.
            </h2>
            <p className="leading-[25px] text-[21px] w-[60%] font-Inter">
              Compound Bay is your treasury to find research chemicals, compare
              prices, and conduct research at your own pace.
            </p>
          </div>
        </div>
      </div>

      {/* Second Div */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center text-center h-full">
        <img className="w-[70%]" src="/Rectangle 44.png" alt="" />
      </div>

      {/* Third Div */}
    </div>
  );
};

export default Discover;
