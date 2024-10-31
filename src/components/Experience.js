// Experience.import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';// Tambahkan file CSS untuk styling tambahan

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'SMK Swasta Islam Proyek UISU Siantar',
    duration: 'Mei 2021',
    description: 'Membangun dan merancang website dari nol sampai jadi.',
  },
  {
    title: 'Full Stack WEB Development',
    company: 'Personal',
    duration: '-',
    description: 'Membangun website full stack dengan framework CI, PHP, MySQL.',
  },
  {
    title: 'Project Manager as Student',
    company: 'Infinite Learning ( MSIB )',
    duration: 'Sept 2024 - Present',
    description: 'Membangun bersama website bernama Petani GO untuk petani pemula dan generasi muda',
  },
];

function Experience() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {experiences.map((exp, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="experience-card h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{exp.title}</Card.Title>
                <Card.Subtitle>{exp.company}</Card.Subtitle>
                <Card.Text>
                  <small>{exp.duration}</small>
                </Card.Text>
                <Card.Text>{exp.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


export default Experience;