import React from "react";
import { Modal, Button } from "react-bootstrap";

const InfoModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Información</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Esto solo es una prueba de integradora. Los datos pueden estar
        incompletos.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
// este es un componente que cree para informar de las partes inaccesibles de la
// integradora gran parte de la sintaxis de este codigo en especico fue elaborada
// con ayuda de ia por la adaptacion a la nueva forma de desarrollo
export default InfoModal;
