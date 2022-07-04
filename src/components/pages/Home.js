import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink  } from "react-router-dom";

function Home() {

  const [user, setUser] = useState([]);
  //call load date
  useEffect(() => {
    loadData();
  }, []);
  //get all records
  const loadData = async () => {
    const res = await axios.get("http://localhost:3001/users");
    // console.log(res.data)
     setUser(res.data.reverse());
  };

  //Delete record
  const deleteUser = async (id)=>{
   await axios.delete(`http://localhost:3001/users/${id}`)
   loadData()
  }
   

  return (
    <div className="container">
      <div className="py-4">
       
        
        <table className="table border shadow mt-5">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Recuritment Name</th>
              <th scope="col">Candidates No.</th>
              <th scope="col">Job Role</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>
          
            {user.map((data, index) => (
              <tr>

                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.candidate_no}</td>
                <td>{data.role}</td>
                <td>{data.status}</td>

                <td>
                  <Link to={`/edit/${data.id}`}><i class="bi bi-pencil-square btn btn-outline-success"  style={{"fontSize":"1rem", "margin":"0.2rem"}}></i>
                  </Link>
                  <i class="bi bi-trash3 btn btn-outline-danger"  onClick={()=> deleteUser(data.id)} style={{"fontSize":"1rem", "margin":"0.2rem"}}></i>
                  <Link to={`/view/${data.id}`}> <i class="bi bi-eye-fill btn btn-outline-primary" style={{"fontSize":"1rem", "margin":"0.2rem"}}></i></Link>
               </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
