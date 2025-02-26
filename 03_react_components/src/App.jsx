import "../src/components/book/style.css";
// import WelcomeClass from "./components/WelcomeClass";
// import WelcomeFunction from "./components/WelcomeFunction";
// import StudentProp from "./components/StudentProp";
// import RandomName from "./components/RandomName";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
// import UserPage from "./components/UserPage";
// import Button1 from "./components/Button1";
// import InputParent from "./components/InputParent";
// import RegistPage from "./components/RegistPage";
// import NavBar from "./components/navbar/NavBar";
// import NavBar2 from "./components/navbar/NavBar2";
// import Card2 from "./components/card/Card2";
import { useState } from "react";
import { Layout, Modal, Form, Input } from "antd";
import BookInput from "./components/book/BookInput";
import BookList from "./components/book/BookList";
import BookDetail from "./components/book/BookDetail";

const App = () => {
  // const handleClick = () => {
  //   alert("点击了按钮!");
  // };

  // const handleClick1 = () => {
  //   alert("点击了按钮aaaaaaa!");
  // };

  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [editingBook, setEditingBook] = useState(null);
  const [form] = Form.useForm();
  const { Content } = Layout;

  const handleAdd = (values) => {
    const newBook = { ...values, id: Date.now() };
    setBooks([...books, newBook]);
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleEdit = (values) => {
    setBooks(
      books.map((book) =>
        book.id === editingBook.id ? { ...book, ...values } : book
      )
    );
    setEditingBook(null);
  };

  return (
    // {/* <WelcomeClass name="World"></WelcomeClass> */}
    // {/* <WelcomeFunction name="React"></WelcomeFunction> */}
    // {/* <StudentProp
    //   name="小明"
    //   age="23"
    //   kind="语文、数学、英语"
    //   url="../40.jpg"
    // ></StudentProp> */}
    // {/* <RandomName /> */}
    // {/* <Header></Header>
    // <Main></Main>
    // <Footer></Footer> */}
    // {/* <Button onClick={handleClick}></Button> */}
    // {/* <UserPage></UserPage> */}
    // {/* <Button1 onClick={handleClick1}></Button1> */}
    // {/* <InputParent></InputParent> */}
    // {/* <RegistPage /> */}
    // {/* 1. 使用children实现插槽 */}
    // {/* <NavBar>
    //   <button>按钮</button>
    //   <h2>哈哈哈</h2>
    //   <i>斜体文本</i>
    // </NavBar> */}
    // {/* 2. 使用props实现插槽 */}
    // {/* <NavBar2
    //   leftSlot={<button>按钮</button>}
    //   centerSlot={<h2>哈哈哈</h2>}
    //   rightSlot={<i>斜体文本</i>}
    // ></NavBar2> */}
    // {/* <Card2
    //   headerSlot={<h1>卡片标题</h1>}
    //   centerSlot={<>卡片的主要内容</>}
    //   footerSlot={<button>操作按钮</button>}
    // /> */}
    <Layout className="layout">
      <Content className="content">
        <BookInput onAdd={handleAdd} />

        <div className="main-content">
          <BookList
            books={books}
            onSelect={setSelectedBook}
            onDelete={handleDelete}
            onEdit={setEditingBook}
          />
          {selectedBook && <BookDetail book={selectedBook} />}
        </div>

        <Modal
          title="编辑图书"
          open={!!editingBook}
          onCancel={() => setEditingBook(null)}
          onOk={() => form.submit()}
        >
          <Form
            form={form}
            initialValues={editingBook || {}}
            onFinish={handleEdit}
          >
            <Form.Item label="书名" name="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="作者" name="author" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="出版年" name="year" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="简介" name="description">
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Modal>
      </Content>
    </Layout>
  );
};

export default App;
