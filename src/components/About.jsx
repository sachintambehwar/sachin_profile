import { IoSchool } from "react-icons/io5";
const About = () => {
  return (
    <div name="about" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center h-full w-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-Primary_Text">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              Hi,I am Sachin,nice to meet you. please take a look around.
            </p>
          </div>
          <div>
            <p className="mb-2">
              Hi there! I'm a passionate web developer with a keen interest in
              creating user-friendly and visually appealing web applications. I
              love turning ideas into reality using the power of coding.
            </p>
            <h3 className="text-bold text-2xl border-b-2 border-Primary_Text w-min">
              <span className="flex items-center justify-center gap-1">
                <IoSchool />
                Education
              </span>
            </h3>
            <p className="text-lg mb-2">
              Bachelor of Engineering in Computer Technology
              <p className="ml-2 text-sm">
                <em>Rashtrasant Tukadoji Maharaj Nagpur University</em>
              </p>
            </p>
            <p className="text-lg">
              Post Graduation Diploma in Advanced Computing
              <p className="ml-2 text-sm">
                <em>MET Bandra</em>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
