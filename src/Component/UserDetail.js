import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../CommonComponent/Footer';
import Header from '../CommonComponent/Header';
const UserDetail = () => {
    const navigate =useNavigate();
    const[searchTerm,setSearchTerm]=useState("");
    const [user, setUser] = useState([]);
    const deletequiz = (id) => {
        axios.delete("http://localhost:5000/api/v1/user/delete/"+id,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
        .then(res=>{
            
            toast.success("You have successfully deleted user!");
            setTimeout(() => {
                window.location.reload(false)
            }, 1500)
        })
        .catch(res=>{
            toast.error("Delete failed");
        })
    }


    const userdata = () => {
        axios.get('http://localhost:5000/api/v1/getallusers', {
            headers: {

                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(res => {
                setUser(res.data.users);
                console.log(res.data.users);
                if(res.data.user.role!='admin'){
                    navigate('/')
                }
            })
            .catch(err => {
                console.log(err);
            });

    }




    useEffect(() => {
        userdata()
    },[])

    return <div>
<ToastContainer/>

     <Header/>
        <input type="text" placeholder="Search.." className="form-control" style={{marginTop:50,marginBottom:20,width:"40%"}} 
        
        onChange={(e)=>{
            setSearchTerm(e.target.value);
        }}/>
        <table class="table-design">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Delete</th>
                    <th>Update</th>
                 
                </tr>
            </thead>
            <tbody>
            
            {
            user.filter(val=>{
                if(searchTerm===""){
                    return val;
                }
                else if(
                    val.email.toLowerCase().includes(searchTerm).toLowerCase() ||
                    val.name.toLowerCase().includes(searchTerm).toLowerCase() ||
                    val.phone.toLowerCase().includes(searchTerm).toLowerCase() ||
                    val.role.toLowerCase().includes(searchTerm).toLowerCase()
                ){
                    return val;
                }
            }).map((curElem) => {
                const {_id,email, name,role, phone } = curElem
                return (
                    <>
                        <tr>
                    <td data-label="S.No"> {email}</td>
                    <td data-label="S.No">  {name}</td>
                    <td data-label="S.No"> 
                    {phone}</td>
                    <td data-label="S.No"> {role}</td>
                    <td data-label="Name"><button className="btn btn-danger delete" onClick={() => deletequiz(_id)}>Delete</button></td> 
                    <td data-label="Name"> <NavLink className="btn btn-primary "
                                                    to={'/updateuser/' + _id}>Update</NavLink></td>
                        </tr>

                    </>


                )
            })
        }
               
            
            </tbody>
        </table>

        <Footer/>
    </div>;
};

export default UserDetail;
