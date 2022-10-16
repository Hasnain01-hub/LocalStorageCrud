import _, { indexOf } from "lodash";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const id = useParams();
  const [ect, setect] = useState({});
  const [name, setname] = useState("");
  const [desidnation, setdesidnation] = useState("");
  const [dep, setdep] = useState("");
  const [company, setcompany] = useState("");

  const [data, setdata] = useState({});
  useEffect(() => {
    const getdata = JSON.parse(window.localStorage.getItem("user"));
    setdata([getdata]);
  
     _.flattenDeep([getdata]).map((e) => {
      if (e.id == id.id) {
        setname(e.name);
        setdesidnation(e.desidnation);
        setdep(e.dep);
        setcompany(e.company);
        setect(e);
      }
    });
  }, []);
  const navigate = useNavigate();
  const submitdata = (e) => {
    e.preventDefault();
    _.flattenDeep(data).map((e) => {
      if (e.id == id.id) {
        // e.id = id;
        e.name = name;
        e.desidnation = desidnation;
        e.dep = dep;
        e.company = company;
      }
    });
    // console.log(_.flattenDeep(data));
    localStorage.setItem("user", JSON.stringify(_.flattenDeep(data)));
    navigate('/');
  };
  return (
    <>
      
      <div className="card">
        <form className="form" onSubmit={submitdata}>
          <div className="inp">
            <label for="Name">Name&nbsp;</label>
            <input
              id="Name"
              value={name}
              type="text"
              placeholder="Name"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="inp">
            <label for="Designation">Designation&nbsp;</label>
            <input
              type="text"
              value={desidnation}
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
              value={dep}
              id="Department"
              onChange={(e) => setdep(e.target.value)}
            />
          </div>
          <div className="inp">
            <label for="Company">Company&nbsp;</label>
            <input
              type="text"
              placeholder="Company"
              value={company}
              id="Company"
              onChange={(e) => setcompany(e.target.value)}
            />
          </div>
          <div className="inp">
            <input className="submit" type="submit" />
            <Link className="cancel" to="/">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
