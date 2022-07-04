import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const ViewUser = ()=>{
    const [user, setUser] = useState({
        name: "",
        candidate_no: "",
        status: "",
        role: "",
        city:"",
        postal_code:"",
        description:""
      });
      const {id} = useParams();

      //call load () at the page load time
  useEffect(() => {
    loadData();
  }, []);
  //load data back to input feilds to update it
  const loadData = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);

    setUser(res.data);
    //  console.log(res.data)
  };

    return(
        <div className="container col-md-8">
           

        <h1 className="display-4">User Id: {id}</h1>
       <hr/>
       <ul className="list-group w-50" style={{"fontSize":"1.2rem"}}>
        <li className="list-group-item" >name : {user.name}</li>
        <li className="list-group-item" >candidate_no : {user.candidate_no}</li>
        <li className="list-group-item" >role : {user.role}</li>
        <li className="list-group-item" >city : {user.city}</li>
        <li className="list-group-item" >postal_code : {user.postal_code}</li>
        <li className="list-group-item" >status : {user.status}</li>
        <li className="list-group-item" >description : {user.description}</li>

       </ul>
       
       
       
        </div>

    )
}
export default ViewUser;