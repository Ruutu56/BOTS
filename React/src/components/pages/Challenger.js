import React, { useEffect } from "react";
import ChallengerService from "../../services/ChallengerService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Challenger.css';

function Challenger(props) {
  const initialState = {
    id: props.match.params.id,
    contactnumber: "",
    contactperson: "",
    date: "",
    location: "",
    reward: "",
    sportsname: "",
    teamname: "",
    time: "",
  };

  const [formData, setFormData] = React.useState(initialState);

  const saveChallenger = () => {
    let challenge = {
      id: formData.id,
      contactnumber: formData.contactnumber,
      contactperson: formData.contactperson,
      date: formData.date,
      location: formData.location,
      reward: formData.reward,
      sportsname: formData.sportsname,
      teamname: formData.teamname,
      time: formData.time,
      isAccepted: false,
    };
    console.log("User => " + JSON.stringify(challenge));

    ChallengerService.createChallenger(challenge).then((res) => {
     props.history.push("/services");
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

 // const handleSubmit = (event) => {
 //   validate(formData);
 // };

  const validate = (values) => {
    let errors = [];
    console.log(values);
    if (!values.contactnumber) {
      errors.push("Contact Number is required");
    }
    if (!values.contactperson) {
      errors.push("Contact Person is required");
    }
    if (!values.date) {
      errors.push("Date is required");
    }
    if (!values.location) {
      errors.push("Location is required");
    }
    if (!values.reward) {
      errors.push("Reward is required");
    }
    if (!values.sportsname) {
      errors.push("Sports Name is required");
    }
    if (!values.teamname) {
      errors.push("Team Name is required");
    }
    if (!values.time) {
      errors.push("Time is required");
    }
    if (errors.length) {
      errors.map((item) => {
        console.log(item);
        return toast.error(item, { position: toast.POSITION.TOP_RIGHT });
      });
    } else {
      saveChallenger();
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
        <ToastContainer position="top-right"/>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center" style={{ marginTop: "10px" }}>
              <p className="styleObj">Post Challenge</p>
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
                  <label> Team Name: </label>
                  <input
                    placeholder="Enter Your Team Name"
                    name="teamname"
                    className="form-control"
                    style={{ width: "70%" }}
                    value={formData.teamname}
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
                  <label> Reward: </label>
                  <input
                    placeholder="Enter Reward Money"
                    name="reward"
                    className="form-control"
                    style={{ width: "70%" }}
                    value={formData.reward}
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
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Challenger;
