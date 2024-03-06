import React from 'react';

const SectionImage = () => {
  return (
    <section className="section-image mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="image-container mx-6 mb-6 md:mb-4 md:w-80 relative">
          <img src="desk.png" alt="Desk" />
          <div className="card-content absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-5 text-white text-center">
            Great web design without functionality like a sports car with no engine.
          </div>
        </div>
        <div className="image-container mx-6 md:w-80 mb-5 relative">
          <img src="comp.png" alt="Computer" />
          <div className="card-content absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-5 text-white text-center">
            Computers are like Old Testament gods; lots of rules and no mercy.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionImage;