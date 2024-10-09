import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
// Aqui tenemos la parte superior de la pagina utilizando componentes de react bootstrap que tuvieron que ser investigados para este proyecto
// este componente acepta un prop con un valor por defecto permitiendonos personalizar el subtitulo para modificar la direccion en diferentes
// sucursales.
const Header = ({ subtitle = "Direccion de la sucursal" }) => {
  return (
    <header className="header-section">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="header-content">
              <h1>
                Visita
                <br />
                <span className="cafe-name">Kaldi Café</span>
              </h1>
              <p className="subtitle">{subtitle}</p>
            </div>
          </Col>
          <Col md="auto">
            <div className="header-adjectives">
              <p>Especializado</p>
              <p>Acogedor</p>
              <p>Popular</p>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
