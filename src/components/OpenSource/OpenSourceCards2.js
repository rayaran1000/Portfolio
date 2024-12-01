import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { SiGooglecolab } from "react-icons/si";

function OpenSourceCards2(props) {
    return (
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}
          {"\n"}
          <Button variant="primary" href={props.gcLink} target="_blank">
            <SiGooglecolab /> &nbsp;
            {props.isBlog ? "Blog" : "Google Collab"}
          </Button>
        </Card.Body>
      </Card>
    );
  }
  export default OpenSourceCards2;