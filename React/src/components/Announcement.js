import React, { useState, useEffect } from "react";
import ChallengerService from "../services/ChallengerService";
import { Link } from "react-router-dom";

function Announcement(params) {
  const [challenger, setchallenger] = useState([]);

  useEffect(() => {
    ChallengerService.getChallenger().then((res) => {
      setchallenger(res.data);
    });
  }, []);

  const onAcceptChallange = (id) => {
    ChallengerService.editChallenger(id).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <br></br>
      <br></br>
      <h2 className="text-center">Challenger's Around You</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Team Name</th>
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
              <th>Reward</th>
              <th>Sports Name</th>
              <th>Contact Person</th>
              <th>Contact Number</th>
              <th>Accept Challenge</th>
            </tr>
          </thead>
          <tbody>
            {challenger.map((challenger) => {
              if (!challenger.isAccepted) {
                return (
                  <tr key={challenger.id}>
                    <td></td>
                    <td> {challenger.teamname} </td>
                    <td> {challenger.location}</td>
                    <td> {challenger.date}</td>
                    <td> {challenger.time}</td>
                    <td> {challenger.reward}</td>
                    <td> {challenger.sportsname}</td>
                    <td> {challenger.contactperson}</td>
                    <td> {challenger.contactnumber}</td>
                    <td>
                      <Link to="/challenge-accepted">
                        <button
                          className="btn btn-info"
                          onClick={() => onAcceptChallange(challenger.id)}
                        >
                          Accept Challenge
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Announcement;
