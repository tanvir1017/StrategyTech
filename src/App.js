import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import Blogs from "./Components/Blogs/Blogs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Courses from "./Components/Courses/Courses";
import HomePage from "./Components/HomePage/Header";
import Emergancy from "./Components/HomePage/OurITServices/NestedRoute/Emergancy";
import RemoteOfficeSupport from "./Components/HomePage/OurITServices/NestedRoute/RemoteOfficeSupport";
import OurITServices from "./Components/HomePage/OurITServices/OurITServices";
import Navigation from "./Components/Navigation/Navigation";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/home" element={<HomePage></HomePage>}>
            <Route path="/home" element={<Emergancy />}></Route>
            <Route path="/home/e_support" element={<Emergancy />}></Route>
            <Route
              path="/home/r_o_support"
              element={<RemoteOfficeSupport />}
            ></Route>
          </Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route path="/contact_us" element={<ContactUs></ContactUs>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about_us" element={<AboutUs></AboutUs>}></Route>
          <Route path="/ourItServices" element={<OurITServices />}></Route>
          <Route path="/logIn" element={<Login></Login>}></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
