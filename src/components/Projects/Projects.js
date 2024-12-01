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
import exochat from "../../Assets/Projects/exochat.png";
import researchpaperagent from "../../Assets/Projects/researchpaperagent.png"
import searchsummarizer from "../../Assets/Projects/searchsummarizer.png"
import coldemailgenerator from "../../Assets/Projects/coldemailgenerator.png"
import feedbackreviewer from "../../Assets/Projects/feedbackreviewer.png"

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
              imgPath={feedbackreviewer}
              isBlog={false}
              title="Feedback Reviewer"
              description="Feedback Review Analytics is a AI enhanced web application designed to collect and analyze user feedback. It provides insights into customer sentiments, key topics, and emerging trends from feedback. The application includes authentication for users and admins, with admins having access to analytics data."
              ghLink="https://github.com/rayaran1000/Feedback-Review-Analytics"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards1
              imgPath={coldemailgenerator}
              isBlog={false}
              title="Cold Email Generator"
              description="The Cold Email Generator project is a tool that automates the process of generating personalized cold emails based on job descriptions scraped from company career pages. The application leverages LangChain with the ChatGroq model for extracting job postings and generating emails. The user's portfolio is stored in a vector store, and relevant portfolio links are attached to the emails based on the job's required skills."
              ghLink="https://github.com/rayaran1000/Cold-Email-Generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards1
              imgPath={searchsummarizer}
              isBlog={false}
              title="Search Summarizer"
              description="The Search Summarizer project is a tool designed to retrieve and summarize search results from DuckDuckGo. It leverages the Llama 3 model to analyze search results and generate concise summaries, highlighting key topics, features, and important references. The application allows users to save both the raw and summarized search results in MongoDB for future use."
              ghLink="https://github.com/rayaran1000/Search-Summarizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards1
              imgPath={researchpaperagent}
              isBlog={false}
              title="Research Paper Agent"
              description="The Research Paper Agent is a Generative AI tool designed to assist researchers, academics, and professionals by generating concise summaries of research papers and answering queries based on the document's content.
              The Research Paper Agent uses the Llama 3 model to generate summaries of research papers. Users can upload a PDF document, which is processed through several text processing steps. The resulting vector embeddings are stored in a FAISS vector store."
              ghLink="https://github.com/rayaran1000/Research-Paper-Agent"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards2
              imgPath={exochat}
              isBlog={false}
              title="ExoChat - ExoPlanet Chatbot"
              description="This project aims to provide accurate text information about exoplanets present in the NASA Public Exoplanet archive using the Google Gemini 2 billion Instruction tuned model from Hugging Face. The Gemini 2billion model, based on transformer decoder architecture, has shown promising results in various natural language processing tasks, including text generation.
                          We are currently using the Gemini 2 billion parameter model, which is the smaller model in the Gemini model family. The model is instruction fine tuned so that it can be further finetuned based on the format of {prompt, context and response}."
              ghLink="https://github.com/rayaran1000/Exoplanet-Chatbot"
              gcLink="https://github.com/rayaran1000/Google-Collab-Experiments"
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
            <ProjectCards1
              imgPath={spam}
              isBlog={false}
              title="Spam/Ham Email Classification"
              description="This project aims in efficient collection and cleaning of a diverse set of spam and ham emails, along with efficient analysis of the data and accurate classification of the emails into Spam/Ham leading to huge impact in the messaging and data industry"
              ghLink="https://github.com/rayaran1000/Email-Spam-Classification"
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
              imgPath={sales}
              isBlog={false}
              title="Sales Prediction"
              description="This project aims in generating accurate predictions of future sales to facilitate effective business planning, inventory management, and resource allocation along with identifying and analyzing key drivers influencing sales, including seasonality, promotions, economic factors, and external events, to enhance forecasting accuracy."
              ghLink="https://github.com/rayaran1000/Sales-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards1
              imgPath={churn}
              isBlog={false}
              title="Churn Prediction"
              description="This project aims in identifying patterns, factors, and trends that contribute to customer churn, which occurs when customers discontinue their engagement with a product, service, or brand. By analyzing this data, we uncover insights into customer behavior, preferences, and pain points that may lead to churn."
              ghLink="https://github.com/rayaran1000/Telecom-Churn-Prediction"
            />
          </Col>
          
        </Row>
      </Container>
  </Container>
  );
}

export default Projects;
