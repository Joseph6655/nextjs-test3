import React, { useState } from 'react';

const Filtercompenent = () => {
  const imageData = [
    { id: 1, title: 'Nature', imageUrl: 'comp.png' },
    { id: 2, title: 'City', imageUrl: 'comp.png' },
    { id: 3, title: 'Beach', imageUrl: 'comp.png' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(imageData);
  const [showOptions, setShowOptions] = useState(false);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = imageData.filter(image => image.title.toLowerCase().includes(term));
    setFilteredImages(filtered);
  };

  const handleTitleClick = (title) => {
    setSearchTerm(title.toLowerCase());
    setShowOptions(false);
    const filtered = imageData.filter(image => image.title.toLowerCase().includes(title.toLowerCase()));
    setFilteredImages(filtered);
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
            {imageData.map((image) => (
              <div
                key={image.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
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
            <img src={image.imageUrl} alt={image.title} className="max-w-full h-auto" />
            <p className="mt-2">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtercompenent;