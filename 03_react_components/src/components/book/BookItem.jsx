import { Button } from "antd";

export default function BookItem({ book, onSelect, onDelete, onEdit }) {
  return (
    <div className="book-item" onClick={onSelect}>
      <div className="book-info">
        <div className="title">{book.title}</div>
        <div className="meta">
          <span className="author">{book.author}</span>
          <span className="year">{book.year}</span>
        </div>
      </div>
      <div className="actions">
        <Button
          type="link"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(book);
          }}
        >
          编辑
        </Button>
        <Button
          danger
          type="link"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          删除
        </Button>
      </div>
    </div>
  );
}
