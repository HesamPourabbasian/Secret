import { BsArrowDown } from "react-icons/bs";

const Title = () => {
  return (
    <div className="w-full justify-center items-start pt-20 bg-bgColor">
      <h1 className="font-bagel mobile:pt-[50px] mobile:text-[80px] pt-[50px] text-center text-[90px] text-rOrange leading-[90px] text-4xl">
        Research Chemicals <br />
        Price Tracker
      </h1>
      <div className="flex flex-col md:flex-row gap-4 p-4 pb-[50px] w-full">
        {/* First Div - Smaller */}
        <div className="flex-1 justify-center mobile:hidden text-center items-start md:flex">
          <div className="absolute items-center justify-center">
            <img
              className="w-[110px] ml-[100px] pt-[10px] h-[103px]"
              src="/ship-1.png"
              alt=""
            />
          </div>
        </div>

        {/* Second Div - Larger */}
        <div className="flex-2 p-6 text-center items-center ">
          <p className="text-center font-Inter font-interw2 text-[21px] text-[#5E2708]">
            Navigate the vast ocean of research chemicals with confidence.
          </p>
          <div className="trkbtn flex justify-center text-center items-center pt-[36px]">
            <button className="border-rOrange mr-[6px] text-white bg-rOrange border-[2px] rounded-[50px] px-[15px] py-[6px] text-[12px] flex items-center justify-center h-[50px]">
              Deal Tracker
            </button>

            <button className="text-rOrange text-[25px] border-2 border-rOrange rounded-[50px] px-[20px] py-[10px] flex items-center justify-center">
              <BsArrowDown className="font-bold" />
            </button>
          </div>
        </div>

        {/* Third Div - Smaller */}
        <div className="flex-1 mobile:hidden p-6 md:flex text-center justify-center items-center w-[92px] h-[92px]">
          <img src="/compus.png" alt="" />
          
        </div>
      </div>
    </div>
  );
};

export default Title;
