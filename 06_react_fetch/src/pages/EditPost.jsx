import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById, updatePost } from "../api/post";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(id);
      setTitle(post.title);
      setBody(post.body);
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, title, body);
    navigate(`/`);
  };

  return (
    <div className="edit-post">
      <h2>编辑文章</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>标题：</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>内容：</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">保存修改</button>
      </form>
    </div>
  );
}
