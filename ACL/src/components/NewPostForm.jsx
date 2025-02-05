import { Button, Form, Input } from "antd";
import { useState } from "react";

const NewPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault;

    onSubmit({
        title,
        body,
    });

    setTitle("");
    setBody("");
  };
  return (
    <>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Title">
          <Input
            placeholder="Enter a title"
            onChange={handleTitleChange}
            value={title}
          />
        </Form.Item>
        <Form.Item label="Body">
          <Input
            placeholder="Enter a body"
            onChange={handleBodyChange}
            value={body}
          />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewPostForm;
