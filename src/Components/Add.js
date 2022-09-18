import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Container, Row, Col } from "react-bootstrap";
import {
  DEFAULT_VISIBILITY,
  DONE_VISIBILITY,
  NOT_DONE_VISIBILITY,
  UPDATE_VISIBILITY_FILTER,
  ADD,
} from "../Constants/constants";

function Add() {
  const todos = useSelector((state) => state.todos);
  const newId = todos.length !== 0 ? todos[todos.length - 1].id + 1 : 0;
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  return (
    <Container style={{ marginTop: "10px" }}>
      <Row>
        <Col lg={6} md={8}>
          <InputGroup
            className="mb-3"
            style={{ marginLeft: "10px", fontFamily: "Fira code" }}
            onChange={(e) => setTask(e.target.value)}
          >
            <Form.Control
              placeholder="Task"
              aria-label="Task"
              aria-describedby="basic-addon1"
              defaultValue={task}
              value={task}
            />
          </InputGroup>
        </Col>
        <Col
          lg={6}
          md={4}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "baseline",
          }}
        >
          <Button
            variant="primary"
            onClick={() => {
              if (task !== "") {
                dispatch({
                  type: ADD,
                  payload: { id: newId, description: task, isDone: false },
                });
                setTask("");
              }
            }}
            style={{
              width: "5rem",
              marginLeft: "10px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
          </Button>{" "}
          <Button
            variant="info"
            onClick={() =>
              dispatch({
                type: UPDATE_VISIBILITY_FILTER,
                payload: DEFAULT_VISIBILITY,
              })
            }
            style={{
              width: "5rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list-task"
              viewBox="0 0 16 16"
            >
              <path d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
              <path d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
            </svg>
          </Button>{" "}
          <Button
            variant="success"
            onClick={() =>
              dispatch({
                type: UPDATE_VISIBILITY_FILTER,
                payload: DONE_VISIBILITY,
              })
            }
            style={{
              width: "5rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </Button>{" "}
          <Button
            variant="danger"
            onClick={() =>
              dispatch({
                type: UPDATE_VISIBILITY_FILTER,
                payload: NOT_DONE_VISIBILITY,
              })
            }
            style={{
              width: "5rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default Add;
