import React, { useState } from 'react';

const Sectionradiobutton = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false); // New state to track button click

  const handleInterestChange = (event) => {
    setSelectedInterest(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonClicked(true); // Set the buttonClicked state to true
  };

  return (
    <>
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
        
        </div>
      </div>
    
      {/* Move the text outside of the flex container */}
      <div className='text-center'>
        {buttonClicked && selectedInterest && <p className="mb-4 font-bold text-lg" >Your interest is in: {selectedInterest}</p>}
      </div>
    </>
  );
};

export default Sectionradiobutton;