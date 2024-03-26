import HighlightText from "../components/core/Homegape/HighlightText";
import AButton from "../components/core/Homegape/AButton";
import Heading from "../assets/images/Heading.mp4";
import BlockOfCode from "../components/core/Homegape/BlockOfCode";
import FilterHomeData from "../components/core/Homegape/FilterHomeData";
const Home = () => {
  return (
    <div className="bg-gray-900">
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <div className="text-center text-4xl font-semibold mt-3">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>
        <div className="mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-grow gap-7 mt-0">
          <AButton active={true} Linkto={"/signup"}>
            Learn More
          </AButton>

          <AButton active={false} Linkto={"/login"}>
            Book a Demo
          </AButton>
        </div>

        <div className="mx-3 my-12 shadow-[10px_-5px_50px_-5px]  w-[90%]  shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            autoPlay
            muted
            loop
            src={Heading}
          ></video>
        </div>

        <div className="flex flex-grow gap-7 mt-0">
          <AButton active={true} Linkto={"/signup"}>
            Learn More
          </AButton>

          <AButton active={false} Linkto={"/login"}>
            Book a Demo
          </AButton>
        </div>

        <div className="mt-3 w-[80%] ">
          <BlockOfCode
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import AButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={
              <div className="codeblock2 absolute shadow-neutral-300"></div>
            }
          />
        </div>

        <div className="className=' mx-auto flex w-11/12 max-w-maxContent flex-col items-center">
          <FilterHomeData />
        </div>
      </div>
    </div>
  );
};

export default Home;
