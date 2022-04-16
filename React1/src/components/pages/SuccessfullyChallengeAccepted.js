import React from 'react';
import './SuccessfullyChallengeAccepted.css';

function SuccessfullyChallengeAccepted(props) {


    const handleGoBack = () => {
      props.history.push("/services");
    }
  
    return (
      <div className="success">
      <div className="success1">
        <h1 style={{fontWeight:"bolder",color:"whitesmoke",fontSize:"24px"}}>You Have Successfully Accepted the Challenge</h1>
        <h1 style={{fontWeight:"bolder",color:"whitesmoke",fontSize:"24px"}}>All the Best</h1>
      
        <br/>
        <button className="btn btn-success" onClick={() => handleGoBack()} style={{width: '130px', alignSelf: 'center',fontSize:"20px"}}>Go Back</button>
        </div>
      </div>
    );
  }
  
  export default SuccessfullyChallengeAccepted;
  