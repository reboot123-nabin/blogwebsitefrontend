import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from "react-router-dom";
import Header from '../CommonComponent/Header';
import Footer from '../CommonComponent/Footer';
const EditProfile = () => {
    const [step, setStep] = useState(1);
    const [user, setuser] = useState({
        name: "",
        email: "",
       
    })
    const [password, setpassword] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })
    const passwordInput=(e)=>{
       
        const{name,value}=e.target;
        setpassword({...password,[name]:value})
    }
    const updatePassword = (e) => {
        e.preventDefault();

        axios.put('http://localhost:5000/api/v1/password/update', password, {
            headers: {

                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then((res) => {
                // setpassword(res.data.password);
                toast.success("you have successfully changed the password");
                console.log(res.data.password);
            })

            .catch((err) => {
                console.log(err);
                toast.error("failed to update password")
            })
    }

    const handleInput = (e) => {
     
        const { name, value } = e.target;
        setuser({ ...user, [name]: value })
    }
    const changePassword = () => {
        setStep(2);
    }
    const updateProfile = (e) => {
        e.preventDefault();

        axios.put('http://localhost:5000/api/v1/me/update', user, {
            headers: {

                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then((res) => {
                setuser(res.data.user);
                
                toast.success("you have updated profile data");
                console.log(res.data.user);
                setStep(1);
            })

            .catch((err) => {
                toast.error("unsuccessful profile data")
                console.log(err);
            })
    }
   
  
    const viewprofile = () => {
        axios.get('http://localhost:5000/api/v1/me', {
            headers: {

                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then((res) => {
                setuser(res.data.user);
                console.log(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {

       viewprofile();
    
      },[])
   
  
    return <div>
<ToastContainer/>
<Header/>
        <div className="profile-page">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10 mt-5 pt-5">
                        <div class="row z-depth-3">
                            <div class="col-sm-4 bg-info rounded-left">
                                <div class="card-block text-center text-white">
                                    <i class="fas fa-user-tie fa-7x mt-5"></i>
                                    <h2 class="font-weight-bold mt-4">{user.name}</h2>
                                    <p>Web Designer</p>

                                    <NavLink to="/profile"><i class="far fa-edit fa-2x mb-4"></i></NavLink>
                                </div>
                            </div>
                            <div class="col-sm-8 bg-white rounded-right">
                                <h3 class="mt-3 text-center">Information</h3>
                                <hr class="bg-primary mt-0 w-25" />
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="name" class="form-control" name="name" value={user.name} onChange={handleInput} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" class="form-control" name="email" value={user.email} onChange={handleInput} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                                        </div>
                                    </div>
                                </div>

                                <hr class="bg-primary" />
                                <div class="row d-flex justify-content-center">
                                    <button type="submit" className="btn-color mt-4" style={{ background: '#35B500', color: 'white', width: '80px' }} onClick={updateProfile} >Submit</button>
                                </div>
                                <h4 class="mt-3">Projects</h4>
                                {step === 1 && <>
                                <div class="row d-flex justify-content-center">
                                    <button type="submit" className="btn-color mt-4" style={{ background: '#35B500', color: 'white', width: '180px' }} onClick={changePassword} >ChangePassword</button>
                                </div>
                                </>}
                                <hr class="bg-primary" />
                               
                              
                                {step === 2 && <>
                                <div class="row">

                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Old Password</label>
                                        <input type="password" class="form-control" name="oldPassword" value={password.oldPassword} onChange={passwordInput} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                                    </div>
                                </div>


                                <div class="row">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">New Password</label>
                                        <input type="password" class="form-control" name="newPassword" value={password.newPassword} onChange={passwordInput} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Confirm Password</label>
                                        <input type="password" class="form-control" name="confirmPassword" value={password.confirmPassword} onChange={passwordInput} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                                    </div>
                                </div>

                                <div class="row d-flex justify-content-center">
                                    <button type="submit" className="btn-color mt-4" style={{ background: '#35B500', color: 'white', width: '180px' }} onClick={updatePassword} >UpdatePassword</button>
                                </div>
                                </>}
                            </div>
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
    <Footer/>
  </div >;
};

export default EditProfile;
