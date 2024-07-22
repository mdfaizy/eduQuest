import HighlightText from "../components/core/Homegape/HighlightText";
import AButton from "../components/core/Homegape/AButton";
import Heading from "../assets/images/Heading.mp4";
import BlockOfCode from "../components/core/Homegape/BlockOfCode";
import FilterHomeData from "../components/core/Homegape/FilterHomeData";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    <div className="">
      <div className="mx-auto relative flex flex-col w-11/12 items-center justify-between text-white">
        <Link to={"/signup"}>
          <div className=" group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold transition-all duration-200 hover: scale-95 w-fit max-w-maxContent">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-3">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>
        <div className=" mt-4 w-[90%] text-left md:text-center text-sm md:text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
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

        <div className="w-11/12 ">
          <BlockOfCode
            position={"lg:flex-row"}
            heading={
              <div className="w-full text-4xl font-semibold lg:w-full">
                Unlock Your
                <HighlightText text={"coding potential"} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
            codeColor={"white"}
            backgroudGradient={"grad"}
          />
        </div>





      


        <div>
            <BlockOfCode 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Start
                        <HighlightText text={"coding in seconds"}/>
                    </div>
                }
                subheading = {
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                }
                ctabtn1={
                    {
                        btnText: "Continue Lesson",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                codeColor={"text-yellow-25"}
                backgroudGradient={"grad2"}
            />
        </div>




      

        <div className="className=' mx-auto flex w-11/12 max-w-maxContent flex-col items-center">
          <FilterHomeData />
        </div>
      </div>





      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <AButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </AButton>
            </div>
          </div>
          </div>
    </div>

    </>
  );
};

export default Home;
