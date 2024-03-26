import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Keylogger from "../../Assets/Projects/Keylogger.png";
import Text_Voice from "../../Assets/Projects/text_voice.png";
import Flipkart from "../../Assets/Projects/Flipcart_clone_p.png";
import Netflix from "../../Assets/Projects/Netflix_clone.jpg";
import Portfolio from "../../Assets/Projects/Portfolio.jpg";
import Amazon from "../../Assets/Projects/Amazon_clone_p.jpg";
import myportfolio from "../../Assets/Projects/myportfolio.png"
import expense from "../../Assets/Projects/expense_tracker.png"
import educity from "../../Assets/Projects/educity.png"
import gemini from   "../../Assets/Projects/gemini.png"
import zomoto from "../../Assets/Projects/zomoto1.png"

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
              imgPath={zomoto}
              isBlog={false}
              title="Zomoto_clone"
              description="Zomato is a online food ordering application, we made a clone (Tomato) of it using React Js, Zomato Frontend clone using
              React Js."
                            
              ghLink="https://github.com/Laxmikant-talakeri/zomoto_clone"
              
            
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemini}
              isBlog={false}
              title="Gemini_clone"
              description="This project empowers you to create a Gemini clone application, leveraging the capabilities of Google's cutting-edge AI model,
              Gemini, on a Google APU (Accelerated Processing Unit) and using Goole API
              "
              ghLink="https://github.com/Laxmikant-talakeri/gemini_clone"
              
            
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={educity}
              isBlog={false}
              title="Educity"
              description="Welcome to EduCity, an innovative educational platform built with React.js for a seamless and interactive learning experience. This responsive website is designed to provide a user-friendly interface that adapts to various devices, ensuring accessibility for all learners."
              ghLink="https://github.com/Laxmikant-talakeri/educity"
              
            
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense-Tracker"
              description="An innovative expense tracking application meticulously crafted with HTML, CSS, and JavaScript, empowering users to take charge of their finances effortlessly. Seamlessly blending a user-friendly interface with powerful functionality, this application simplifies expense management."
              ghLink="https://github.com/Laxmikant-talakeri/Expense-Tracker"
              
            
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myportfolio}
              isBlog={false}
              title="My_Portfolio_Website"
              description="my personal portfolio website, a showcase of my skills, experiences, and creative endeavors, all brought to life with the power of React.js. This website is a dynamic platform that highlights my professional journey and demonstrates my proficiency in web development."
              ghLink="https://github.com/Laxmikant-talakeri/My_Portfolio_Website"
              demoLink="https://laxmikant-talakeri.github.io/My_Portfolio_Website"
            
            />
          </Col>
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
