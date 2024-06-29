import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import rozgar from "../../Assets/Projects/rozgar.png";
import strategic from "../../Assets/Projects/strategic.png";

import darehussain from "../../Assets/Projects/darehussain.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={rozgar}
              isBlog={false}
              title="Rozgar"
              description="At Rozgar110, we believe in transforming lives through meaningful employment opportunities, nurturing small businesses, fostering freelancing skills, and building robust connections between job seekers and employers. Our platform is a vibrant hub where ambition meets opportunity, where dreams are nurtured, and where individuals carve out their path towards success."
              
              demoLink="https://rozgar110.com/about-us/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={strategic}
              isBlog={false}
              title="Strategic"
              description="Strategic is a TOP RATED web design, development and mobile application Development Company with delivery centers in Pakistan & CANADA. We have been providing solutions to clients across the world for over 5 years and boast of our extensive experience on website designing and development projects. With over 100+ web design and web application projects executed till date, we live and breathe the w"
              ghLink=" "
              demoLink="https://strategicpk.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={darehussain}
              isBlog={false}
              title="Dar e Hussain"
              description= "Dar e Hussain is a vibrant center of worship education and community for Shia Muslims in Perth Australia. Established few years ago, we have been serving the spiritual and communal needs of our members with dedication and passion."
              ghLink=""
              demoLink="https://darehussain.net/"              
            />
          </Col>

         
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
