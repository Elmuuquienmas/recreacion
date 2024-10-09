import React from "react";
import "./ImageSection.css";

const ImageSection = () => {
  return (
    <section className="position-relative text-center text-white mb-4">
      <img
        src="/path/to/your/image.jpg"
        alt="Kaldi Café"
        className="img-fluid w-100"
      />
      <div className="position-absolute top-50 start-50 translate-middle"></div>
    </section>
  );
};

export default ImageSection;
