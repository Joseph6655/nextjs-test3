import React from 'react'

const Form = () => {
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>
      </div>
      <div className="button-container">
      <button type="submit">Submit</button></div>
    </form>
  );
};

export default Form;