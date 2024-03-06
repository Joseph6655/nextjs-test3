import React from 'react';

const SectionImage = () => {
  return (
    <section className="section-image flex justify-center items-center mt-10 ">
      <div className="image-container mx-6 items-center w-80">
        <img src="desk.png" alt="Desk" className="mb-4" />
        <div className="card-content relative text-center mt-12 bg-black bg-opacity-50 p-5 left-1/2">Great web design without functionality like a sports car with no engine.</div>
      </div>
      <div className="image-container mx-4 w-80">
        <img src="comp.png" alt="Computer" className="mb-4" />
        <div className="card-content relative text-center mt-12 bg-black bg-opacity-50 p-5 left-1/2">Computers are like Old Testament gods; lots of rules and no mercy.</div>
      </div>
    </section>
  );
};

export default SectionImage;