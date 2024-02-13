import ArrowSvg from "./arrow";
import stats from "./assets/stats.png";

const Stats = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row items-center justify-between">
      <div id="stats" className=" px-4 pb-28 pt-24 flex-1 sm:px-10 lg:px-60">
        <div className="text-dark space-y-[22px]">
          <h1 className="text-2xl sm:text-[38px] font-bold font-durk leading-[52px] tracking-[1%]">
            USE YOUR STATS TO MAKE MOVES
          </h1>
          <div className="flex flex-col gap-y-5">
            <div className="space-y-7">
              <p className="text-[19px] leading-[32px]">
                Figma files can also be downloaded from our store. These files
                include the latest Figma features and are synced with the
                Webflow template.
              </p>
              <p className="text-[19px] leading-[32px]">
                Figma files can also be downloaded from our store. These files
                include the latest Figma features and are synced{" "}
              </p>
              <p className="text-[19px] leading-[32px]">
                Figma files can also be downloaded from our store. These files
                include the latest Figma features and are synced with the
                Webflow template.
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
      <div className=" px-4 sm:px-10 flex-1 pt-28 pb-[83px] lg:px-60">
        <img src={stats} width={558} alt="" />
      </div>
    </div>
  );
};

export default Stats;
