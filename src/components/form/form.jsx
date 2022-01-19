import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./form.scss";

function Form() {
  //form initial state
  const initialState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    dob: "",
    passportNumber: "",
    departureCountry: "",
    destinationCountry: "",
    ticketNumber: "",
    seatNumber: "",
    flightNumber: "",
    departurePort: "",
  };

  //handle state
  const [values, setValues] = useState(initialState);

  //handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target; //extract name and value attributes from the target inputs

    //updating values state
    setValues({
      ...values,
      [name]: value,
    });
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://8cf7-41-72-206-58.ngrok.io/api/v1/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then(() => {
        setValues(initialState);
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="traveller-details">
      <Link className="link" to="/table">
        <button className="btn">View Traveller Table</button>
      </Link>
      <h1 className="title">Traveller Details</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="traveller-form">
          <div className="section">
            <p className="section-title">Personal_</p>
            <div className="f-row">
              <div className="text">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="s-row">
              <div className="text">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={values.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text">
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  value={values.gender}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text">
                <input
                  type="text"
                  name="dob"
                  placeholder="Date Of Birth"
                  value={values.dob}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="t-row">
              <div className="text">
                <input
                  type="text"
                  name="passportNumber"
                  placeholder="Passport Number"
                  value={values.passportNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="section">
            <p className="section-title">Flight_</p>
            <div className="f-row">
              <div className="text">
                <input
                  type="text"
                  name="departureCountry"
                  placeholder="Departure Country"
                  value={values.departureCountry}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text">
                <input
                  type="text"
                  name="destinationCountry"
                  placeholder="Destination Country"
                  value={values.destinationCountry}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="s-row">
              <div className="text">
                <input
                  type="text"
                  name="ticketNumber"
                  placeholder="Ticket Number"
                  value={values.ticketNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text">
                <input
                  type="text"
                  name="seatNumber"
                  placeholder="Seat Number"
                  value={values.seatNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text">
                <input
                  type="text"
                  name="flightNumber"
                  placeholder="Flight Number"
                  value={values.flightNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="t-row">
              <div className="text">
                <input
                  type="text"
                  name="departurePort"
                  placeholder="Departure Port"
                  value={values.departurePort}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
