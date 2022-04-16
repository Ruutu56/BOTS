import React from "react";
import TeammateFinderService from "../../services/TeammateFinderService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './TeammateFinder.css';

function TeammateFinder(props) {
  const initialState = {
    id: props.match.params.id,
    availplayer: "",
    contactnum: "",
    contactperson: "",
    eventdate: "",
    eventtime: "",
    location: "",
    reqplayer: "",
    sports: "",
  };

  const [formData, setFormData] = React.useState(initialState);

  const saveTeammateFinder = () => {
    let teammatefinder = {
      id: formData.id,
      availplayer: formData.availplayer,
      contactnum: formData.contactnum,
      eventdate: formData.eventdate,
      eventtime: formData.eventtime,
      location: formData.location,
      sportsname: formData.sportsname,
      reqplayer: formData.reqplayer,
      sports: formData.sports,
    };
    console.log("User => " + JSON.stringify(teammatefinder));

    TeammateFinderService.createTeammateFinder(teammatefinder).then((res) => {
      this.props.history.push("/services");
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate(formData);
  };

  const validate = (values) => {
    let errors = [];
    console.log(values);

    if (!values.location) {
      errors.push("Location is required");
    }
    if (!values.sportsname) {
      errors.push("Sport Name is required");
    }
    if (!values.reqplayer) {
      errors.push("Required Players is required");
    }
    if (!values.availplayer) {
      errors.push("Available Players is required");
    }

    if (!values.eventdate) {
      errors.push("Event Date is required");
    }
    if (!values.eventtime) {
      errors.push("Event Time is required");
    }
    if (!values.contactperson) {
      errors.push("Contact Person is required");
    }

    if (!values.contactnum) {
      errors.push("Contact Number is required");
    }

    if (errors.length) {
      errors.map((item) => {
        console.log(item);
        return toast.error(item, { position: toast.POSITION.TOP_RIGHT });
      });
    } else {
      saveTeammateFinder();
    }
  };

  return (
    <div className="styleObj1">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
    >
      <ToastContainer position="top-right" />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center" style={{ marginTop: "10px" }}>
              <p className="styleObj">Teammate Finder</p>
            </h3>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div
                  className="form-group"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label> Location: </label>
                  <input
                    placeholder="Enter Location"
                    name="location"
                    className="form-control"
                    style={{ width: "70%" }}
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label> Sports: </label>
                  <input
                    placeholder="Enter Sports Name"
                    name="sportsname"
                    className="form-control"
                    style={{ width: "70%" }}
                    value={formData.sportsname}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label> Required Players: </label>
                  <input
                    placeholder="Enter required number of players"
                    name="reqplayer"
                    className="form-control"
                    value={formData.reqplayer}
                    style={{ width: "70%" }}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label> Available Players: </label>
                  <input
                    placeholder="Enter Available players"
                    name="availplayer"
                    className="form-control"
                    value={formData.availplayer}
                    style={{ width: "70%" }}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label> Date: </label>
                  <input
                    type="Date"
                    name="date"
                    className="form-control"
                    style={{ width: "30%" }}
                    value={formData.date}
                    onChange={handleChange}
                  />

                  <label> Time: </label>
                  <input
                    type="time"
                    name="time"
                    className="form-control"
                    style={{ width: "30%" }}
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label> Contact Person: </label>
                  <input
                    placeholder="Enter Contact Person Name"
                    name="contactperson"
                    className="form-control"
                    value={formData.contactperson}
                    style={{ width: "70%" }}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label> Contact Number: </label>
                  <input
                    placeholder="Enter Contact Person Mobile"
                    name="contactnumber"
                    className="form-control"
                    style={{ width: "70%" }}
                    value={formData.contactnumber}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-success" style={{ width: "100%" }}>
                  Submit
                </button>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default TeammateFinder;
