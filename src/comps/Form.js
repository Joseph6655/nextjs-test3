import React from 'react'

const Form = () => {
  return (
    <form className="form">
     <div className="title"><h2>Enter your information here </h2></div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="  Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="  Enter your email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <input type="text" id="name" name="name" placeholder="  Enter your message" />
      </div>
      <div className="button-container">
      <button type="submit">Submit</button></div>
    </form>
  );
};

export default Form;