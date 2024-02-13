const Help = () => {
  return (
    <div className="mission pb-6 relative">
      <div className="flex px-4 sm:px-10 lg:px-60 items-center">
        <div className="flex flex-col gap-y-14">
          <h1 className="text-2xl sm:text-3xl font-bold leading-[52px] sm:inline-flex sm:flex-col gap-y-3 tracking-[2%] font-durk">
            ‘‘WE HELP ARTISTS FIND <span>THEIR FANS’’</span>
          </h1>
          <p className="text-[19px] sm:inline-flex sm:flex-col leading-[32px] text-[#6F767E]">
            Figma files can also be downloaded from our store. These{" "}
            <span>
              {" "}
              files include the latest Figma features and are synced{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
