import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/SignUp";
import Blogs from "./Components/Blogs/Blogs";
import AuthProvider from "./Components/contexts/AuthProvider/AuthProvider";
import CourseDetails from "./Components/Courses/CourseDetails";
import Courses from "./Components/Courses/Courses";
import HomePage from "./Components/HomePage/Header";
import Emergancy from "./Components/HomePage/OurITServices/NestedRoute/Emergancy";
import OurITServices from "./Components/HomePage/OurITServices/OurITServices";
import MyOrder from "./Components/MyOrder/MyOrder";
import Navigation from "./Components/Navigation/Navigation";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route path="/home" element={<HomePage />}>
              <Route path="/home/e_support" element={<Emergancy />}></Route>
            </Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route
              path="/courses_details/:coursesId"
              element={
                <PrivateRoute>
                  <CourseDetails />
                </PrivateRoute>
              }
            ></Route>

            <Route path="/blogs" element={<Blogs />}></Route>

            {/* private Route */}
            <Route
              path="/myorders"
              element={
                <PrivateRoute>
                  <MyOrder />
                </PrivateRoute>
              }
            ></Route>

            <Route path="/about_us" element={<AboutUs />}></Route>
            <Route path="/ourItServices" element={<OurITServices />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route exact path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
