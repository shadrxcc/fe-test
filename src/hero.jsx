import Header from "./header";
// import frame1 from "./assets/Frame1.png";
// import davido from "./assets/Frame2.png";
import YellowArrowSvg from "./yellowarrow";

const Hero = () => {
  return (
    <div className="hero mb-[76px]">
      <Header />

      <div className="relative px-4 sm:px-10 lg:px-60 ">
        <div className="flex flex-col gap-y-2.5">
          <h1 className="text-2xl sm:text-5xl gap-y-4 leading-10 sm:leading-[86px] lg:inline-flex lg:flex-col tracking-[5%] font-durk">
            AN INNOVATIVE <span>PLATFORM THAT</span>{" "}
            <span className="text-lemon lg:inline-flex gap-y-4 lg:flex-col">
              SUPPORTS <span>ARTISTS.</span>
            </span>
          </h1>
          <p className="text-lg lg:inline-flex lg:flex-col leading-[32px] ">
            Figma files can also be downloaded from our store. These{" "}
            <span>files include the latest Figma features and are</span>{" "}
          </p>
          <button
            className="bg-none m-0 w-fit py-2.5 px-0.5 text-lemon text-base flex items-center gap-x-3"
            type="button"
          >
            Try it now <YellowArrowSvg />
          </button>
        </div>

        {/* <img
          src={frame1}
          width={376}
          className="object-cover absolute top-[15rem] bottom-0 right-[28rem]"
          alt=""
        />
        <img
          src={davido}
          width={436}
          className="absolute top-0 -right-14"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Hero;
