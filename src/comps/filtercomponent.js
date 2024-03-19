import React, { useState } from 'react';

const Filtercompenent = () => {
  const imageData = [
    { id: 1, title: 'service 1', imageUrl: 'house.png' },
    { id: 2, title: 'service 2', imageUrl: 'house.png' },
    { id: 3, title: 'service 3', imageUrl: 'house.png' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(imageData);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = imageData.filter(image => image.title.toLowerCase().includes(term));
    setFilteredImages(filtered);
  };

  const handleTitleClick = (title) => {
    if (title === 'All') {
      setFilteredImages(imageData);
    } else {
      setSearchTerm(title.toLowerCase());
      setShowOptions(false);
      const filtered = imageData.filter(image => image.title.toLowerCase().includes(title.toLowerCase()));
      setFilteredImages(filtered);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleInputFocus = () => {
    setShowOptions(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowOptions(false), 200);
  };

  return (
    <div className="container mx-auto relative">
      <div className="flex justify-center items-center mb-2">
        <input
          type="text"
          placeholder="Search Images"
          value={searchTerm}
          onChange={handleSearch}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="border border-gray-300 rounded px-4 py-2 mr-2"
          style={{ width: '310px' }}
        />
      </div>
      {showOptions && (
        <div className="flex justify-center mb-2">
          <div className="border border-gray-300 rounded bg-white" style={{ width: '300px' }}>
            <div
              className="px-4 py-2 cursor-pointer hover:bg-grey-100 font-bold"
              onClick={() => handleTitleClick('All')}
            >
              All
            </div>
            {imageData.map((image) => (
              <div
                key={image.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 font-bold"
                onClick={() => handleTitleClick(image.title)}
              >
                {image.title}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="grid grid-cols-3 gap-4">
        {filteredImages.map(image => (
          <div key={image.id} className="text-center">
            <div className="bg-grey rounded shadow p-5 mb-4" onClick={() => handleImageClick(image)}>
              <div className="flex justify-center mb-1">
                <img src={image.imageUrl} alt={image.title} className="max-w-full h-auto" />
              </div>
              <p className="mt-2 font-bold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded shadow max-w-md flex flex-col items-center">
            <img src={selectedImage.imageUrl} alt={selectedImage.title} className="max-w-full h-auto" />
            <p className="mt-2 text-center">{selectedImage.title}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSelectedImage(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filtercompenent;