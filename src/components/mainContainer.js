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
