import React from 'react';
import './Successful.css';

function Successful(props) {
    return (
      <div className='styleObj1'>
        <div className='styleObj8'>
        <h2 className="text-center">Congratulations!</h2>
  
        <br></br>
        
          <h1>Your Time Slot is Successfully Booked</h1>
        
  
        <div>
          <button
            className="btn btn-success" style={{ width: "30%", marginTop: "10px" ,backgroundColor:"white",color:"black",borderRadius:"12px"}}
          >
            <a href="/payment">Make Payment</a>
          </button>
          <br></br>
          <button
            className="btn btn-danger"
            style={{ width: "30%", marginTop: "10px" ,color:"black",borderRadius:"12px"}}
          >
            <a href="/services">Cancel</a>
          </button>
        </div>
        </div>
      </div>
    );
}  
export default Successful;
  