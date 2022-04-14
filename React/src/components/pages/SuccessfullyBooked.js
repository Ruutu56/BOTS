import React, { Component } from 'react';
import Payment from './Payment';
import Services from './Services';

function SuccessfullyBooked(props) {
    return (
      <div>
        <div>
          <h1>Congratulations</h1>
          <h1>Your Time Slot is Successfully Booked</h1>
        </div>
        <div>
          <button
            className="btn btn-success"
            style={{ width: "100%", marginTop: "10px" }}
            onClick={<Payment />}
          >
            Make Payment
          </button>
          <button
            className="btn btn-danger"
            onClick={Services}
            style={{ width: "100%", marginTop: "10px" }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
}
export default SuccessfullyBooked;
  