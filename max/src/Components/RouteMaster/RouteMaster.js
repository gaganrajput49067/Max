import React from "react";

const RouteMaster = () => {
  return (
    <div>
      <div className="container-fluid border border-dark">
        <div className="heading text-center ">
          <p className="h5">Route Master</p>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <span>Business Zone: </span>
            <select className="form-select" aria-label="Business Zone">
              <option selected>Open this select menu</option>
            </select>
          </div>
          <div className="col-sm-6">
            <span>State: </span>
            <select className="form-select " aria-label="State">
              <option selected>Open this select menu</option>
            </select>
          </div>
          <div className="col-sm-6">
            <span>City: </span>
            <select className="form-select" aria-label="City">
              <option selected>Open this select menu</option>
            </select>
          </div>
          <div className="col-sm-4">
            <span>Route: </span>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-2">
            <input
              type="checkbox"
              id="active"
              name="active"
              
              className="form-check-input"
            />
            <label htmlFor="active">IsActive</label>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default RouteMaster;
