import { useState, useEffect } from "react";
import "../App.css";
import { getFilms } from "../api/film";

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const num = 10;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await getFilms({
          num,
          page,
        });
        console.log(response);
        setTotalPages(Math.ceil(response.data.result.curpage));
        setFilms(response.data.result.newslist || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div className="glass-container">
      <div className="responsive-grid">
        {films.map((film) => (
          <div className="glass-card" key={film.id}>
            {film.picUrl && (
              <img
                src={film.picUrl}
                alt={film.title}
                className="movie-poster"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
            <h3>{film.title}</h3>
            <p>{film.description}</p>
            <a
              href={film.url}
              target="_blank"
              rel="noreferrer"
              className="glass-link"
            >
              查看详情
            </a>
          </div>
        ))}
      </div>
      <div className="pagination glass-container">
        <button
          className={`glass-btn ${isLoading ? "disabled" : ""}`}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1 || isLoading}
        >
          {isLoading ? "加载中..." : "上一页"}
        </button>
        <span>第 {page} 页</span>
        <button
          className={`glass-btn ${isLoading ? "disabled" : ""}`}
          onClick={() => setPage((p) => p + 1)}
          disabled={page < totalPages || isLoading}
        >
          {isLoading ? "加载中..." : "下一页"}
        </button>
      </div>
    </div>
  );
};

export default FilmList;
