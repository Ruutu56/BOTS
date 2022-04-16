import React, { useState, useEffect, Fragment } from "react";
import GroundService from "../../services/GroundService";

function DispBookings(props) {
  
  const initialData = {
    ground_booking: []
  };

  const [data, setData] = useState(initialData);


  useEffect(() => {
    GroundService.getAll().then((res) => {
      setData({ ...data, ground_booking: res.data });
    });
  }, []);


  return (
    <div>
      <h2 className="text-center">Ground Bookings</h2>

      <br></br>
      {/* <div className = "row" style={{justifyContent: "center"}}>
                      {
                          this.state.newground.map((newground,index)=>{
                              return(
                                  <Fragment>
                                     <div  key = {newground.id} className="card" style={{width: "18rem",margin:"20px"}}>
                                      <img height="150px" src={`/images/${newground.id}.jpg`} alt={newground.id}/>
                                      <div className="card-body">
                                      <h5 className="card-title">{newground.groundname}</h5>
                                      <div className="card-text">{newground.groundtype}</div>
                                      <div className="card-text">{newground.location}</div>
                                      <div className="card-text">{newground.sports}</div>
                                      <div className="card-text">{newground.contact}</div>
                                      <div className="card-text">{newground.rating}</div>
                                      {
                                          newground.isBooking&&
                                          <div>
                                          
                                                  <select style={{width:"100%"}} className="form-select"  onChange={(e)=>{this.onTimeChange(e.target.value,index)}}>
                                                  <option value="9:00-10:00">9:00-10:00</option>
                                                  <option value="10:00-11:00">10:00-11:00</option>
                                                  <option value="11:00-12:00">11:00-12:00</option>
                                                  <option value="2:00-3:00">2:00-3:00</option>
                                                  <option value="3:00-4:00">3:00-4:00</option>
                                                  <option value="4:00-5:00">4:00-5:00</option>
                                                  <option value="5:00-6:00">5:00-6:00</option>
                                                  <option value="7:00-8:00">7:00-8:00</option>
                                                  </select>
                                                  
                                              </div>
                                      }
                                      
                                     <a href="#" onClick={this.bookNowHandler.bind(this,newground,index)} className="btn btn-primary  mt-2" style={{width:"100%"}}>{newground.isBooking?"Book Now":"Book"}</a>
                                      </div>
                                      </div> 
                                  </Fragment>
                              )
                          })
                      }
                 
                  </div>*/}
      <div className="row">
        {
          <table className="table table-striped table-bordered">
            <thead style={{color:"black"}}>
            <tr>
            <th></th>
               <th>Booking ID</th>
               <th>Date</th>                                   
               <th>Time</th>
               <th>Ground ID</th>
               <th>Price</th>
               <th>User ID</th>
              </tr>
            </thead>
            <tbody>
            
              {data.ground_booking.map((ground_booking, index) => {
                return (
                  <Fragment>
                    <tr key={ground_booking.booking_id}>
                    <td></td>
                    <td> {ground_booking.booking_id}</td>
                      <td> {ground_booking.date}</td>
                      <td> {ground_booking.time}</td>
                      <td> {ground_booking.groundId}</td>
                      <td> {ground_booking.price}</td>
                      <td> {ground_booking.userId}</td>
                     
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

export default DispBookings;
