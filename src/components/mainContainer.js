import React from "react";
import Header from "./Header";
import PhotoGallery from "./PhotoGallery";
import SimilarExperiences from "./SimilarExperiences";

const MainContainer = () => {
  return (
    <div className="container-fluid p-0">
      <Header subtitle="Calle Libertad 1305 Colonia Centro" />
      <div className="container mt-4">
        <PhotoGallery />
        <SimilarExperiences />
      </div>
    </div>
  );
};

export default MainContainer;
// Esta bien profe me atrapo aqui tuve problemas, en el proyecto original el estado de las tarjetas que se recorrian digamos que fue
// lo mas delicado de mantener o de modificar, puesto que desde un inicio fue una adaptacion este nuevo enfoque a las imagenes del
//establecimiento como de las tarjetas recomendadas que podra encontrar en otro componente vienen mas de mi intento por modificar o
// adaptar este componente
