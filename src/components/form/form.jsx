import React, { useState } from "react";

import "./form.scss";

function Form() {
  //form initial state
  const initialState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    dob: "",
    passport: "",
    departure: "",
    destination: "",
    ticket: "",
    seat: "",
    flight: "",
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
      await fetch("https://5c6b-105-27-239-221.ngrok.io", {
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
                  name="passport"
                  placeholder="Passport Number"
                  value={values.passport}
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
                  name="departure"
                  placeholder="Departure Country"
                  value={values.departure}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text">
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination Country"
                  value={values.destination}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="s-row">
              <div className="text">
                <input
                  type="text"
                  name="ticket"
                  placeholder="Ticket Number"
                  value={values.ticket}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text">
                <input
                  type="text"
                  name="seat"
                  placeholder="Seat Number"
                  value={values.seat}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text">
                <input
                  type="text"
                  name="flight"
                  placeholder="Flight Number"
                  value={values.flight}
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
