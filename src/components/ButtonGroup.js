import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InfoModal from "./InfoModal";

const ButtonGroup = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const googleMapsUrl =
    "https://www.google.com/maps/dir//C.+Libertad+1305,+Centro,+31000+Chihuahua,+Chih./@28.640676,-106.1138516,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86ea4351012f9e6d:0x9a4daa15eeb57a17!2m2!1d-106.072652!2d28.6406069?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="d-flex flex-column gap-3">
      <Button
        variant="info"
        className="custom-button text-white d-flex align-items-center"
        onClick={handleShow}
      >
        <img
          src="/3451502.webp"
          alt="Chill Logo"
          style={{ width: "60px", marginRight: "10px" }}
        />
        Chill
      </Button>

      <Button
        variant="warning"
        className="custom-button d-flex align-items-center"
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/png-transparent-google-maps-2020-icon-hd-logo-thumbnail.png"
          alt="Google Maps Logo"
          style={{ width: "24px", marginRight: "10px" }}
        />
        Abrir en Google Maps
      </Button>

      <Button
        variant="success"
        className="custom-button d-flex align-items-center"
        onClick={handleShow}
      >
        <img
          src="/path-to-your-logo.png"
          alt="Menu Logo"
          style={{ width: "24px", marginRight: "10px" }}
        />
        Menú del local
      </Button>

      <InfoModal show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default ButtonGroup;
