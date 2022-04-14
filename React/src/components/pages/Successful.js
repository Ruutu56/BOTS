import React from 'react';

function Successful(props) {
    return (
      <div>
        <h2 className="text-center">Congratulations!</h2>
  
        <br></br>
        <div>
          <h1>Your Time Slot is Successfully Booked</h1>
        </div>
  
        <div>
          <button
            className="btn btn-success"
            style={{ width: "100%", marginTop: "10px" }}
          >
            <a href="/payment">Make Payment</a>
          </button>
          <button
            className="btn btn-danger"
            style={{ width: "100%", marginTop: "10px" }}
          >
            <a href="/services">Cancel</a>
          </button>
        </div>
      </div>
    );
}  
export default Successful;
  