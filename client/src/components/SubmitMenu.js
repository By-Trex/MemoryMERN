import React, { useState, useEffect } from "react";
import { Form, Button, FormGroup } from "react-bootstrap";
import ReactFile64 from "react-file-base64";
import { MemoryServices } from "../backend/MemoryServices";
export const SubmitMenu = () => {
  const [memoryData, setMemoryData] = useState({
    title: "",
    content: "",
    creator: "",
    image: "",
  });

  const createMemory = () => {
    MemoryServices.createMemory(memoryData).then((res) => {
      console.log("Dönen create dataa", res);
    });
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form.Group>
          <h1>Share the Moments</h1>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Title"
            onChange={(e) =>
              setMemoryData({ ...memoryData, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            placeholder="Enter Author"
            onChange={(e) =>
              setMemoryData({ ...memoryData, creator: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Memory</Form.Label>
          <Form.Control
            name="content"
            type="text"
            as="textarea"
            rows={3}
            onChange={(e) =>
              setMemoryData({ ...memoryData, content: e.target.value })
            }
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <ReactFile64
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setMemoryData({ ...memoryData, image: base64 })
            }
          ></ReactFile64>
        </Form.Group>
      </Form>
      <Button
        variant="primary"
        type="submit"
        style={{
          marginTop: 15,
          width: "100%",
        }}
        onClick={() => {
          createMemory()

        }}
      >
        Submit
      </Button>
    </>
  );
};
