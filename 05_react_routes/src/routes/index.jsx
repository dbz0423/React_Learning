import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fans from "../pages/dashboard/profile/Fans";
import Follow from "../pages/dashboard/profile/Follow";
import Login from "../pages/Login";
import Book from "../pages/Book";
import BlogDetail from "../pages/BlogDetail";
import Layout from "../components/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/book/:bookId" element={<Book />}></Route>
        <Route path="/blog/:blogIndex" element={<BlogDetail />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />}></Route>
          <Route path="profile" element={<Profile />}>
            <Route index element={<Fans />}></Route>
            <Route path="fans" element={<Fans />}></Route>
            <Route path="follow" element={<Follow />}></Route>
          </Route>
          <Route path="setting" element={<Setting />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
