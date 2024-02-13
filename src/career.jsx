import ArrowSvg from "./arrow";
import squad from "./assets/squad.png";

const Career = () => {
  return (
    <div className="bg-white flex flex-col xl:flex-row items-center gap-16 justify-between px-4 sm:px-10 lg:px-60 py-20">
      <img src={squad} width={557} className="" height={662} alt="" />
      <div className="text-dark space-y-[22px]">
        <h1 className="text-2xl sm:text-[38px] font-bold font-durk leading-[52px] tracking-[1%]">
          YOUR CAREER IS IN YOUR HANDS
        </h1>
        <div className="flex flex-col gap-y-5">
          <div className="space-y-7">
            <p className="text-[19px] leading-[32px]">
              Figma files can also be downloaded from our store. These files
              include the latest Figma features and are synced with the Webflow
              template.
            </p>
            <p className="text-[19px] leading-[32px]">
              Figma files can also be downloaded from our store. These files
              include the latest Figma features and are synced{" "}
            </p>
            <p className="text-[19px] leading-[32px]">
              Figma files can also be downloaded from our store. These files
              include the latest Figma features and are synced with the Webflow
              template.
            </p>
          </div>
          <button
            className="bg-none m-0 w-fit py-2.5 px-0.5 text-base flex items-center gap-x-3"
            type="button"
          >
            Try it now <ArrowSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Career;
