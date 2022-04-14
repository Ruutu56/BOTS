import React from 'react';

function SuccessfullyChallengeAccepted(props) {


    const handleGoBack = () => {
      props.history.push("/services");
    }
  
    return (
      <div style={{display: 'flex', flexDirection: 'column', hight: '90vh', justifyContent: 'center', alignContent: 'center'}} >
        <h1>You Have Successfully Accepted the Challenge</h1>
        <h1>All the Best</h1>
        <button className="btn btn-success" onClick={() => handleGoBack()} style={{width: '100px', alignSelf: 'center'}}>Go Back</button>
      </div>
    );
  }
  
  export default SuccessfullyChallengeAccepted;
  