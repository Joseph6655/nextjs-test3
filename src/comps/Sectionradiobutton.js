import React, { useState } from 'react';

const Sectionradiobutton = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);

  const handleInterestChange = (event) => {
    setSelectedInterest(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your interest is in: ${selectedInterest}`);
  };

  return (
    <div className="flex justify-center items-center m-10 text-3xl ">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="font-bold">
          <h2 className="text-xl mb-4">Select Your Interest:</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <input type="radio" name="interest" value="Front-end" onChange={handleInterestChange} />
              <span className="ml-2">Front-end</span>
          </label>
          <label className="block mb-2">
            <input type="radio" name="interest" value="Back-end" onChange={handleInterestChange} />
              <span className="ml-2">Back-end</span>
          </label>
         
          <button type="submit" className="bg-blue-500 mt-4 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Choose
          </button>
        </form>
        {selectedInterest && <p className="mt-4">Your interest is in: {selectedInterest}</p>}
      </div>
    </div>
  );
};

export default Sectionradiobutton;