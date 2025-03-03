import React from "react";

export default function SetupForm() {
  return (
    <form className="setup">
      <div className="setup-gender">
        <button>Male</button>
        <button>Female</button>
      </div>
      <div className="setup-age">
        <input type="number" min={1} max={110} />
      </div>
      <div className="setup-weight">
        <input type="number" min={0} />
      </div>
      <div className="setup-goals">
        <input type="checkbox" />
        <label htmlFor=""></label>
        <input type="checkbox" />
        <label htmlFor=""></label>
        <input type="checkbox" />
        <label htmlFor=""></label>
      </div>
      <div className="setup-level">
        <select name="" id="">
          <option value="">--Choose an option--</option>
          <option value="">Begginer</option>
          <option value="">Intermediate</option>
          <option value="">Expert</option>
        </select>
        <div className="setup-"></div>
      </div>
      <div className="setup-equipment">
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
      </div>
    </form>
  );
}
