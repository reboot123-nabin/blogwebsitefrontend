import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom'
import Header from '../CommonComponent/Header';
import Footer from '../CommonComponent/Footer';
import { withTheme } from '@material-ui/core';
const UpdateUser = () => {

    const { id } = useParams();
    const [user, setUser] = useState({
        email: "",
        name: "",
        role: ""
    });

    const userdata = () => {
        axios.get('http://localhost:5000/api/v1/singleuser/' + id, {
            headers: {

                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(res => {
                setUser(res.data.user);
                console.log(res.data.user);

            })
            .catch(err => {
                console.log(err);

            });

    }
    const handleInputs = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });


 
    
    }

    const updatedata = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5000/api/v1/user/update/' + id, user,{
            headers: {

                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then((res) => {
                console.log(res.data.user);

                toast.success("You have successfully updated user!");
                setTimeout(() => {
                    window.location.reload(false)
                }, 1500)
            })
            .catch((err) => {
                console.log(err);
                toast.error("update failed");
            })
    }
    useEffect(() => {
        userdata();
    },[])

    return <div>

        <Header/>
        
<div class="d-flex" id="wrapper">


     <div id="page-content-wrapper">
   
        <div class="container-fluid px-4">
         

             <div class="row my-5">
                 <h3 class="fs-4 mb-3">Recent Orders</h3>
                 <div class="col">
             
                 <h1>{user.name}</h1>
        {user.email}
        {user.role}
        <div className="addquizbox "  >
            <ToastContainer />
            <div className="container">
                <div className="row">
                    <form className="mx-auto" style={{ width: '50%',background:'white' }}>
                        <h3 className="d-flex justify-content-center createheadline">Update User details</h3>
                        <hr className="w-50 mx-auto " />
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="text" className="form-control" name="email"
                                id="exampleInputEmail1" value={user.email} onChange={handleInputs}
                                aria-describedby="emailHelp" placeholder="Enter email" required="true" />

                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" name="name"
                                id="exampleInputEmail1" value={user.name} onChange={handleInputs}
                                aria-describedby="nameHelp" placeholder="Enter name" required="true" />

                        </div>

                        <div className="form-group">
                            <label for="exampleInputEmail1">Role</label>
                            <input type="text" className="form-control" name="role"
                                id="exampleInputEmail1" value={user.role} onChange={handleInputs}
                                aria-describedby="emailHelp" placeholder="Enter role" required="true" />

                        </div>

                        <button type="submit" className=" mt-3 btn btn-success btn_quiz"
                            onClick={updatedata} >Update User</button>
                    </form>
                </div>
            </div>
        </div>


                 </div>
             </div>

         </div>        </div>
 </div>

        <Footer/>


    </div>;
};

export default UpdateUser;
