import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/sitecvAurelienbeton.png";
import projImg2 from "../assets/img/wikionepiece.jpg";
import projImg3 from "../assets/img/turlecorp.png";
import projImg4 from "../assets/img/project-img3.png";
import projImg5 from "../assets/img/project-img2.png";
import projImg6 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CV Aurélien BETON",
      description: "HTML-CSS-JS",
      linkUrl: "https://www.aurelienbetoncv.cf/",
      imgUrl: projImg1,
    },
    {
      title: "WikiOnePiece",
      description: "HTML-SCSS-JS-SwipperJS",
      linkUrl: "",
      imgUrl: projImg2,
    },
    {
      title: "Turtle-Corp.",
      description: "HTML-SCSS-JS",
      linkUrl: "",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      linkUrl: "",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      linkUrl: "",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      linkUrl: "",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>J'ai travaillé sur plusieurs projets en utilisant un large panel de langages de programmations,
                    créant des sites web dynamiques, réactifs et des applications performantes.
                    J'ai également travaillé avec des équipes multidisciplinaires pour répondre aux besoins des clients et des utilisateurs finaux.
                    Mon portfolio vous donnera un aperçu de mes compétences en développement web et de mon expérience de travail avec différents langages de programmation.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                     
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}