import React from 'react';

const SectionImage = () => {
  return (
    <section className="section-image flex justify-center">
      <div className="image-container mx-4">
        <img src="desk.png" alt="Desk" className="mb-4" />
        <div className="card-content text-center">Great web design without functionality like a sports car with no engine.</div>
      </div>
      <div className="image-container mx-4">
        <img src="comp.png" alt="Computer" className="mb-4" />
        <div className="card-content text-center">Computers are like Old Testament gods; lots of rules and no mercy.</div>
      </div>
    </section>
  );
};

export default SectionImage;