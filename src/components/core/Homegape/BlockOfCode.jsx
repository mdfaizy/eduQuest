import AButton from "./AButton";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
const BlockOfCode = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroudGradient,
  codeColor,
}) => {
//   return (
//     <div className={`flex ${position} my-20 justify-between gap-10 flex-wrap `}>
//       <div className="w-[100%]    flex flex-row gap-8 items-center">
//         <div>
//           <div className=" flex flex-col gap-8 lg:w-[80%] p-4">{heading}</div>
//           <div className="text-richblack-300 font-bold text-sm p-4 md:text-lg lg:w-[80%]">
//             {subheading}
//           </div>

//           <div className="flex gap-7 mt-7 p-3 ">
//             <AButton active={ctabtn1.active} linkto={ctabtn1.link}>
//               <div className="flex gap-2 items-center">
//                 {ctabtn1.btnText}
//                 <FaArrowRight />
//               </div>
//             </AButton>
//             <AButton active={ctabtn2.active} linkto={ctabtn2.link}>
//               {ctabtn2.btnText}
//             </AButton>
//           </div>
//         </div>

//         <div className=" h-fit  flex flex-row text-10[px] w-[100%] py-3 lg:w-[70%] glass  ">
//           {backgroudGradient}

//           <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
//             <p>1</p>
//             <p>2</p>
//             <p>3</p>
//             <p>4</p>
//             <p>5</p>
//             <p>6</p>
//             <p>7</p>
//             <p>8</p>
//             <p>9</p>
//             <p>10</p>
//             <p>11</p>
//           </div>

//           <div
//             className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 relative`}
//           >
//             <div className={`${backgroudGradient}`}></div>
//             <TypeAnimation
//               sequence={[codeblock, 2000, ""]}
//               repeat={Infinity}
//               cursor={true}
//               style={{
//                 whiteSpace: "pre-line",
//                 display: "block",
//                 overflowX: "hidden",
//                 fontSize: "16px",
//               }}
//               omitDeletionAnimation={true}
//             />
//           </div>
//         </div>
//       </div>

//       <div className=" h-fit  flex flex-row text-10[px] w-[100%] py-3 lg:w-[500px] glass  ">
       

//         <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
//           <p>1</p>
//           <p>2</p>
//           <p>3</p>
//           <p>4</p>
//           <p>5</p>
//           <p>6</p>
//           <p>7</p>
//           <p>8</p>
//           <p>9</p>
//           <p>10</p>
//           <p>11</p>
//         </div>

//         <div
//           className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 relative`}
//         >
//           <div className={`${backgroudGradient}`}></div>
//           <TypeAnimation
//             sequence={[codeblock, 2000, ""]}
//             repeat={Infinity}
//             cursor={true}
//             style={{
//               whiteSpace: "pre-line",
//               display: "block",
//               overflowX: "hidden",
//               fontSize: "16px",
//             }}
//             omitDeletionAnimation={true}
//           />

//           <div></div>
//         </div>

//         <div></div>
//       </div>

//       <div>
//         <div className=" flex flex-col gap-8 lg:w-[80%] p-4">{heading}</div>
//         <div className="text-richblack-300 font-bold text-sm p-4 md:text-lg lg:w-[80%]">
//           {subheading}
//         </div>
//       </div>
//     </div>
//   );
// };





return (
  <div className={`flex ${position} my-20 justify-between gap-10 flex-wrap `}>
    
  {/*Section 1*/}
  <div className=' flex flex-col gap-8 lg:w-[50%] p-4'>
      {heading}
      <div className='text-richblack-300 font-bold text-sm p-4 md:text-lg'>
          {subheading}
      </div>

      <div className='flex gap-7 mt-7 p-3'>
          <AButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
              <div className='flex gap-2 items-center'>
                  {ctabtn1.btnText}
                  <FaArrowRight/>
              </div>
          </AButton>

          <AButton active={ctabtn2.active} linkto={ctabtn2.linkto}>  
                  {ctabtn2.btnText}
          </AButton>
      </div>


  </div>

   {/*Section 2*/}
   <div className=' h-fit  flex flex-row text-10[px] w-[100%] py-3 lg:w-[500px] glass  '> 
      {/*HW -> BG gradient*/}

      <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
      </div>

      <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 relative`}>
          <div className={`${backgroudGradient}`}></div>
         <TypeAnimation
          sequence={[codeblock, 2000, ""]}
          repeat={Infinity}
          cursor={true}
         
          style = {
              {
                  whiteSpace: "pre-line",
                  display:"block",
                  overflowX:"hidden",
                  fontSize:"16px",
              }
          }
          omitDeletionAnimation={true}
         />
      </div>

   </div>



  </div>
  
)
}

export default BlockOfCode;
