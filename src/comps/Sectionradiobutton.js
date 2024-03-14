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
      <div>
        <div  className="font-bold">
        <h2 >Select Your Interest :</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 mt-4 ml-4 ">
            <input type="radio" name="interest" value="Front-end" onChange={handleInterestChange} />
              Front-end
          </label>
          <label className="block mb-4 ml-4 ">
            <input type="radio" name="interest" value="Back-end" onChange={handleInterestChange} />
              Back-end
          </label>
         
          <button type="submit" className="bg-blue-500 mb-4 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Choose
          </button>
        </form>
        {selectedInterest && <p>Your interest is in : {selectedInterest}</p>}
      </div>
    </div>
  );
};

export default Sectionradiobutton;