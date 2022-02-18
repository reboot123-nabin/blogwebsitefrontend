import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {NavLink} from "react-router-dom";
import Footer from '../CommonComponent/Footer';
import Header from '../CommonComponent/Header';
const Profile = () => {

const[name,setname]=useState('');

const[email,setemail]=useState('');

const[phone,setphone]=useState('');

useEffect(()=>{

	axios({
		method: 'GET',
		url: 'http://localhost:5000/api/v1/me',
		headers: {
		  "Content-Type": "application/json",
		  'Authorization': `Bearer ${localStorage.getItem('token')}`
	  },  
		
	  }).then(res => {
		  // console.log(res.data.products);
		  setname(res.data.user.name);
		  setphone(res.data.user.phone);
		  setemail(res.data.user.email);
	  })
},[]);







  return <>

<Header/>
<div className="profile-page">
<div class="container">
     	<div class="row d-flex justify-content-center">
            <div class="col-md-10 mt-5 pt-5">
             	<div class="row z-depth-3">
                 	<div class="col-sm-4 bg-info rounded-left">
        		        <div class="card-block text-center text-white">
                		    <i class="fas fa-user-tie fa-7x mt-5" > </i>
                    		<h2 class="font-weight-bold mt-4">{name}</h2>
                    		<p>Web Designer</p>
							<NavLink to="/editprofile"><i class="far fa-edit fa-2x mb-4"></i></NavLink>
							<div className="row">
							<NavLink className="btn btn-primary" to="/addblog">AddBlog</NavLink>
							<NavLink className="btn btn-success" to="/userdetail">View UserDetail</NavLink>
							</div>
						</div>
            		</div>
            		<div class="col-sm-8 bg-white rounded-right">
                    	<h3 class="mt-3 text-center">Information</h3>
                    	<hr class="bg-primary mt-0 w-25"/>
                   		<div class="row">
                        	<div class="col-sm-6">
                            	<p class="font-weight-bold">Email:</p>
                           		<h6 class=" text-muted">{email}</h6>
                        	</div>
                        	<div class="col-sm-6">
                            	<p class="font-weight-bold">Phone:</p>
                           		<h6 class="text-muted">{phone}</h6>
                        	</div>
                    	</div>
                    		<h4 class="mt-3">Projects</h4>
                    		<hr class="bg-primary"/>
                   		<div class="row">
                        	<div class="col-sm-6">
                           		<p class="font-weight-bold">Recent</p>
                          	  	<h6 class="text-muted">School Web</h6>
                        	</div>
                        	<div class="col-sm-6">
                            	<p class="font-weight-bold">Most Viewed</p>
                            	<h6 class="text-muted">Dinoter husainm</h6>
                        	</div>
                    	</div>
					
                	   	<hr class="bg-primary"/>
                	    <ul class="list-unstyled d-flex justify-content-center mt-4">
            	        	<li><a href="#!"><i class="fab fa-facebook-f px-3 h4 text-info"></i></a></li>
        	            	<li><a href="#!"><i class="fab fa-youtube px-3 h4 text-info"></i></a></li>
    	                	<li><a href="#!"><i class="fab fa-twitter px-3 h4 text-info"></i></a></li>
	               		</ul>  
              		</div>
             	</div>
            </div>
        </div>
	</div>
    </div>
	<Footer/>
  </>
  
};

export default Profile;
