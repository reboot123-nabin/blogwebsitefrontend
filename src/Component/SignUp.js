import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import Person from "@material-ui/icons/Person";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import Header from '../CommonComponent/Header';
import Footer from '../CommonComponent/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
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
  
  const navigate= useNavigate();
    const[user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })
    
    const handleInput=(e)=>{
        
        const{name,value}=e.target;
        setUser({...user,[name]:value});
    
    
    }
    
        const registerform=(e)=>{
            e.preventDefault();
            axios.post('http://localhost:5000/api/v1/register',user)
            .then((res)=>{
                setUser(res.data.user.name);
    
                console.log(res.data.user)
              toast.success("you have successfully regitered")
                setTimeout(()=>{
                  navigate('/login')
              },3500)
            })
            .catch((err)=>{
              toast.error("registration failed")
                console.log(err);
            })
            
        }
  return <div>

      <ToastContainer/>
      <Header/>
<div class="loginform" >
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-12 background">
                    <h2 style={{padding:'20px', color:'White'}}>Educational Website</h2>

                </div>

                <div class="col-md-6 col-0">
                    <h2 style={{color:'#00428D',borderbottom:'2px solid #00428D'}} class="text-center">Register</h2>

                   
                    <form class="mt-5">
                    <div className="form-group">
                       
                          <InputLabel htmlFor="standard-adornment-password">
        Email
      </InputLabel>
      <Input className="form-control"
        type="email"
        onChange={handleInput} name="email" value={user.email}
        endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <Email/>
              </IconButton>
            </InputAdornment>
          }
      />
                        </div>


                        <div className="form-group">
                       
                          <InputLabel htmlFor="standard-adornment-password">
        Phone
      </InputLabel>
      <Input className="form-control"
        type="number"
        onChange={handleInput} name="phone" value={user.phone}
        endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <Phone/>
              </IconButton>
            </InputAdornment>
          }
      />
                        </div>
                        <div className="form-group">
                         
                          <InputLabel htmlFor="standard-adornment-password">
        Name
      </InputLabel>
      <Input className="form-control"
        type="text"
        onChange={handleInput} name="name" value={user.name}
        endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <Person/>
              </IconButton>
            </InputAdornment>
          }
      />
                        </div>
                        <div clasclassNames="form-group">
                        
                          
      <InputLabel htmlFor="standard-adornment-password">
        Password
      </InputLabel>
      <Input className="form-control"
        type={values.showPassword ? "text" : "password"}
        onChange={handleInput} name="password" value={user.password}
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
                        
                        </div>
                        <div className="form-check mt-3">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div className="form-check mt-3 d-flex justify-content-center">
                        <button type="submit" className="buttoncolor mt-4" style={{background:'#35B500',color:'white'}} onClick={registerform}>Register</button>
                        </div>
                        <p class="mt-5" style={{color:'rgb(183, 183, 183)'}}>Already have an Account? <span style={{color:'#35B500'}}><a href="/login">Login Account</a></span>  </p>
                      </form>
                </div>
            </div>
        </div>
    </div> 
<Footer/>
  </div>;
};

export default SignUp;
