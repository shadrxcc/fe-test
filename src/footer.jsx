import arrow from "./assets/arrow-up-right.svg";

const Footer = () => {
  return (
    <div className="bg-dark flex flex-col gap-y-8 py-60 px-4 sm:px-10 lg:px-12">
      <div className="flex flex-col lg:flex-row justify-between  ">
        <div className="space-y-5">
          <h1 className="text-xl font-cfbold font-bold">
            SHORT LINE ABOUT US <br />
            THREE WORDS HERE
          </h1>
          <p className="text-xs font-medium">Short sentence here</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-10 gap-x-20">
          <div>
            <p className="text-xl inline-flex flex-col font-cfbold tracking-[-1%]">
              CONNECT
              <span> WITH </span>
              <span>US</span>
            </p>
          </div>

          <div className="flex font-clash gap-x-14">
            <div className="flex flex-col gap-y-4">
              {["Twitter", "Discord", "Instagram"].map((social, e) => (
                <span
                  className="flex cursor-pointer font-medium text-xs"
                  key={e}
                >
                  {social} <img src={arrow} width={10} height={10} alt="" />
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-y-4">
              {["Cookies", "Licenses", "Contact"].map((social, e) => (
                <span
                  className="flex cursor-pointer font-medium text-xs"
                  key={e}
                >
                  {social} <img src={arrow} width={10} height={10} alt="" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full border-none bg-[#33383F] h-[1px]" />
      <div className="flex flex-col lg:flex-row gap-y-7 font-cf text-[#6F767E] justify-between  ">
        <div className="flex sm:items-center gap-x-20">
          <div className="flex text-[9px] tracking-[48%] items-center gap-x-5">
            <p>2022</p>
            <svg
              width="4"
              height="5"
              viewBox="0 0 4 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2.5" r="2" fill="#6F767E" />
            </svg>
            <p>PLATFORM</p>
          </div>

          <p className=" text-[9px] tracking-[48%]">2022</p>
        </div>

        <div className="flex items-center gap-x-20 justify-center text-[9px] tracking-[48%]">
          <p>TERMS & CONDITIONS</p>
          <p>PRIVACY POLICY</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
