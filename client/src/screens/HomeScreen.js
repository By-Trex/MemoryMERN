import React, { useEffect, useState } from "react";
import { MemoryServices } from "../backend/MemoryServices";
import { Spinner, Row, Col } from "react-bootstrap";
import MemoryCard from "../components/MemoryCard";

const HomeScreen = () => {
  const [memoryList, setMemoryList] = useState([]);
  useEffect(() => {
    const getMemories = async () => {
      MemoryServices.getMemory().then((res) => {
        console.log("REsssss", res.data);
        setMemoryList(res.data);
      });
    };

    getMemories();
  }, []);
  return (
    <>
      <h1>Memoryt List</h1>
      {!memoryList.length ? (
        <Spinner animation="border" />
      ) : (
        <Row style={{margin:20}}>
          {memoryList.map((item) => (
            <Col sm={12} md={6} lg={4} xl={3} className="m-auto" key={item._id}>
              <MemoryCard memory={item} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;

// memoryList.map((item) => {})}
