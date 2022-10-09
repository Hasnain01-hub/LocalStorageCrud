import _, { indexOf } from "lodash";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { confirm } from "react-confirm-box";

import "./home.css";
import Custumd from "./Custum";
const options = {
  labels: {
    confirmable: "Confirm",
    cancellable: "Cancel",
  },
};

const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getdata = JSON.parse(window.localStorage.getItem("user"));
    setdata([getdata]);
  }, []);

  const deletedata = async (e, id) => {
    e.preventDefault();
    const result = await Custumd("Are you sure you want to delete this item?");

    if (result) {
      const updated=_.flattenDeep(data);
      _.flattenDeep(data).map((e,index) => {
        if (e.id == id) {
          
        console.log(updated);
           updated.splice(index,1);
          }
      });
      localStorage.setItem("user", JSON.stringify(updated));
      // window.location.reload();
    }
  };
  return (
    <>
      {console.log(data)}
      <div className="toppad">
        <div class="container3">
          <div>
            <Link className="button" to="/add-form">
              <button className="btn btn-primary"> Add</button>
            </Link>
          </div>
          <ul class="responsive-table">
            <li class="table-header">
              <div class="col col-1">Name</div>
              <div class="col col-2">Designation</div>
              <div class="col col-2">Department</div>
              <div class="col col-3">Company</div>
              <div class="col col-3">Action</div>
            </li>
            {/* {console.log("here is user", services)} */}
            {_.flattenDeep(data).map((s, i) => (
              <>
                <li class="table-row" key={s.id}>
                  <div class="col col-1" data-label="Name">
                    {s.name}
                  </div>
                  <div class="col col-2 " data-label="Designation">
                    {s.desidnation}
                  </div>
                  <div class="col col-2" data-label="Department">
                    {s.dep}
                  </div>
                  <div class="col col-3" data-label="Company">
                    {s.company}
                  </div>
                  <div class="col col-3" data-label="Action">
                    <div className="btns">
                      <Link className="button" to={`/edit-form/${s.id}`}>
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => deletedata(e, s.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  {/* {user && (user.role === 'admin' && <Button onClick={() => { handleremove(s.name) }} type="danger" className="mb-3 custom" block shape="round" icon={<DeleteOutlined />} size="small">
              </Button>)} */}
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
