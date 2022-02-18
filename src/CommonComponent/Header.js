import React,{useState,useEffect} from 'react';
import { Dropdown } from 'react-bootstrap';

import { useNavigate ,NavLink} from 'react-router-dom';
import axios from 'axios';


const Header = () => {

    const navigate=useNavigate();
    const[user,setuser]=useState({
        name:"",
        email:"",
        phone:""
    })
    const logout=()=>{
        localStorage.removeItem('token');
        navigate('/');
    }
    
    const viewprofile=()=>{
        axios.get('http://localhost:5000/api/v1/me',{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
        .then((res)=>{
            setuser(res.data.user)
        })  
        .catch((err)=>{
            console.log(err);
        })
    }
    
    useEffect(()=>{
        viewprofile()
    },[])
  return (
    <div>
    
        <nav class="navbar navbar-expand-lg navbar-dark">
            <img src="/smile.png" alt="logo" class="logodesign" />
            <p class="logo mx-4">FUNNY DAY</p>
        
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="/" style={{color:'#f8f8ff'}}>Home</a>
                    </li>
                    <li class="nav-item mx-3" >
                        <a class="nav-link " href="#servicediv" style={{color:'#f8f8ff'}}>SERVICES</a>
                    </li>
    
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="#contact" style={{color:'#f8f8ff'}}>CONTACT</a>
                    </li>
                 
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="/blog" style={{color:'#f8f8ff'}}>BLOG</a>
                    </li>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      

       {
                          localStorage.getItem('token') ? (
      
                              <>
                                <Dropdown style={{ maxHeight: "50px" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {user.email}
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={logout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
                              </>
      
                          ) : (
                              <Dropdown>
                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Login
                              </Dropdown.Toggle>
                            
                              <Dropdown.Menu>
                                <Dropdown.Item href="/login">Login</Dropdown.Item>
                                <Dropdown.Item href="/register">Register</Dropdown.Item>
                                <Dropdown.Item href="/profile" >Profile</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                              
      
      
                          )
                      } 
                    </ul> 
                </div>
                
                </ul>
              
            </div>
    
        </nav> 


        
     
  

 

 

    </div>
  )
}

export default Header