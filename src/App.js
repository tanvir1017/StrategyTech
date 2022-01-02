import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Blogs from "./Components/Blogs/Blogs";
import ContactUs from "./Components/ContactUs/ContactUs";
import HomePage from "./Components/HomePage/Header";
import Navigation from "./Components/Navigation/Navigation";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/contact_us" element={<ContactUs></ContactUs>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about_us" element={<AboutUs></AboutUs>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
