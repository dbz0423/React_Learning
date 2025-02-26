import { List } from "antd";
import BookItem from "./BookItem";

export default function BookList({ books, onSelect, onDelete, onEdit }) {
  return (
    <List
      className="book-list"
      dataSource={books}
      renderItem={(book) => (
        <BookItem
          book={book}
          onSelect={() => onSelect(book)}
          onDelete={() => onDelete(book.id)}
          onEdit={() => onEdit(book)}
        />
      )}
    />
  );
}
