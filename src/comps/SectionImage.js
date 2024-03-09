import React from 'react';

const SectionImage = ({ imageSource, cardContent }) => {
  return (
    <section className="section-image mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="image-container mx-3 mb-6 md:mb-4 md:w-80 relative" style={{ marginRight: '0' }}>
            <img src={imageSource} alt="Image" className="w-full h-auto md:w-96 md:h-96" />
            <div className="card-content absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-5 text-white text-center">
              {cardContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionImage;