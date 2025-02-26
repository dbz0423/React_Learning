import { Descriptions } from "antd";

export default function BookDetail({ book }) {
  return (
    <div className="book-detail">
      <Descriptions title="图书详情" bordered column={1}>
        <Descriptions.Item label="书名">{book.title}</Descriptions.Item>
        <Descriptions.Item label="作者">{book.author}</Descriptions.Item>
        <Descriptions.Item label="出版年份">{book.year}</Descriptions.Item>
        <Descriptions.Item label="简介">
          {book.description || "暂无简介"}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
