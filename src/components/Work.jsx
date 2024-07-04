const Work = () => {
  return (
    <div name="work" className="w-full h-screen min-[100px]:h-full">
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
          <p className="px-1">
            In my current role, I have developed reusable and functional React
            components, adhering to design specifications and UI/UX principles.
            Utilizing React.js and related libraries such as MUI, Date-fns,
            Formik, and Styled-Components, I have built responsive and
            interactive user interfaces for web applications. My experience
            includes conducting unit tests for React components using React
            Testing Library to ensure functionality and reliability.
          </p>
        </div>
        <div className="text-xl mt-1 font-semibolds py-2 text-[#bbfbbb]">
          Take a look around ....
        </div>
        <div className="grid mt-6 mb-8 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="max-w-sm p-6 border rounded-lg shadow font-[black] todo">
            <a
              href="https://sachintambehwar.github.io/todos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#415e15]">
                ToDo App
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 text-[#070707]">
              ToDo App where you can write your daily todo task,login
              functionality is done using localstorage.
            </p>
            <a
              href="https://sachintambehwar.github.io/todos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg b bg-background shadow-[#badba2] shadow-sm  hover:scale-110 "
            >
              Check Now
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="max-w-sm p-6 border rounded-lg shadow font-[black] mern">
            <a
              href="https://sachintambehwar.github.io/todos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#415e15]">
                CURD-Operation
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 text-[#070707]">
              This is curd operation using mern stack
            </p>
            <a
              href="https://github.com/sachintambehwar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg b bg-background shadow-[#badba2] shadow-sm  hover:scale-110 "
            >
              Check Now
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          {/* <div className="max-w-sm p-6 border rounded-lg shadow font-[black] todo">
            <a
              href="https://sachintambehwar.github.io/todos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#415e15]">
                ToDo App
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 text-[#070707]">
              ToDo App where you can write your daily todo task,login
              functionality is done using localstorage.
            </p>
            <a
              href="https://sachintambehwar.github.io/todos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg b bg-background shadow-[#badba2] shadow-sm  hover:scale-110 "
            >
              Check Now
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
