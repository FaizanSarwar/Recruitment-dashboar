import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";

import axios from "axios";

const AddUser = () => {
  //usehistory to redirect page
  let history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    candidate_no: "",
    status: "",
    role: "",
    city:"",
    postal_code:""
  });
  //de structuring 
  const { name, candidate_no, status, role,city,postal_code } = user;
  //set values on change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //handle submit form time
  const submitkr = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    history("/");
  };

  return (
    <div className="">
      <form className="add-user" onSubmit={submitkr}>
      <h3 style={{"textAlign":"left","paddingTop":"0.5rem"}}>Add New Record</h3>

        <div class="col-mb-3">
          <input
            class="form-control m-4"
            name="name"
            value={name}
            placeholder="Enter Name of your Recruitment"
            onChange={handleChange}
          />
        </div>

        <div class="row selector mb-3">
          <div class="col-md-6">
            <input
              class="form-control "
              name="candidate_no"
              value={candidate_no}
              placeholder="Enter Candidate No"
              onChange={handleChange}
            />
          </div>
          <div class="col-md-6">
            <select
              id="inputState"
              class="form-select"
              name="status"
              value={status}
              onChange={handleChange}
            >
              <option selected>Select Status of employee</option>

              <option>In Progress</option>
              <option>Selected</option>
              <option>Rejected</option>
              <option>Panding</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <select
          
            class="form-control m-4"
            name="role"
            value={role}
            onChange={handleChange}
          >
            <option selected>Select Status of employee</option>

            <option>HR Coordinator</option>
            <option>Payroll Coordinator</option>
            <option>Recruiting Coordinator</option>
            <option>HR Manager</option>
            <option>HR Director</option>
            <option>Big Data Engineer</option>
            <option>Machine Learning Engineer</option>
            <option>C# Developer</option>
            <option>Computer Programmer</option>
            <option>FRONT-END DEVELOPER</option>
            <option>FULL-STACK DEVELOPER</option>
            <option>GAME DEVELOPER</option>
          </select>
        </div>






        <div class="row selector mb-3">


        <div class="col-md-6">
            <select
              id="inputState"
              class="form-select"
              name="city"
              value={city}
              onChange={handleChange}
            >
              <option selected>Select City of employee</option>

              <option>Karachi</option>
              <option>Islamabad</option>
              <option>Pashawar</option>
              <option>Lahore</option>
              <option>Kasur</option>
              <option>Gujranwala</option>
              <option>Gujrat</option>
              <option>Rawalpindi</option>
              <option>Renala Khurd</option>





            </select>
          </div>

          <div class="col-md-6">
            <input
              class="form-control "
              name="postal_code"
              value={postal_code}
              placeholder="Enter Postal Code"
              onChange={handleChange}
            />
          </div>
          
        </div>





















        <div class="mb-3">
          <textarea
            class="form-control m-4"
            name="description"
            placeholder="Write description here (optional)"
            onChange={handleChange}
          />
        </div>

        <button
          class="btn btn-outline-success float-end"
          style={{ marginLeft: "14px" }}
          type="submit"
        >
          Save & Continue
        </button>
        <button class="btn btn-outline-danger float-end" type="submit">
          Cancle
        </button>
      </form>
    </div>
  );
};
export default AddUser;
