import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OpenSourceCards1 from "./OpenSourceCards1";
import OpenSourceCards2 from "./OpenSourceCards2";
import OpenSourceCards3 from "./OpenSourceCards3";
import Particle from "../Particle";

import alzheimers from "../../Assets/Projects/alzheimers.png"


function OpenSource() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Contributions </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few open-source contributions I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={4} className="project-card">
              <OpenSourceCards3
                imgPath={alzheimers}
                isBlog={false}
                title="Analyzing Brain Scan Images for the Early Detection and Diagnosis of Alzheimer's Disease "
                description="The goal of this project was to leverage the power of artificial intelligence,
                specifically machine learning and computer vision techniques, to analyze
                brain scan images for the early detection and diagnosis of Alzheimer's
                disease. The aim was to create an AI model that can analyze these images, identify
                patterns that may be indicative of these disorders, and make predictions
                with high accuracy. The expectation is that such a tool could supplement existing diagnostic
                practices, providing a more objective and potentially earlier indication of these
                diseases."
                demoLink="https://huggingface.co/spaces/arpy8/Omdena_Toronto_Streamlit_App"
              />
            </Col>

          </Row>
    </Container>
  </Container>
  );
}

export default OpenSource;
