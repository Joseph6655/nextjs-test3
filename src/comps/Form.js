import React from 'react';

const Form = () => {
  return (
    <form className="form max-w-md mx-auto">
      <div className="title text-center mb-2 text-3xl">
        <h2 className="font-bold mt-11 md:ml-4 lg:ml-0">Enter your information here</h2>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="name" className="block mt-8">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full border rounded-md py-2 px-3" />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="email" className="block">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border rounded-md py-2 px-3" />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="message" className="block">Message:</label>
        <input type="text" id="message" name="message" placeholder="Enter your message" className="w-full border rounded-md py-2 px-3" />
      </div>
      <div className="button-container text-center mt-8">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </div>
    </form>
  );
};

export default Form;