import React from 'react';

const SectionImage = () => {
  return (
    <section className="section-image">
      <div className="image-container">
        <img src="desk.png" alt="Desk" />
        <div className="card-content">Great web design without functionality like a sports car with no engine.</div>
      </div>
      <div className="image-container">
        <img src="comp.png" alt="Computer" />
        <div className="card-content">Computers are like Old Testament gods; lots of rules and no mercy.</div>
      </div>
    </section>
  );
};

export default SectionImage;