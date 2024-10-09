import React from "react";
import { Card, Row, Col, Carousel } from "react-bootstrap";

const SimilarExperiences = () => {
  const experiences = [
    { id: 1, title: "Cafe Icaro", image: "/CafeIcaro.jpg" },
    { id: 2, title: "Cafe Cortez", image: "/cafeCortes.jpg" },
    {
      id: 3,
      title: "Casa Nativa Chihuahua",
      image: "/CasaNativaChihuahua.jpg",
    },
  ];

  return (
    <section className="mt-4">
      <h2 className="h4 mb-3">Experiencias similares</h2>
      <Row>
        {experiences.slice(0, 3).map((exp) => (
          <Col md={4} key={exp.id}>
            <Card>
              <Card.Img variant="top" src={exp.image} />
              <Card.Body>
                <Card.Title>{exp.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Carousel className="mt-4">
        {experiences.map((exp) => (
          <Carousel.Item key={exp.id}>
            <img
              className="d-block w-100"
              src={exp.image}
              alt={exp.title}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{exp.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default SimilarExperiences;
// Aqui se quiso quise hacer una adaptacion o modificacion de la pagina original puesto que utilce los estilos basicos de las tarjetas
