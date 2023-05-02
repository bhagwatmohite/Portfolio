import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="House Rental Website"
              description=" This is House Rental Website which provide a intermediate platform
              to house owner and other customers who wanted to be stay in that
              area.
              • Integrated full-fledged User authentication and Firestore database to
              store user data on Firebase cloud"
              ghLink="https://github.com/bhagwatmohite/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Stress-detection-using-ML"
              description=" This is Stress Detection using ML which provide a detection of stress in organization employee .Using tools during the project implement using python,Num-py,Pandas and Jupyter Notebook(Anaconda)."
              ghLink="https://github.com/bhagwatmohite"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Library management System"
              description="This is Library Management System which enables differet action by admin of library such as lend book,submit book,charges or due. Implement a variable data structure and algorithmic implementation such as stack , queue , hashMap , and Linkedlist"
              ghLink="https://github.com/bhagwatmohite/"
             // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
