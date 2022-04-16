import React, { useState, useEffect, Fragment } from "react";
import ChallengerService from "../../services/ChallengerService";

function DispChallenges(props) {
  
  const initialData = {
    challenger: []
  };

  const [data, setData] = useState(initialData);


  useEffect(() => {
    ChallengerService.getChallenger().then((res) => {
      setData({ ...data, challenger: res.data });
    });
  }, []);


  return (
    <div>
      <h2 className="text-center">Challenges</h2>

      <br></br>
      
      <div className="row">
        {
          <table className="table table-striped table-bordered">
            <thead style={{color:"black"}}>
            <tr>
            <th></th>
               <th>Challenge ID</th>
               <th>Contact no.</th>                                   
               <th>Contact Person</th>
               <th>Date</th>
               <th>Location</th>
               <th>Reward</th>
               <th>Sports name</th>
               <th>Team name</th>
               <th>Time</th>
               <th>Accepted Status</th>
              </tr>
            </thead>
            <tbody>
            
              {data.challenger.map((challenger, index) => {
                return (
                  <Fragment>
                    <tr key={challenger.id}>
                    <td></td>
                    <td> {challenger.id}</td>
                    <td> {challenger.contactnumber}</td>
                    <td> {challenger.contactperson}</td>
                    <td> {challenger.date}</td>
                    <td> {challenger.location}</td>
                    <td> {challenger.reward}</td>
                    <td> {challenger.sportsname}</td>
                    <td> {challenger.teamname}</td>
                    <td> {challenger.time}</td>
                    <td> {challenger.isAccepted.toString()}</td>
                     
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
}

export default DispChallenges;
