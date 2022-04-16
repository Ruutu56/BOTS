import React, { Component, Fragment } from 'react';
import './Payment.css';
import PaymentService from '../../services/PaymentService';

class Payment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            card_no:'',
            exp_date:'',
            cv:'',
            card_owner:'',
            bk_id:'',
            msg:null
        }
        this.savePayment = this.savePayment.bind(this);
    }

    savePayment = (e) => {
        e.preventDefault();
        let pay = {
            card_no:this.state.card_no,
            exp_date:this.state.exp_date,
            cv:this.state.cv,
            card_owner:this.state.card_owner,
            bk_id:localStorage.getItem("bid")
            };
             
            PaymentService.addPayment(pay).then(res => {
                this.setState({msg : 'Payment Successful!'});
                this.props.history.push('/services');
            });
    }

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
    }
    
    cancel=()=>{
        this.props.history.push('/services');
    }

    logout=()=>{
        this.props.history.push('/');
    }

    render() {
      return (
        <div className="styleObj1">
        <div className="container">
          <div className="page-header text-center">
            <h1></h1>
          </div>
          <div className="container">
            <div className="row">
              <div className = "card col-md-6 offset-md-3 offset-md-3">
                <div className = "card-body">
                  <div class="panel-heading">
                    <div class="row">
                      <h3 className="text-center" style={{ marginTop: "10px" }}><p className="styleObj">Payment Details</p></h3>
                      </div>
                      <div class="inlineimage">
                        <img
                          class="img-responsive images"
                          src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"
                          style={{width:"100px",height:"70px",paddingRight:"30px"}}
                        />
                        <img
                          class="img-responsive images"
                          src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"
                          style={{width:"100px",height:"70px",paddingRight:"30px"}}
                        />
                        <img
                          class="img-responsive images"
                          src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"
                          style={{width:"100px",height:"70px",paddingRight:"30px"}}
                        />
                        <img
                          class="img-responsive images"
                          src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"
                          style={{width:"100px",height:"70px",paddingRight:"30px"}}
                        />
                      </div>
                    
                  </div>
                  <div class="panel-body">
                    <form role="form">
                      <div class="row">
                        <div class="col-xs-12">
                          <div class="form-group">
                            <label>CARD NUMBER</label>
                            <div class="input-group">
                              <input
                                type="tel"
                                name="card_no"
                                class="form-control"
                                placeholder="Valid Card Number"
                                value={this.state.card_no} 
                                onChange={this.onChange} 
                              />
                              <span class="input-group-addon">
                                <span class="fa fa-credit-card"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xs-7 col-md-7">
                          <div class="form-group">
                            <label>
                              <span class="hidden-xs">EXPIRATION</span>
                              <span class="visible-xs-inline">EXP</span> DATE
                            </label>
                            <input
                              type="tel"
                              name="exp_date"
                              class="form-control"
                              placeholder="MM / YY"
                              value={this.state.exp_date}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                        <div class="col-xs-5 col-md-5 pull-right">
                          <div class="form-group">
                            <label>CV CODE</label>
                            <input
                              type="tel"
                              name="cv"
                              class="form-control"
                              placeholder="CVC"
                              value={this.state.cv}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xs-12">
                          <div class="form-group">
                            <label>CARD OWNER</label>
                            <input
                              type="text"
                              name="card_owner"
                              class="form-control"
                              placeholder="Card Owner Name"
                              value={this.state.card_owner}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="panel-footer">
                    <div class="row">
                      <div class="col-xs-12">
                        <button
                          class="btn btn-success btn-lg btn-block"
                          onClick={this.savePayment.bind(this)}
                        >
                          Confirm Payment
                        </button>
                      </div>
                      <div class="col-xs-12">
                        <button
                          class="btn btn-warning btn-lg btn-block"
                          onClick={this.cancel.bind(this)}
                          style={{ marginLeft: "10px" }}
                        >
                          Cancel
                        </button>
                      </div>
                      <div class="col-xs-12">
                        <button
                          class="btn btn-danger btn-lg btn-block"
                          onClick={this.logout.bind(this)}
                          style={{ marginLeft: "20px" }}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
    }
    
    export default Payment;    
    
    
    /*render() {
        return ( 
          <div className="styleObj1">
            <div class="container">
               <div class="page-header text-center">
                 <h1></h1>
               </div> 
               <div className="container">
        <div className="row">
          <div className = "card col-md-6 offset-md-3 offset-md-3">
            <div className = "card-body">
              <div class="panel-heading">
                <div class="row">
                  <h3 className="text-center" style={{ marginTop: "10px" }}><p className="styleObj">Payment Details</p></h3>
                  <div class="inlineimage">
                    <img
                      class="img-responsive images"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"
                    />
                    <img
                      class="img-responsive images"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"
                    />
                    <img
                      class="img-responsive images"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"
                    />
                    <img
                      class="img-responsive images"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"
                    />
                  </div>
                </div>
              </div>
                          <div class="panel-body">
                              <form role="form">
                                <div class="row">
                                   <div class="col-xs-12">
                                      <div class="form-group">
                                         <label>CARD NUMBER</label>
                                        <div class="input-group"> 
                                        <input 
                                          type="tel" 
                                          name="card_no" 
                                          class="form-control"  
                                          placeholder="Valid Card Number" 
                                          value={this.state.card_no} 
                                          onChange={this.onChange} 
                                        /> 
                                        <span class="input-group-addon">
                                          <span class="fa fa-credit-card"></span>
                                          </span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-7 col-md-7">
                                    <div class="form-group"> <label><span class="hidden-xs">EXPIRATION</span><span class="visible-xs-inline">EXP</span> DATE</label> <input type="tel" name="exp_date"  class="form-control" placeholder="MM / YY" value={this.state.exp_date} onChange={this.onChange} /> </div>
                                </div>
                                <div class="col-xs-5 col-md-5 pull-right">
                                    <div class="form-group"> <label>CV CODE</label> <input type="tel" name="cv" class="form-control" placeholder="CVC" value={this.state.cv} onChange={this.onChange} /> </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group"> <label>CARD OWNER</label> <input type="text" name="card_owner" class="form-control" placeholder="Card Owner Name" value={this.state.card_owner} onChange={this.onChange} /> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-xs-12"> <button class="btn btn-success btn-lg btn-block" onClick={this.savePayment.bind(this)} >Confirm Payment</button> </div>
                            <div class="col-xs-12"> <button class="btn btn-warning btn-lg btn-block" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}} >Cancel</button> </div>
                            <div class="col-xs-12"> <button class="btn btn-danger btn-lg btn-block" onClick={this.logout.bind(this)} style={{marginLeft: "20px"}} >Logout</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
   );
}
}
export default Payment;*/









































{/*import React, { useState } from "react";
import "../pay.css";
import PaymentService from "../../services/PaymentService";
import './Payment.css';

function Payment(props) {
  const initialData = {
    cardNo: "",
    expDate: "",
    cv: "",
    cardOwner: "",
    msg: "",
  };

  const [data, setData] = useState(initialData);

  const savePayment = (e) => {
    e.preventDefault();
    console.log(e);
    let pay = {
      card_no: data.cardNo,
      exp_date: data.expDate,
      cv: data.cv,
      card_owner: data.cardOwner,
      bk_id: localStorage.getItem("bid"),
    };

    PaymentService.addPayment(pay).then((res) => {
      alert("Payment success!");
      console.log(res.data);
      setData({ msg: "Payment Successful" });
      props.history.push("/services");
    });
  };

  const onChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };

  const cancel = () => {
    props.history.push("/services");
  };

  const logout = () => {
    props.history.push("/");
  };

  return (
    <div className="styleObj1">
    <div className="container">
      <div className="page-header text-center">
        <h1></h1>
      </div>
      <div className="container">
        <div className="row">
          <div className = "card col-md-6 offset-md-3 offset-md-3">
            <div className = "card-body">
              <div class="panel-heading">
                <div class="row">
                  <h3 className="text-center" style={{ marginTop: "10px" }}><p className="styleObj">Payment Details</p></h3>
                  <div class="inlineimage">
                    <img
                      class="img-responsive images"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"
                    />
                    <img
                      class="img-responsive images"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"
                    />
                    <img
                      class="img-responsive images"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"
                    />
                    <img
                      class="img-responsive images"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"
                    />
                  </div>
                </div>
              </div>
              <div class="panel-body">
                <form>
                  <div class="row">
                    <div class="col-xs-12">
                      <div class="form-group">
                        <label>CARD NUMBER</label>
                        <div class="input-group">
                          <input
                            type="tel"
                            name="card_no"
                            class="form-control"
                            placeholder="Valid Card Number"
                            value={data.cardNo}
                            onChange={onChange}
                          />
                          <span class="input-group-addon">
                            <span class="fa fa-credit-card"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-7 col-md-7">
                      <div class="form-group">
                        <label>
                          <span class="hidden-xs">EXPIRATION</span>
                          <span class="visible-xs-inline">EXP</span> DATE
                        </label>
                        <input
                          type="tel"
                          name="exp_date"
                          class="form-control"
                          placeholder="MM / YY"
                          value={data.expDate}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div class="col-xs-5 col-md-5 pull-right">
                      <div class="form-group">
                        <label>CV CODE</label>
                        <input
                          type="tel"
                          name="cv"
                          class="form-control"
                          placeholder="CVC"
                          value={data.cv}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12">
                      <div class="form-group">
                        <label>CARD OWNER</label>
                        <input
                          type="text"
                          name="card_owner"
                          class="form-control"
                          placeholder="Card Owner Name"
                          value={data.cardOwner}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="panel-footer">
                <div class="row">
                  <div class="col-xs-12">
                    <button
                      class="btn btn-success btn-lg btn-block"
                      onClick={(e) => savePayment(e)}
                    >
                      Confirm Payment
                    </button>
                  </div>
                  <div class="col-xs-12">
                    <button
                      class="btn btn-warning btn-lg btn-block"
                      onClick={() => cancel()}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </div>
                  <div class="col-xs-12">
                    <button
                      class="btn btn-danger btn-lg btn-block"
                      onClick={() => logout()}
                      style={{ marginLeft: "20px" }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Payment;
*/}