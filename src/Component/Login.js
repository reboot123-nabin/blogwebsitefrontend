import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-regular-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import Email from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

import Header from "../CommonComponent/Header";
import Footer from "../CommonComponent/Footer";

import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
const Login = () => {
  const [ formErrors, setFormErrors ] = useState({});
  const [user, setUser] = useState({

    email: "",
    password: ""
  })

  const [isSubmit, setIsSubmit] = useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {

    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const navigate = useNavigate();


  const handleInput = (e) => {

    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }


  const validate = (values) => {

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;

  
  }

  const google = () => {
    window.open("http://localhost:5000/api/v1/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/api/v1/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/api/v1/facebook", "_self");
  };
  const loginform = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
   

  
    axios.post('http://localhost:5000/api/v1/login', user, {
      headers: {
        "Content-Type": 'application/json',
        'Accept': 'application/json'
      },
    })
      .then((res) => {
        setIsSubmit(true)
        localStorage.setItem('token', res.data.token)
   
        toast.success(res.data.message);
        setUser(res.data.user.name);
        console.log(res.data.user)
        setTimeout(() => {
          navigate('/profile')
        }, 3500)

          ;;
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid credentials!");
      })
    
  }


  useEffect(() => {
    console.log("form erors"+formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.group(user);
    }
  }, [formErrors]);



  return <div>
    <ToastContainer />

<Header/>

    <div class="loginform" >
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12 background">
            <h2 style={{ padding: '20px', color: 'White' }}>Educational Website</h2>

          </div>

          <div class="col-md-6 col-0">
            <h2 style={{ color: '#00428D', borderbottom: '2px solid #00428D' }} class="text-center">Login</h2>

            <form class="mt-5">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                          <input type="email" onChange={handleInput} name="email" value={user.email} className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                          


                <InputLabel htmlFor="standard-adornment-password">
                  Email
                </InputLabel>
                <Input className="form-control"
                  type="email"
                  onChange={handleInput} name="email" value={user.email} required
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <Email />
                      </IconButton>
                    </InputAdornment>
                  } />

                <p style={{color:'red'}}>{formErrors.email}</p>
              </div>



               <div clasclassNames="form-group">





                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input className="form-control"
                  type={values.showPassword ? "text" : "password"}
                  onChange={handleInput} name="password" value={user.password} required
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />

<p style={{color:'red'}}>{formErrors.password}</p>
              </div>
              <div className="form-check mt-3">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <div className="form-check mt-3 d-flex justify-content-center">
                <button type="submit" className="buttoncolor mt-4" style={{ background: '#35B500', color: 'white' }} onClick={loginform}>Login</button>
              </div>

              <p class="mt-5" style={{ color: 'rgb(183, 183, 183)' }}>Don't have an Account? <span style={{ color: '#35B500' }}><a href="/register">Create Account</a></span> it takes
                less than minute </p> 

            </form>




          </div>
        </div>
      </div>
    </div>
     <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div> 

<Footer/>
  </div>;
};

export default Login;
