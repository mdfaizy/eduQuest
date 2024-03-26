
import {HomePageExplore} from "../../../data/homepage.js";
import HighlightText from "./HighlightText.jsx";

const FilterHomeData = () => {

    const tabsName = [
        "Free",
        "New to coding",
        "Most popular",
        "Skills paths",
        "Career paths",
      ];

  return (
    <div>


        <div>
        <div>
        <div className="text-center text-4xl font-semibold mt-3">
        Unlock the <HighlightText text={"Power of Code"}/>
        </div>
        <div className="text-center pb-4">Learn to Build Anything You Can Imagine</div>
      </div>
        </div>

        <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabsName.map((ele, index) => {
          return (
            <div 
              className={` text-[16px] flex flex-row items-center gap-2  "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              key={index}
            //   onClick={() => setMyCards(ele)}
            >
              {ele}
            </div>
          );
        })}
     

        </div>
        <div className="hidden lg:block lg:h-[200px]"></div>

    </div>
  )
}

export default FilterHomeData