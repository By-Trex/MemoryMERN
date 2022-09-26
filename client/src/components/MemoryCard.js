import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import moment from "moment";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MemoryServices } from "../backend/MemoryServices";

const MemoryCard = ({ memory }) => {
  console.log("hani memoryyyy ", memory);

  const icons = [
    {
      id: 0,
      picture: MdEdit,
      redirect: "/",
      onclick: () => {},
    },
    {
      id: 0,
      picture: MdDeleteOutline,
      redirect: "/",
      onclick: (item) => {
        MemoryServices.deleteMemory(item);
      },
    },
  ];
  return (
    <Card className="text-center mt-5" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={memory.image}
        style={{ objectFit: "cover", height: 250 }}
      />
      <Card.Body>
        <Card.Title>{memory.title}</Card.Title>
        <Card.Text>{memory.content}</Card.Text>
        <Card.Subtitle>{memory.creator}</Card.Subtitle>
        <Button variant="primary">{moment(memory.createdAt).fromNow()}</Button>
      </Card.Body>
      <Card.Footer
        className="bg-white pb-2"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {icons.map((item) => (
          <LinkContainer to={item.redirect} style={{ cursor: "pointer" }}>
            <item.picture
              color="#DB1717"
              size={22}
              onClick={() => item.onclick(memory._id)}
            />
          </LinkContainer>
        ))}
      </Card.Footer>
    </Card>
  );
};

const styles = {
  // cardFooter: {
  //     display:"flex",
  //     justify
  // }
};

export default MemoryCard;
