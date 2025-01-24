import React, { useEffect, useState } from "react";
import { Form, Input, message, Modal } from "antd";
import { connect } from "react-redux";
import { editUserRequest } from "../../redux/actions/users";

const ModalEditUserAntd = ({
  show,
  handleClose,
  dataUserEdit,
  editUserRequest,
}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleEditUser = () => {
    console.log("Your new name: " + firstName + " " + lastName);
    editUserRequest({
      id: dataUserEdit.id,
      firstName,
      lastName,
    });
    setFirstName("");
    setLastName("");
    handleClose();
    message.success("Edit the user successfully!")
  };

  useEffect(() => {
    if (show) {
      setFirstName(dataUserEdit.firstName);
      setLastName(dataUserEdit.lastName);
    }
  }, [dataUserEdit]);

  return (
    <>
      <Modal
        title="Edit the user"
        open={show}
        onOk={handleEditUser}
        onCancel={handleClose}
      >
        <Form layout="vertical">
          <Form.Item label="First Name">
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default connect(null, { editUserRequest })(ModalEditUserAntd);
