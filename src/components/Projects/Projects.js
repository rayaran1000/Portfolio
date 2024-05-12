import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards1 from "./ProjectCards1";
import ProjectCards2 from "./ProjectCards2";
import ProjectCards3 from "./ProjectCards3";
import Particle from "../Particle";
import churn from "../../Assets/Projects/churn.png";
import sales from "../../Assets/Projects/sales.png";
import sentimentanalysis from "../../Assets/Projects/sentimentanalysis.png";
import spam from "../../Assets/Projects/spammail.png";
import summarizer from "../../Assets/Projects/summarizer.png";
import toxiccomment from "../../Assets/Projects/toxiccomment.png";
import alzheimers from "../../Assets/Projects/alzheimers.png"

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
            <ProjectCards1
              imgPath={churn}
              isBlog={false}
              title="Churn Prediction"
              description="This project aims in identifying patterns, factors, and trends that contribute to customer churn, which occurs when customers discontinue their engagement with a product, service, or brand. By analyzing this data, we uncover insights into customer behavior, preferences, and pain points that may lead to churn."
              ghLink="https://github.com/rayaran1000/Telecom-Churn-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards1
              imgPath={sales}
              isBlog={false}
              title="Sales Prediction"
              description="This project aims in generating accurate predictions of future sales to facilitate effective business planning, inventory management, and resource allocation along with identifying and analyzing key drivers influencing sales, including seasonality, promotions, economic factors, and external events, to enhance forecasting accuracy."
              ghLink="https://github.com/rayaran1000/Sales-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards1
              imgPath={sentimentanalysis}
              isBlog={false}
              title="IMDB Movie Review Sentiment Analysis"
              description="This project aims in web Scraping IMDB Movie Reviews for a particular movie, Cleaning of the data and displaying them in a tabular format along with Sentiment Analysis and Factuality analysis of the reviews predicted"
              ghLink="https://github.com/rayaran1000/IMDB-Movie-Review-Sentiment-Analysis"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards1
              imgPath={spam}
              isBlog={false}
              title="Spam/Ham Email Classification"
              description="This project aims in efficient collection and cleaning of a diverse set of spam and ham emails, along with efficient analysis of the data and accurate classification of the emails into Spam/Ham leading to huge impact in the messaging and data industry"
              ghLink="https://github.com/rayaran1000/Email-Spam-Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards2
              imgPath={summarizer}
              isBlog={false}
              title="Dialogue Summarizer"
              description="This project aims in implementing text summarization using the Google pegasus-cnn_dailymail model from Hugging Face, fine-tuned on the SamSum dataset. Text summarization is the process of condensing a piece of text into a shorter version while retaining its key information. The Pegasus model, based on transformer architecture, has shown promising results in various natural language processing tasks, including summarization."
              ghLink="https://github.com/rayaran1000/Dialogue-Text-Summarizer"
              gcLink="https://colab.research.google.com/drive/1pjWTNaVdjVjdNqFeS6MdzP3Nq8lJcR5-#scrollTo=-tdcDS_DA7T2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards2
              imgPath={toxiccomment}
              isBlog={false}
              title="Multi Label Toxic Comment Classification"
              description="This project aims to implement multi label text classification using the Distilbert model from Hugging Face, fine-tuned on the Toxic Comment Jigsaw dataset. Text classification is the process of classifying a piece of text into a set of target labels. The Distilbert model, based on transformer architecture, has shown promising results in various natural language processing tasks, including text classification. Distilbert is a distilled version of BERT Model. Distillation(compression of the model) consists of the model weights being decreased, while maintaining almost similar performance as the big model"
              ghLink="https://github.com/rayaran1000/Toxic-Comment-Classifier"
              gcLink="https://colab.research.google.com/drive/17jBmSD8nbYORLryD2ww80-ZWYiylK_3Z"
            />
          </Col>
        </Row>
      </Container>
    <Container>
      <h1 className="project-heading">
          Open Source <strong className="purple">Contributions</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards3
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

export default Projects;
