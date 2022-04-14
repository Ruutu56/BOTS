import React, { useState, useEffect, Fragment } from "react";
import GroundService from "../../services/GroundService";

function GroundBooking(props) {
  const initialData = {
    newground: [],
    date: "",
    time: React.createRef(),
    price: "",
    userId: "",
    groundId: "",
  };

  const [data, setData] = useState(initialData);

  // onChange = (e) =>
  //this.setState({ [e.target.name]: e.target.value });

  const onTimeChange = (time, index) => {
    let newground = [...data.newground];
    newground[index].time = time;
    localStorage.setItem("btime", time);
    setData({ ...data, newground });
    console.log(time);
    //console.log(index);
  };

  const onDateChange = (d) => {
    //this.state.newground[index]["bookingTime"]=time;
    localStorage.setItem("bdate", d);
    setData({ ...data, date: d });
    console.log(d);
    //console.log(index);
  };

  const bookNowHandler = (ground, index) => {
    console.log(ground);
    localStorage.setItem("gindex", index);
    console.log(index);

    saveBooking(ground);
    if (data.newground[index].isBooking) {
      window.alert("Ground is booked:" + data.newground[index]["bookingTime"]);

      let newground = [...data.newground];
      newground[index].isBooking = false;
      setData({ ...data, newground });
    } else {
      let newground = [...data.newground];
      newground[index].isBooking = true;
      setData({ ...data, newground });
    }
  };

  useEffect(() => {
    GroundService.getGrounds().then((res) => {
      setData({ ...data, newground: res.data });
    });
  }, []);

  const saveBooking = (u) => {
    let user = {
      groundId: data.newground[localStorage.getItem("gindex")].id,
      date: localStorage.getItem("bdate"),
      time: localStorage.getItem("btime"),
      price: data.newground[localStorage.getItem("gindex")].price,
      userId: parseInt(localStorage.getItem("userw_id"), 10),
    };
    console.log("User => " + JSON.stringify(user));

    GroundService.addGroundBook(user).then((res) => {
      let gh = res.data;
      localStorage.setItem("bid", gh.booking_id);
      console.log(gh.booking_id);
      console.log(" Your ground is booked!");
    });
    props.history.push("/successful");

    //this.gBid();
    // let gid={date:localStorage.getItem("bdate"),time:localStorage.getItem("btime")};
  };

  /*gBid=()=>{
          
          GroundService.getBookId().then(res => {
              
              console.log(res.data);
              localStorage.setItem("bid",res.data);
          })
  
          this.props.history.push('/successful');
      
      }*/

  return (
    <div>
      <h2 className="text-center">Sports Grounds</h2>

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
            <thead>
              <tr>
                <th></th>
                <th>Ground Name</th>
                <th>Ground Type</th>
                <th>Location</th>
                <th>Sports</th>
                <th>Contact No</th>
                <th>Rating</th>
                <th>Time Slots</th>
                <th>Price</th>
                <th>Book Now</th>
              </tr>
            </thead>
            <tbody>
              {data.newground.map((newground, index) => {
                return (
                  <Fragment>
                    <tr key={newground.id}>
                      <td>
                        <img
                          height="150px"
                          src={`/images/${newground.id}.jpg`}
                          alt={newground.id}
                        />
                      </td>
                      <td> {newground.groundname} </td>
                      <td> {newground.groundtype}</td>
                      <td> {newground.location}</td>
                      <td> {newground.sports}</td>
                      <td> {newground.contact}</td>
                      <td> {newground.rating}</td>
                      <td>
                        <label for="time"></label>

                        <select
                          name="time"
                          id="time"
                          onChange={(e) => {
                            onTimeChange(e.target.value, index);
                          }}
                        >
                          <option value="9:00-10:00">9:00-10:00</option>
                          <option value="10:00-11:00">10:00-11:00</option>
                          <option value="11:00-12:00">11:00-12:00</option>
                          <option value="2:00-3:00">2:00-3:00</option>
                          <option value="3:00-4:00">3:00-4:00</option>
                          <option value="4:00-5:00">4:00-5:00</option>
                          <option value="5:00-6:00">5:00-6:00</option>
                          <option value="7:00-8:00">7:00-8:00</option>
                        </select>
                      </td>

                      <td>
                        <div
                          style={{
                            margin: "auto",
                            display: "block",
                            width: "fit-content",
                          }}
                        >
                          <label for="date">Choose date:</label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={data.date}
                            onChange={(e) => {
                              onDateChange(e.target.value);
                            }}
                            min="2022-01-01"
                            max="2023-12-31"
                          />
                        </div>
                      </td>
                      <td> {newground.price}</td>
                      <td>
                        <a
                          href="#"
                          onClick={() => bookNowHandler(newground, index)}
                          className="btn btn-primary  mt-2"
                          style={{ width: "100%" }}
                        >
                          Book Now
                        </a>
                      </td>

                      {/* <td>
                        {}

                        <Link to="/booked">
                          <button className="btn btn-info">Book Now</button>
                        </Link>
                      </td>

                      {newground.isBooking ? "Book Now" : "Book"} */}
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

export default GroundBooking;
