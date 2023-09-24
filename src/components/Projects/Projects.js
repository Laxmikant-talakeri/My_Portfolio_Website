import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Keylogger from "../../Assets/Projects/Keylogger.png";
import Text_Voice from "../../Assets/Projects/text_voice.png";
import Flipkart from "../../Assets/Projects/Flipcart_clone_p.png";
import Netflix from "../../Assets/Projects/Netflix_clone.jpg";
import Portfolio from "../../Assets/Projects/Portfolio.jpg";
import Amazon from "../../Assets/Projects/Amazon_clone_p.jpg";

function Projects() {
  return (
    <Container fluid className="project-section" style={{backgroundColor:"black"}}>
     
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix_Clone_Project"
              description="Netflix Clone: A web project using HTML, CSS, and JavaScript, replicating the Netflix interface for streaming content."
              ghLink="https://github.com/Laxmikant-talakeri/Netflix_Clone_Project"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amazon}
              isBlog={false}
              title="Amazon-Clone-Project"
              description="The Amazon Clone project recreates Amazon's core functions, offering aspiring developers a chance to build an advanced e-commerce platform. Mimic intuitive navigation, seamless shopping, and comprehensive features in this skill-enhancing venture."
              ghLink="https://github.com/Laxmikant-talakeri/Amazon-Clone-Project"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flipkart}
              isBlog={false}
              title="Flipkart-Clone-Project"
              description="Develop a replica of the Flipkart e-commerce platform. Build essential features like product listing, user authentication, search, cart management, and a user-friendly UI. Gain hands-on experience while creating a dynamic online shopping experience."
              ghLink="https://github.com/Laxmikant-talakeri/Flipkart-Clone-Project"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Keylogger}
              isBlog={false}
              title="Developing-Keylogger-Software-System"
              description="The Advanced Keylogger Software System captures every keystroke entered on the target device, ensuring a complete record of user interactions, including passwords, messages, and commands.The system periodically captures screenshots, enabling you to visualize the user's activity, applications used, and content viewed."
              ghLink="https://github.com/Laxmikant-talakeri/Developing-Keylogger-Software-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="portfolio-website"
              description="Welcome to my personal portfolio website, a virtual gateway into my world of creativity, skills, and accomplishments. As an aspiring [Your Profession or Field], I have meticulously curated this online space to showcase my journey, expertise, and passion."
              ghLink="https://github.com/Laxmikant-talakeri/personal-portfolio-website"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Text_Voice}
              isBlog={false}
              title="Text_to_Voice_Converter"
              description="The Text-to-Voice Converter project is a web application that allows users to easily convert text input into synthesized speech. It leverages a combination of HTML, CSS, and JavaScript to provide a user-friendly interface and seamless text-to-speech functionality."
              ghLink="https://github.com/Laxmikant-talakeri/Text_to_Voice_Converter"
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
