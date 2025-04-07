import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import FilmList from "../pages/FilmList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts/:id/edit" element={<EditPost />} />
      <Route path="/films" element={<FilmList />} />
    </Routes>
  );
};

export default AppRoutes;
