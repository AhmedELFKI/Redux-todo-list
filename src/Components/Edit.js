import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { UPDATE_TASK_DATA } from "../Constants/constants";

function Edit({ id, display }) {
  const todo = [
    ...useSelector((state) => state.todos).filter((todo) => todo.id === id),
  ][0];

  const [show, setShow] = useState(display);
  const [description, setDescription] = useState(todo.description);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup
            className="mb-3"
            style={{ marginLeft: "10px", fontFamily: "Fira code" }}
            onChange={(e) => setDescription(e.target.value)}
          >
            <Form.Control
              placeholder="Description"
              aria-label="Description"
              aria-describedby="basic-addon1"
              defaultValue={description}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch({
                type: UPDATE_TASK_DATA,
                payload: {
                  id: id,
                  description: description,
                  isDone: todo.isDone,
                },
              });
              handleClose();
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
