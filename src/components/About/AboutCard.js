import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aranya Ray </span>
            from <span className="purple"> NCR, India.</span>
            <br />
            I am currently employed as a software engineer at Cognizant.
            <br />
            I have completed Bachelors from IIEST, Shibpur. I have also completed Masters in Data Science and Engineering
            from BITS Pilani
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with Open Source Models
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If Models can learn, then so can we!"{" "}
          </p>
          <footer className="blockquote-footer">Aranya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
