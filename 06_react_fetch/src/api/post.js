import { get, post, put, del } from "./request";

// 获取帖子列表
export const getPosts = () => get("/posts");

// 创建帖子
export const createPost = (title, body) =>
  post("/posts", {
    title,
    body,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  });

// 更新帖子
export const updatePost = (id, title, body) =>
  put(`/posts/${id}`, {
    title,
    body,
    updatedAt: new Date().toISOString(),
  });

// 删除帖子
export const deletePost = (id) => del(`/posts/${id}`);

// 获取帖子详情
export const getPostById = (id) => get(`/posts/${id}`);
