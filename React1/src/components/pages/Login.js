import React, { Component } from 'react';
import UserLoginService from '../../services/UserLoginService';
import { Link } from "react-router-dom";
import './Login.css';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
       
        email:'',
        pass:'',
        errors: {
          email: '',
          pass: ''
        }
    }
    //this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    //this.changeLastNameHandler = this.changeLastNameHandler.bind(this);   
  }
  

 /* takeUid=(email,pass)=>{
    let fid = {email:this.state.email,pass:this.state.pass};
    UserLoginService.getUid(fid).then((res) => {
      this.setState({fo:res.data});
      localStorage.setItem("userd",res.data);
      sessionStorage.setItem("userd",res.data);
  });
  }

  formSubmitHandler=event=>{
    event.preventDefault()
    console.log(this.state);
    //this.takeUid(this.state.email,this.state.pass);
    UserLoginService.doLog().then((res) => {
      console.log(res.data);
      sessionStorage.setItem("userid",res.data);
      if(res.data!=null)
      { 
        this.props.history.push('/services');
      }
    
  })
    //this.props.history.push('/services');
  }
*/
email=(event)=> {
             
  this.setState({ email: event.target.value })

}

pass=(event)=> {
             
  this.setState({ pass: event.target.value })

}  

handleChange = (event) => {
event.preventDefault();
const { name, value } = event.target;
let errors = this.state.errors;

switch (name) {
  case 'email': 
       errors.email= 
        validEmailRegex.test(value)
        ? ''
        : 'Email is not valid!';
  break;

  case 'pass': 
        errors.pass = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
  break;

  default:
    break;
  }
  this.setState({errors, [name]: value});
}
  formSubmitHandler=(e)=>{
    e.preventDefault()
    console.log(this.state);
    const{email,pass}=this.state
    const url= "http://localhost:8080/auth/login?email="+email+"&pass="+pass;
    fetch(url)
    .then (response => response.text())
    .then (data => {
        if(data == "user")
        {
          //.then((response) => response.json())
           /*localStorage.setItem("token","lab")
           this.setState({
            loggedIn:true
          })*/
            UserLoginService.getUid(email).then((resp) => {
            let u=resp.data;
          
            localStorage.setItem("userw_id",u.id);
            console.log(u.id);
            
          });
            //let userw_id=localStorage.getItem("userw_id");
           // localStorage.setItem("labour_id",localStorage.getItem("userw_id"));
            this.props.history.push('/services');
        }
        else if(data =="owner")
        {  
         /* localStorage.setItem("tk","cli")
          this.setState({
           loggedInClient:true
         })*/
         UserLoginService.getUid(email).then((resp) => {
          let u=resp.data;
        
          localStorage.setItem("userw_id",u.id);
          console.log(u.id);
          
        });
         // localStorage.setItem("labour_id",localStorage.getItem("userw_id"));
          this.props.history.push('/services');
         //console.log("login admin");
           // localStorage.setItem("client_id",localStorage.getItem("userc_id"));
            //this.props.history.push("/clienthome/"+localStorage.getItem("userc_id"));
        }
        else if(data =="admin")
        {  
         /* localStorage.setItem("tkadmin","ad")
          this.setState({
           loggedInAdmin:true
         })*/
            this.props.history.push('/admindashboard'); 
        }
        else if(data =="")
        {
            this.setState({loginerror:"Wrong ID/PWD"})
        }
    });
}

/*changeEmailHandler=(event)=>{
  this.setState({email:event.target.value});
}

changePassHandler=(event)=>{
  this.setState({pass: event.target.value});
}
*/
cancel(){
  this.props.history.push('/');
}

  render() {
    const {errors} = this.state;
    return (
      <div className="styleObj1">
      <br></br>
              <div className = "container">
                   <div className = "row">
                       <div className = "card col-md-6 offset-md-3 offset-md-3">
                           <h3 className="text-center" style={{ marginTop: "10px" }}><p className="styleObj">Log In</p></h3>
                           <div className = "card-body">
                               <form onSubmit={this.formSubmitHandler}>
                                   <div className = "form-group">
                                       <label> Email ID: </label>
                                       <input type="email" placeholder="Enter email" name="email" className="form-control" 
                                           value={this.state.email} onChange={((event) =>this.email(event),this.handleChange )}/>
                                           {errors.email.length > 0 && <span className='error' style={{ color: "red", fontSize: 14 }}>{errors.email}</span>}
                                   </div>

                                   <div className = "form-group">
                                       <label> Password: </label>
                                       <input placeholder="Enter Password" type="password" name="pass" className="form-control" 
                                           value={this.state.pass}  onChange={((event) =>this.pass(event),this.handleChange)}/>
                                            {errors.pass.length > 0 && <span className='error' style={{ color: "red", fontSize: 14 }}>{errors.pass}</span>}
                                   </div>

                                   <button className="btn btn-success" style={{ width: "100%", marginTop: "10px" }} onClick={this.updateEmployee}>Log In</button>
                                   <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ width: "100%", marginTop: "10px" }}>Cancel</button>
                               
                               </form>
                               <div
                                 style={{
                                   display: "flex",
                                   justifyContent: "center",
                                   alignItems: "center",
                                   width: "100%",
                                   marginTop: "10px",
                              }}
              >
                <p>
                  New user? <Link to="/sign-up">Sign-up</Link>
                </p>
              </div>
              </div>
              </div>
            </div>
         </div> 
     </div>
    );
  }
}

export default Login;