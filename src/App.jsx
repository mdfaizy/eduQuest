
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import SignupFrom from "./pages/SignupFrom"
import Login from "./pages/Login"
import ForgatePassword from './pages/ForgatePassword'
import ResetPassword from "./pages/ResetPassword"
function App() {
  

  return (
    <>
   <Navbar/>
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/signup' element={<SignupFrom/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/forgot-password" element={<ForgatePassword />} />
            <Route path="update-password/:id" element={<ResetPassword/>}/>
        </Routes>
    </>
  )
}

export default App
