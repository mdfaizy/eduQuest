// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Navbar from "./components/common/Navbar";
// import SignupFrom from "./pages/SignupFrom";
// import Login from "./pages/Login";
// import ForgatePassword from "./pages/ForgatePassword";
// import ResetPassword from "./pages/ResetPassword";
// import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
// import VerifiyEmail from "./pages/VerifiyEmail";
// import PrivateRoute from "./components/core/auth/PrivateRoute";
// import MyProfile from "./components/core/Dsahboard/MyProfile";
// import OpenRoute from "./components/core/auth/OpenRoute";
import Settings from "./components/core/Dsahboard/Settings";
// import { useSelector } from "react-redux";
import EndrolledCourses from "./components/core/Dsahboard/EndrolledCourses";
import Cart from "./components/core/Dsahboard/Cart";
// import { ACCOUNT_TYPE } from "./utils/constants";
import AddCourse from "./components/core/Dsahboard/addCourse/Index";
import EditCourse from "./components/core/Dsahboard/EditCourse/EditCourse";
import MyCourses from "./components/core/Dsahboard/Mycourses/MyCourses";
// function App() {

//   const user = useSelector((state) => state.profile.user);
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={
//         <OpenRoute>
//         <SignupFrom />
//         </OpenRoute>} />
//         <Route path="/login" element={
//         <OpenRoute><Login />
//         </OpenRoute>} />
//         <Route path="/forgot-password" element={<ForgatePassword />} />
//         <Route path="/update-password/:id" element={<ResetPassword />} />
//         <Route path="/verify-email" element={<VerifiyEmail />} />
//         <Route path="/about" element={<About />} />


//         <Route
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         >
//           <Route path="dashboard/my-profile" element={<MyProfile />} />
//           <Route path="dashboard/settings" element={<Settings />} />
//           {/* {user?.accountType === ACCOUNT_TYPE.STUDENT && (
//             <>
//               <Route path="dashboard/cart" element={<Cart />} />
//               <Route
//                 path="dashboard/enrolled-courses"
//                 element={<EndrolledCourses />}
//               />
              
//             </>
//           )} */}
//           </Route>
//           {user?.accountType === ACCOUNT_TYPE.STUDENT && (
//             <>
//               <Route path="dashboard/cart" element={<Cart />} />
//               <Route
//                 path="dashboard/enrolled-courses"
//                 element={<EndrolledCourses />}
//               />
             
//             </>
//           )}
//           {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
//             <>
//               <Route path="dashboard/add-course" element={<AddCourse />} />
//               <Route path="dashboard/my-courses" element={<MyCourses />} />
//               <Route
//                 path="dashboard/edit-course/:courseId"
//                 element={<EditCourse />}
//               />
//               {/* <Route
//                 path="dashboard/instructor"
//                 element={<InstructorDashboard />}
//               /> */}
//             </>
//           )}
//       </Routes>
//     </>
//   );
// }

// export default App;


















import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import SignupFrom from "./pages/SignupFrom";
import Login from "./pages/Login";
import ForgatePassword from "./pages/ForgatePassword";
import ResetPassword from "./pages/ResetPassword";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
import VerifiyEmail from "./pages/VerifiyEmail";
import About from "./pages/About";
// import ContactUs from "./pages/ContactUs";
// import LoadingBar from "react-top-loading-bar";
// import { setProgress } from "./slices/loadingBarSlice";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import Dashboard from "./pages/Dashboard";
import OpenRoute from "./components/core/auth/OpenRoute";
import PrivateRoute from "./components/core/auth/PrivateRoute";
import MyProfile from "./components/core/Dsahboard/MyProfile";
// import Setting from "./components/core/Dashboard/Settings";
// import EnrollledCourses from "./components/core/Dashboard/EnrolledCourses";
// import Cart from "./components/core/Dashboard/Cart/index";
import { ACCOUNT_TYPE } from "./utils/constants";
// import AddCourse from "./components/core/Dashboard/AddCourse/index";
// import MyCourses from "./components/core/Dashboard/MyCourses/MyCourses";
// import EditCourse from "./Components/core/Dashboard/EditCourse.jsx/EditCourse";
import Catalog from './pages/Catalog';
// import ScrollToTop from "./components/ScrollToTop";
// import CourseDetails from "./pages/CourseDetails";
// import SearchCourse from "./pages/SearchCourse";
// import ViewCourse from "./pages/ViewCourse";
// import VideoDetails from "./components/core/ViewCourse/VideoDetails";
// import PurchaseHistory from "./components/core/Dashboard/PurchaseHistory";
// import InstructorDashboard from "./components/core/Dashboard/InstructorDashboard/InstructorDashboard";
import { RiWifiOffLine } from "react-icons/ri";
// import AdminPannel from "./components/core/Dashboard/AdminPannel";

function App() {
  console.log = function () {};
  const user = useSelector((state) => state.profile.user);
  // const progress = useSelector((state) => state.loadingBar);
  // const dispatch = useDispatch();
  return (
    <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      {/* <LoadingBar
        color="#FFD60A"
        height={1.4}
        progress={progress}
        onLoaderFinished={() => dispatch(setProgress(0))}
      /> */}
      <NavBar ></NavBar>
      {!navigator.onLine && (
        <div className="bg-red-500 flex text-white text-center p-2 bg-richblack-300 justify-center gap-2 items-center">
          <RiWifiOffLine size={22} />
          Please check your internet connection.
          <button
            className="ml-2 bg-richblack-500 rounded-md p-1 px-2 text-white"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      )}
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/catalog/:catalog" element={<Catalog />} />

        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <OpenRoute>
              <SignupFrom />
            </OpenRoute>
          }
        />

        <Route path="/forgot-password" element={<ForgatePassword />} />

        <Route path="/update-password/:id" element={<ResetPassword />} />

        <Route path="/verify-email" element={<VerifiyEmail/>} />

        <Route path="/about" element={<About />} />

        {/* <Route path="/contact" element={<ContactUs />} /> */}

        {/* <Route path="/courses/:courseId" element={<CourseDetails />} /> */}

        {/* <Route path="/search/:searchQuery" element={<SearchCourse />} /> */}

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              {/* <Route path="dashboard/cart" element={<Cart />} /> */}
              <Route
                path="dashboard/enrolled-courses"
                element={<EndrolledCourses />}
              />
              <Route
                path="dashboard/purchase-history"
                // element={<PurchaseHistory />}
              />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
              <Route
                path="dashboard/instructor"
                // element={<InstructorDashboard />}
              />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.ADMIN && (
            <>
              {/* <Route path="dashboard/admin-panel" element={<AdminPannel />} /> */}
            </>
          )}
        </Route>

        <Route
          element={
            <PrivateRoute>
              {/* <ViewCourse /> */}
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="/dashboard/enrolled-courses/view-course/:courseId/section/:sectionId/sub-section/:subsectionId"
                // element={<VideoDetails />}
              />
            </>
          )}
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;