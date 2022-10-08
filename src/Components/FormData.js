import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import { v4 as uuidv4 } from "uuid";
const FormData = () => {
  var id = uuidv4();
  const [name, setname] = useState();
  const [desidnation, setdesidnation] = useState();
  const [dep, setdep] = useState();
  const [company, setcompany] = useState();
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getdata = JSON.parse(window.localStorage.getItem("user"));
    setdata([getdata]);
  }, []);

  const submitdata = (e) => {
    // e.preventDefault();
    const newdata = { id, name, desidnation, dep, company };
    // data.push(newdata);
    localStorage.setItem("user", JSON.stringify(newdata));
    navigate("/");
  };
  return (
    <>
      <div className="card">
        <form className="form">
          <div className="inp">
            <label for="Name">Name&nbsp;</label>
            <input
              id="Name"
              type="text"
              placeholder="Name"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="inp">
            <label for="Designation">Designation&nbsp;</label>
            <input
              type="text"
              placeholder="Designation"
              id="Designation"
              onChange={(e) => setdesidnation(e.target.value)}
            />
          </div>
          <div className="inp">
            <label for="Department">Department&nbsp;</label>
            <input
              type="text"
              placeholder="Department"
              id="Department"
              onChange={(e) => setdep(e.target.value)}
            />
          </div>
          <div className="inp">
            <label for="Company">Company&nbsp;</label>
            <input
              type="text"
              placeholder="Company"
              id="Company"
              onChange={(e) => setcompany(e.target.value)}
            />
          </div>
          <div className="inp">
            <input
              className="submit btn-primary"
              type="submit"
              onClick={submitdata}
            />
            <Link className="cancel btn-danger" to="/">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormData;
