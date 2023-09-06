import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/ContactPage";
import NotFound from "./components/NotFound";
import AboutProduct from "./components/About/AboutProduct";
import AboutUser from "./components/About/AboutUser";
import AboutIndex from "./components/About/AboutIndex";
import DemoNavigete from "./components/DemoNavigete";
import Course from "./components/DynamicRouter/Course";
import CourseDetail from "./components/DynamicRouter/CourseDetail";
import CourseDetailType from "./components/DynamicRouter/CourseDetailType";
import Admin from "./components/PrivateRouter/Admin";
import Login from "./components/PrivateRouter/Login";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import Home from "./components/bt1/Home";
import Contact from "./components/bt1/Contact";
import About from "./components/bt1/About";
import Portfolio from "./components/bt1/Portfolio";
import Nav from "./components/bt1/Nav";
import Service from "./components/bt2/Service";
import Portfolios from "./components/bt2/Portfolios";
import Abouts from "./components/bt2/Abouts";
import Team from "./components/bt2/Team";
import Contacts from "./components/bt2/Contacts";
import NavBar from "./components/bt2/NavBar";

function App() {
  return (
    // <div>
    //   {/* dùng link */}
    //   {/* <ul>
    //     <li>
    //       <Link to={"/"}>Home Page</Link>
    //     </li>
    //     <li>
    //       <Link to={"/about"}>About Page</Link>
    //       <ul>
    //         <li>
    //           <Link to={"/about/about-product"}>About Product</Link>
    //         </li>
    //         <li>
    //           <Link to={"/about/about-user"}>About User</Link>
    //         </li>
    //       </ul>
    //     </li>
    //     <li>
    //       <Link to={"/contact"}>Contact Page</Link>
    //     </li>
    //   </ul> */}

    //   {/* dùng NavLink */}
    //   <ul>
    //     <li>
    //       <NavLink to={"/"} style={styleNavLink}>
    //         Home Page
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to={"/about"} style={styleNavLink}>
    //         About Page
    //       </NavLink>
    //       <ul>
    //         <li>
    //           <NavLink to={"/about/about-product"} style={styleNavLink}>
    //             About Product
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to={"/about/about-user"} style={styleNavLink}>
    //             About User
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </li>
    //     <li>
    //       <NavLink to={"/contact"} style={styleNavLink}>
    //         Contact Page
    //       </NavLink>
    //     </li>
    //   </ul>

    //   <DemoNavigete />

    //   {/* cấu hình các router */}
    //   <Routes>
    //     {/* nhận 2 giá trị  */}
    //     <Route path="/" element={<HomePage />}></Route>
    //     <Route path="/about" element={<AboutPage />}>
    //       {/* Route index */}
    //       <Route index element={<AboutIndex />}></Route>

    //       {/* Nest route: định tuyến lồng */}
    //       <Route path="about-product" element={<AboutProduct />}></Route>
    //       <Route path="about-user" element={<AboutUser />}></Route>
    //     </Route>
    //     <Route path="/contact" element={<ContactPage />}></Route>

    //     {/* Dynamic router */}
    //     <Route path="/course" element={<Course />}></Route>
    //     <Route path="/course/:id" element={<CourseDetail />}></Route>
    //     <Route path="/course/:id/:type" element={<CourseDetailType />}></Route>

    //     {/* Private Router */}
    //     <Route element={<PrivateRouter />}>
    //       <Route path="/admin" element={<Admin />}></Route>

    //     </Route>
    //     <Route path="/login" element={<Login />}></Route>

    //     {/* router báo lỗi */}
    //     <Route path="*" element={<NotFound />}></Route>
    //   </Routes>
    // </div>

    // bai tap
    // <>

    //     <Nav/>
    //       <Routes>
    //         <Route path="/" element={<Home />}></Route>
    //         <Route path="/contact" element={<Contact />}></Route>
    //         <Route path="/about" element={<About />}></Route>
    //         <Route path="/portfolio" element={<Portfolio />}></Route>
    //       </Routes>

    // </>

    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Service />}></Route>
        <Route path="/portfolios" element={<Portfolios />}></Route>
        <Route path="/abouts" element={<Abouts />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </>
  );
}

export default App;
