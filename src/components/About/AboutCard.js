import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello Everyone, I am <span className="purple">Laxmikant Talakeri </span>
          and I come from <span className="purple"> the beautiful city of Kalburgi in India.</span>
            <br /> Currently, I find myself in an exciting phase of life as a final-year student pursuing an Integrated B.Tech in Computer Science at PES University in Bengaluru. My journey in the world of technology and computer science has been a thrilling one, marked by continuous growth and exploration.
        
            <br />
           
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Laxmikant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
