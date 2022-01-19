import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";

import "./table.scss";

//table details

function Table() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/traveller")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(data);
      });
  }, [data]);

  //table data
  const columns = [
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Date of Birth",
      accessor: "dob",
    },
    {
      Header: "Passport Number",
      accessor: "passportNumber",
    },
    {
      Header: "Departure Country",
      accessor: "departureCountry",
    },
    {
      Header: "Destination Country",
      accessor: "destinationCountry",
    },
    {
      Header: "Ticket Number",
      accessor: "ticketNumber",
    },
    {
      Header: "Seat Number",
      accessor: "seatNumber",
    },
    {
      Header: "Flight Number",
      accessor: "flightNumber",
    },
    {
      Header: "Departure Port",
      accessor: "departurePort",
    },
  ];

  return (
    <div className="table-container">
      <Link className="link" to="/">
        <button className="btn">View Traveller Details</button>
      </Link>
      <h1 className="title">Traveller Table</h1>
      <div className="table">
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          showPaginationBottom
        />
      </div>
    </div>
  );
}

export default Table;
