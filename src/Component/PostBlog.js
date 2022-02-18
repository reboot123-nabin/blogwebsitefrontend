import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from'../CommonComponent/Header';
import Footer from '../CommonComponent/Footer';
const PostBlog = () => {
    const {navigate}=useNavigate();
 
    const [post, setPost] = useState({
        name: "",
        replies: "",
        message:"",
        title:"",
        date:""
      })
      const handleInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
      }
    const submitdata=(e)=>{
        e.preventDefault();      
        axios.post('http://localhost:5000/api/v1/addPost', post )
          .then((res) => {
            toast.success(res.data.message);
            setPost(res.data.post);
            console.log(res.data.post);
            setTimeout(() => {
              navigate('/blog')
            }, 3500)
    
        
          })
          .catch((err) => {
            console.log(err);
            toast.error("Invalid credentials!");
          })
        
    }
  return (
    <div>
        <ToastContainer/>
        <Header/>
        <section className="container-fluid">
            <section className="row">
     <div className="formgroup" style={{height:"200px;"}}>
     <form >
  <div class="form-group row">
    <label for="staticEmail"   class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" name="name" onChange={handleInput} value={post.name} readonly class="form-control-plaintext" id="staticEmail" placeholder="enter name"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail"  class="col-sm-2 col-form-label">Replies</label>
    <div class="col-sm-10">
      <input type="text" name="replies" onChange={handleInput} value={post.replies} readonly class="form-control-plaintext" id="staticEmail" placeholder="enter replies"/>
    </div>
  </div>
 
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Message</label>
    <div class="col-sm-10">
    <textarea name="title" name="message" onChange={handleInput} value={post.message} className="form-control" placeholder="enter message">
</textarea>
    </div>
  </div>


  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
      <input type="text" name="title" onChange={handleInput} value={post.title} class="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div>
  
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Date</label>
    <div class="col-sm-10">
      <input type="date" name="date" onChange={handleInput} value={post.date} class="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary" onClick={submitdata}>Submit</button>
</form>




</div>
</section>
</section>
<Footer/>
    </div>
  )
}

export default PostBlog