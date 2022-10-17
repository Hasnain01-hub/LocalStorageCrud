/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./form.css";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
const FormData = () => {
  var id = uuidv4();
  const [name, setname] = useState();
  const [desidnation, setdesidnation] = useState();
  const [dep, setdep] = useState();
  const [company, setcompany] = useState();
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getdata = JSON.parse(window.localStorage.getItem("user"));
    setdata([getdata]);
  }, []);
  const submitdata = (e) => {
    // e.preventDefault();
    const newdata = { id, name, desidnation, dep, company };
    // data.push(newdata);
    var datas = _.flattenDeep(data);
    datas[0] == null || datas.length == 0
      ? localStorage.setItem("user", JSON.stringify(newdata))
      : localStorage.setItem(
        "user",
        JSON.stringify(_.flattenDeep([...data, newdata]))
      );
    // localStorage.setItem("user", JSON.stringify(_.flattenDeep(data)));
    console.log(data);
    // navigate("/");
  };

  return (
    <>
      {console.log(data)}

      <form class="form">
        <h2>ADD DATA</h2>
        <p type="Name:"><input id="Name"
          type="text"
          placeholder="Name"
          onChange={(e) => setname(e.target.value)}></input></p>
        <p type="Designation:"><input type="text"
              placeholder="Designation"
              id="Designation"
              onChange={(e) => setdesidnation(e.target.value)}></input></p>
        <p type="Department:"><input type="text"
              placeholder="Department"
              id="Department"
              onChange={(e) => setdep(e.target.value)}></input></p> 
              <p type="Company:"><input type="text"
              placeholder="Company"
              id="Company"
              onChange={(e) => setcompany(e.target.value)}></input></p> 
        
        <button onClick={submitdata}>Submit</button>
        <Link className="cancel btn-danger" to="/">
              Cancel
            </Link>
      </form>
    </>
  );
};

export default FormData;
