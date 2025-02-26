import { Form, Input, Button } from "antd";

export default function BookInput({ onAdd }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onAdd(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="inline">
      <Form.Item
        name="title"
        rules={[{ required: true, message: "请输入书名" }]}
      >
        <Input placeholder="书名" />
      </Form.Item>
      <Form.Item
        name="author"
        rules={[{ required: true, message: "请输入作者" }]}
      >
        <Input placeholder="作者" />
      </Form.Item>
      <Form.Item
        name="year"
        rules={[{ required: true, message: "请输入出版年份" }]}
      >
        <Input placeholder="出版年份" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          添加图书
        </Button>
      </Form.Item>
    </Form>
  );
}
