import { Button, Form, Input } from "antd";
import { useState } from "react";

const NewUserFormAntd = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault;

    onSubmit({
      firstName,
      lastName,
    });

    setFirstName("");
    setLastName("");
  };
  return (
    <>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="First Name">
          <Input
            placeholder="Enter a first name"
            onChange={handleFirstNameChange}
            value={firstName}
          />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input
            placeholder="Enter a last name"
            onChange={handleLastNameChange}
            value={lastName}
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

export default NewUserFormAntd;
