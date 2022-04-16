import React, { useEffect } from "react";
import UserService from "../../services/UserService";
import './SignUp.css';

function SignUp(props) {
  const initialState = {
    id: props.match.params.id,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    pass: "",
    role: "",
    ownerChecked: false,
    userChecked: false,
  };

  const [formData, setFormData] = React.useState(initialState);
  const [formError, setFormError] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  const saveUser = () => {
    let user = {
      id: formData.id,
      email: formData.email,
      firstname: formData.firstName,
      lastname: formData.lastName,
      mobile: formData.mobile,
      role: formData.role,
      pass: formData.pass,
    };
    console.log("User => " + JSON.stringify(user));

    UserService.createUser(user).then((res) => {
      props.history.push("/login");
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const changeOwnerRoleHandler = () => {
    setFormData({
      ...formData,
      ownerChecked: true,
      userChecked: false,
      role: "owner",
    });
  };

  const changeUserRoleHandler = () => {
    setFormData({
      ...formData,
      ownerChecked: false,
      userChecked: true,
      role: "user",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError(validate(formData));
    setIsSubmit(true);
  };

  const validate = (values) => {
    let errors = {};
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First Name is required !";
    } else if (values.firstName.length < 3) {
      errors.firstName = "First name is not valid !";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is required !";
    } else if (values.lastName.length < 3) {
      errors.lastName = "Last Name is not valid !";
    }

    if (!values.email) {
      errors.email = "Email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid !";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile is required !";
    } else if (values.mobile.length !== 10) {
      errors.mobile = "Mobile is not valid !";
    }

    if (!values.pass) {
      errors.pass = "Password is required !";
    } else if (values.pass.length < 6) {
      errors.pass = "Password shouble be at least 6 characters !";
    }

    if (!values.role) {
      errors.role = "Role is required !";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      saveUser();
    }
  }, [formError]);

  return (
    <div className="styleObj1">
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center"><p className="styleObj">Sign Up Form</p></h3>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label> First Name: </label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <p style={{ color: "red", fontSize: 14 }}>
                    {formError.firstName}
                  </p>
                </div>
                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <p style={{ color: "red", fontSize: 14 }}>
                    {formError.lastName}
                  </p>
                </div>
                <div className="form-group">
                  <label> Mobile: </label>
                  <input
                    placeholder="Enter Mobile No"
                    name="mobile"
                    className="form-control"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  <p style={{ color: "red", fontSize: 14 }}>
                    {formError.mobile}
                  </p>
                </div>

                <div className="form-group">
                  <label> Email Id: </label>
                  <input
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <p style={{ color: "red", fontSize: 14 }}>
                    {formError.email}
                  </p>
                </div>

                <div className="form-group">
                  <label> Password: </label>
                  <input
                    placeholder="Enter Password"
                    name="pass"
                   // type="password"
                    inputMode="password"
                    className="form-control"
                    value={formData.pass}
                    onChange={handleChange}
                  />
                  <p style={{ color: "red", fontSize: 14 }}>{formError.pass}</p>
                </div>

                <div className="form-group">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "row",
                    }}
                  >
                    <label> Select Role:</label>
                    <div>
                      <input
                        type="radio"
                        name="ownerChecked"
                        className="btn btn-primary active"
                        value="Owner"
                        onChange={() => changeOwnerRoleHandler()}
                        checked={formData.ownerChecked}
                      />
                      <span style={{paddingLeft:"15px"}}>Owner</span>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="userChecked"
                        className="btn btn-primary active"
                        value="User"
                        onChange={() => changeUserRoleHandler()}
                        checked={formData.userChecked}
                      />
                      <span style={{paddingLeft:"15px"}}>User</span>
                    </div>
                  </div>
                  <p style={{ color: "red", fontSize: 14 }}>{formError.role}</p>
                </div>
                
                <button className="btn btn-success" style={{ width: "100%" }}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
