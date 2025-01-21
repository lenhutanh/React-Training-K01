import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { editUserRequest } from "../actions/users";

const ModalEditUser = ({ show, handleClose, dataUserEdit, editUserRequest}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleEditUser = () => {
        console.log("Your new name: " + firstName + " " + lastName);
        editUserRequest({
            id: dataUserEdit.id,
            firstName,
            lastName,
        });
        setFirstName('');
        setLastName('');
        handleClose();
    }

    useEffect(() => {
        if (show) {
            setFirstName(dataUserEdit.firstName);
            setLastName(dataUserEdit.lastName);
        }
    }, [dataUserEdit]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-edit-user">
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleEditUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect(null, { editUserRequest })(ModalEditUser);
