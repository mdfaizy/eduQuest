import { useDispatch, useSelector } from "react-redux"
// import { Table, Tbody, Td, Th, Thead, tr } from "react-super-responsive-table"

import { setCourse, setEditCourse } from "../../../../slice/courseSlice"
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

// import { formatDate } from "../../../../services/formatDate"
import {
  deleteCourse,
  fetchInstructorCourses,
} from "../../../../apiService/allApiOperation/courseDetailsAPI"
import { COURSE_STATUS } from "../../../../utils/constants"
import ConfirmationModal from "../../../common/ConfirmationModal"

export default function CoursesTable({ courses, setCourses }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const trUNCATE_LENGTH = 30

  const handleCourseDelete = async (courseId) => {
    setLoading(true)
    await deleteCourse({ courseId: courseId }, token)
    const result = await fetchInstructorCourses(token)
    if (result) {
      setCourses(result)
    }
    setConfirmationModal(null)
    setLoading(false)
  }

  // console.log("All Course ", courses)

  if(loading) {
    return (
        <div className="custom-loader"></div>
    )
    }


  return (
    <>
      <table className="rounded-xl border border-richblack-800 ">
        <thead >
          <tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2 text-richblack-100">
            <th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
              Courses
            </th>
            {/* <Th className="text-left text-sm font-medium uppercase text-richblack-100">
              Duration
            </Th> */}
            <th className="text-left text-sm font-medium uppercase text-richblack-100">
              Price
            </th>
            <th className="text-left text-sm font-medium uppercase text-richblack-100">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {courses?.length === 0 ? (
            <tr>
              <td className="py-10 text-center text-2xl font-medium text-richblack-100">
                No courses found
                {/* TODO: Need to change this state */}
              </td>
            </tr>
          ) : (
            courses?.map((course) => (
              <tr
                key={course?._id}
                className="flex gap-x-10 border-b border-richblack-800 px-6 py-8 gap-4"
              >
                <td colSpan={1}  className="flex flex-1 gap-x-4 p-3">
                  <img
                    src={course?.thumbnail}
                    alt={course?.courseName}
                    className="md:h-[148px] md:w-[220px] aspect-video rounded-lg object-cover"
                  />
                  <div className="flex flex-col gap-1 justify-between">
                    <p className="text-lg font-semibold text-richblack-5 mt-3">
                      {course.courseName}
                    </p>
                    <p className="text-xs text-richblack-300">
                      {course?.courseDescription.split(" ")?.length >
                      trUNCATE_LENGTH
                        ? course.courseDescription
                            .split(" ")
                            .slice(0, trUNCATE_LENGTH)
                            .join(" ") + "..."
                        : course.courseDescription}
                    </p>
                    <p className="text-[12px] text-white">
                      {/* Created: {formatDate(course?.createdAt || course?.updatedAt)} */}
                    </p>
                    {course.status === COURSE_STATUS.DRAFT ? (
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
                        <HiClock size={14} />
                        Drafted
                      </p>
                    ) : (
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
                        <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
                          <FaCheck size={8} />
                        </div>
                        Published
                      </p>
                    )}
                  </div>
                </td>
                {/* <Td className="text-sm font-medium text-richblack-100">
                  6hr 30min
                </Td> */}
                <td className="text-sm font-medium text-richblack-100 mb-5">
                  ₹{course.price}
                </td>
                <td className="text-sm font-medium text-richblack-100 ">
                  <button
                    disabled={loading}
                    onClick={() => {
                      navigate(`/dashboard/edit-course/${course._id}`);
                    }}
                    title="Edit"
                    className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300 mr- mb-"
                  >
                    <FiEdit2 size={20} />
                  </button>
                  <button
                    disabled={loading}
                    onClick={() => {
                      setConfirmationModal({
                        text1: "Do you want to delete this course?",
                        text2:
                          "All the data related to this course will be deleted",
                        btn1Text: !loading ? "Delete" : "Loading...  ",
                        btn2Text: "Cancel",
                        btn1Handler: !loading
                          ? () => handleCourseDelete(course._id)
                          : () => {},
                        btn2Handler: !loading
                          ? () => setConfirmationModal(null)
                          : () => {},
                      })
                    }}
                    title="Delete"
                    className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}












// // src/components/CoursesTable.js

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { Table, Tbody, Td, Th, Thead, tr } from "react-super-responsive-table";
// import { FaCheck } from "react-icons/fa";
// import { FiEdit2 } from "react-icons/fi";
// import { HiClock } from "react-icons/hi";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
// import { setCourse, setEditCourse } from "../../../../slice/courseSlice";
// import { deleteCourse, fetchInstructorCourses } from "../../../../apiService/allApiOperation/courseDetailsAPI";
// import { COURSE_STATUS } from "../../../../utils/constants";
// import ConfirmationModal from "../../../common/ConfirmationModal";
// // import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
// import { Table, Thead, Tbody, tr, Th, Td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
// export default function CoursesTable({ courses, setCourses }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { token } = useSelector((state) => state.auth);
//   const [loading, setLoading] = useState(false);
//   const [confirmationModal, setConfirmationModal] = useState(null);
//   const trUNCATE_LENGTH = 30;

//   const handleCourseDelete = async (courseId) => {
//     setLoading(true);
//     await deleteCourse({ courseId }, token);
//     const result = await fetchInstructorCourses(token);
//     if (result) {
//       setCourses(result);
//     }
//     setConfirmationModal(null);
//     setLoading(false);
//   };

//   if (loading) {
//     return <div className="custom-loader"></div>;
//   }

//   return (
//     <>
//       <Table className="rounded-xl border border-richblack-800">
//         <Thead>
//           <tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2 text-richblack-100">
//             <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
//               Courses
//             </Th>
//             <Th className="text-left text-sm font-medium uppercase text-richblack-100">
//               Price
//             </Th>
//             <Th className="text-left text-sm font-medium uppercase text-richblack-100">
//               Actions
//             </Th>
//           </tr>
//         </Thead>
//         <Tbody>
//           {courses?.length === 0 ? (
//             <tr>
//               <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
//                 No courses found
//               </Td>
//             </tr>
//           ) : (
//             courses?.map((course) => (
//               <tr
//                 key={course?._id}
//                 className="flex gap-x-10 border-b border-richblack-800 px-6 py-8 gap-4"
//               >
//                 <Td colSpan={1} className="flex flex-1 gap-x-4 p-3">
//                   <img
//                     src={course?.thumbnail}
//                     alt={course?.courseName}
//                     className="md:h-[148px] md:w-[220px] aspect-video rounded-lg object-cover"
//                   />
//                   <div className="flex flex-col gap-1 justify-between">
//                     <p className="text-lg font-semibold text-richblack-5 mt-3">
//                       {course.courseName}
//                     </p>
//                     <p className="text-xs text-richblack-300">
//                       {course?.courseDescription.split(" ")?.length > trUNCATE_LENGTH
//                         ? course.courseDescription
//                             .split(" ")
//                             .slice(0, trUNCATE_LENGTH)
//                             .join(" ") + "..."
//                         : course.courseDescription}
//                     </p>
//                     <p className="text-[12px] text-white">
//                       {/* Created: {formatDate(course?.createdAt || course?.updatedAt)} */}
//                     </p>
//                     {course.status === COURSE_STATUS.DRAFT ? (
//                       <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
//                         <HiClock size={14} />
//                         Drafted
//                       </p>
//                     ) : (
//                       <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
//                         <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
//                           <FaCheck size={8} />
//                         </div>
//                         Published
//                       </p>
//                     )}
//                   </div>
//                 </Td>
//                 <Td className="text-sm font-medium text-richblack-100 mb-5">
//                   ₹{course.price}
//                 </Td>
//                 <Td className="text-sm font-medium text-richblack-100">
//                   <button
//                     disabled={loading}
//                     onClick={() => navigate(`/dashboard/edit-course/${course._id}`)}
//                     title="Edit"
//                     className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
//                   >
//                     <FiEdit2 size={20} />
//                   </button>
//                   <button
//                     disabled={loading}
//                     onClick={() =>
//                       setConfirmationModal({
//                         text1: "Do you want to delete this course?",
//                         text2: "All the data related to this course will be deleted",
//                         btn1Text: !loading ? "Delete" : "Loading...",
//                         btn2Text: "Cancel",
//                         btn1Handler: !loading
//                           ? () => handleCourseDelete(course._id)
//                           : () => {},
//                         btn2Handler: !loading
//                           ? () => setConfirmationModal(null)
//                           : () => {},
//                       })
//                     }
//                     title="Delete"
//                     className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
//                   >
//                     <RiDeleteBin6Line size={20} />
//                   </button>
//                 </Td>
//               </tr>
//             ))
//           )}
//         </Tbody>
//       </Table>
//       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//     </>
//   );
// }
