import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import  Experience  from "./Experience.js";
import projImg1 from "../assets/img/project-petani.png";
import projImg2 from "../assets/img/project-rental.png";
import projImg3 from "../assets/img/project-laundry.png";
import projImg4 from "../assets/img/project-ci.png";
import projImg5 from "../assets/img/project-praktek.jpg";
import projImg6 from "../assets/img/project-pawai.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import logostikom from "../assets/img/logostikom.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Project Massive 'Petani GO'",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Development Web Rental",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Development Web Laundry",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Development WEB With CI",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Praktek Web Dev SMP",
      description: "Practice",
      imgUrl: projImg5,
    },
    {
      title: "Sekolah Keliling Daerah",
      description: "Practice & Skill Development",
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
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Berikut adalah bagian dari hasil dan apa yang telah saya lakukan. Tidak ada yang spesial namun saya melakukannya dengan sepenuh hati :)</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Activity</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">My Campus</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">My Experience</Nav.Link>
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
                    <Tab.Pane eventKey="second">
                      <p><img src={logostikom} alt="logokampus" className="logokampus"/></p>
                      <p>STIKOM TUNAS BANGSA Pematangsiantar S1 - Sistem Informasi Menjadi Salah Satu Perguruan tinggi Terbaik, dalam Pengembangan Ilmu Komputer dan Profesi dan Vokasi dalam Menghasilkan Sumber Daya Manusia yang memiliki kompetensi tinggi secara Profesional di Tingkat Regional Sumatera Utara Tahun 2027 dan Indonesia Tahun 2032.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Experience/>
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