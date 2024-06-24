const Work = () => {
  return (
    <div name="work" className="w-full h-screen">
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-Primary_Text">
            Work
          </p>
          <p className="py-6">Please Check out some of my recent work</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-0 p-0">
            Laminaar Aviation Infotech
          </h2>
          <h3 className="text-base italic font-bold text-[#badba2] m-0">
            Associate software Engineer
          </h3>
          <p className="px-4">
            In my current role, I have developed reusable and functional React
            components, adhering to design specifications and UI/UX principles.
            Utilizing React.js and related libraries such as MUI, Date-fns,
            Formik, and Styled-Components, I have built responsive and
            interactive user interfaces for web applications. My experience
            includes conducting unit tests for React components using React
            Testing Library to ensure functionality and reliability.
          </p>
        </div>
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-sm shadow-[#cccccc] group container rounded-full flex justify-center items-center mx-auto content-div  py-8 workbg1">
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="font-bold uppercase tracking-wide text-Primary_Background">
                Curd operation
              </span>
              <div className="pt-6 pb-2 text-center">
                <a href="">
                  <button className="text-center border-2 hover:scale-110 duration-500 opacity-70 rounded-full px-6 ">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-sm shadow-[#cccccc] group container rounded-full flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="font-bold uppercase tracking-wide">
                Curd operation
              </span>
              <div className="pt-6 pb-2 text-center">
                <a href="">
                  <button className="text-center border-2 hover:scale-110 duration-500 opacity-70 rounded-full px-6 ">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-sm shadow-[#cccccc] group container rounded-full flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="font-bold uppercase tracking-wide">
                Curd operation
              </span>
              <div className="pt-6 pb-2 text-center">
                <a href="">
                  <button className="text-center border-2 hover:scale-110 duration-500 opacity-70 rounded-full px-6 ">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Work;
