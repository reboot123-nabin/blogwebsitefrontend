import React,{useState,useEffect} from 'react';
import Header from '../CommonComponent/Header'
import Footer from '../CommonComponent/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { useNavigate ,NavLink} from 'react-router-dom';
import "aos/dist/aos.css";
import AOS from "aos";
const Body = () => {
    const navigate=useNavigate();
    const[user,setuser]=useState({
        fullname:'',
        phone:'',
        email:'',
        message:''
    });

    
  const addContact=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:5000/api/v1/add/contact",user)
      .then(res=>{
        toast.success(res.data.message)
        console.log(res);
      })
      .catch(err=>{
        toast.error("added failed")
      })
  }

  const handleInput=(e)=>{
      e.preventDefault();
      const{value,name}=e.target
      setuser({...user,[name]:value})
  }

  useEffect(() => {
        
    AOS.init({
      duration : 2000
    });
  }, []);


  window.onload=function(){
    const texts=["hello i am nabin","welcome to my website","Do you want to enroll our course"];
    let count=0;
    let index=0;
    let currentText='';
    let letter='';
    (function type(){
    if(count===texts.length){
        count=0;
    }
    currentText=texts[count];
    letter=currentText.slice(0,++index);
    document.querySelector(".typing").textContent=letter;
    if(letter.length===currentText.length){
        count++;
        index=0;
    }
setTimeout(type,200);


})();
    
    




}



  return (
    <div>
     
         <ToastContainer/>
       
          <section id="header">
          <Header/>
        <section class="header-section">
         
         <div class="center-div">
                          <p style={{fontsize:'35px',fontweight: 'bold',color: 'white'}}>Hello, My name is</p>
                          <h1 style={{fontsize:'70px',fontweight: 'bold'}}>Nabin Thapa Magar</h1>
                          <h1 style={{fontSize:'35px',fontweight: 'bold'}}>I am </h1><h1 class=" text-center typing" style={{fontweight:'bold',fontsize:'60px',color:'rgba(235, 200, 0, 0.911)'}}></h1>
                         
                   <button class="btn btn-primary">Hire me</button>
       
              </div>     

              <section id="sec-1">
                  <div class="container">
                    <a href="#servicediv">
                      <div class="scroll-down mx-auto"></div>
                    </a>
                  </div>
                </section>


           
          
  </section>
  </section>

<section class="serviceoffers mt-5" id="servicediv">
    <div class="container headings text-center">
        <h1 class="text-center" style={{fontsize: '35px',fontfamily: 'Playfair Display'}}>
            What Do We Offer
        </h1>

    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6 col-10 offset-1 offset-lg-0"  data-aos={'fade-left'}>
                <div class="names my-3">
                    <h1>html</h1>
                    <div class="progress w-75">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '100%'}}>
                        100%
                    </div>
                </div>
                </div>
                <div class="names my-3">
                    <h1>CSS</h1>
                    <div class="progress w-75">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width: '90%'}}>
                        90%
                    </div>
                </div>
                </div>
                <div class="names my-3">
                    <h1>ReactJS</h1>
                    <div class="progress w-75">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width: '70%'}}>
                            70%
                        </div>
                    </div>
                </div>
                <div class="names my-3">
                    <h1>NODEJS</h1>
                    <div class="progress w-75">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width: '60%'}}>
                            60%
                        </div>
                    </div>
                </div>
                <div class="names my-3">
                    <h1>UI/UX Design</h1>
                    <div class="progress w-75">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width: '60%'}}>
                            60%
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-12 servicediv" data-aos={'fade-right'} >
                <div class="row">
                    <div class="col-lg-2 col-2 service-icons">
                        <i class="fa fa-heart fa-3x " aria-hidden="true">

                        </i>
                        
                    </div>

                    <div class="col-lg-10 col-10">
                        <h2>Website Development</h2>
                        <p>passionate about web development and hopes to learn more</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2 col-2 service-icons">
                        <i class="fa-3x fa fa-desktop" aria-hidden="true">                        </i>
                      
                    </div>
                    
                    <div class="col-lg-10 col-10">
                        <h2>Website Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tenetur molestiae, corporis delectus iste nulla in minus atque quasi ab nam omnis. Animi id perspiciatis, deserunt exercitationem corporis aut qui.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2 col-2 service-icons">
                        <i class="fa-3x fa fa-phone" aria-hidden="true">
                            
                        </i>
                        
                    </div>

                    
                    <div class="col-lg-10 col-10">
                        <h2>Website Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tenetur molestiae, corporis delectus iste nulla in minus atque quasi ab nam omnis. Animi id perspiciatis, deserunt exercitationem corporis aut qui.</p>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</section>


  



<div id="contact">

<div class="container">
    <div class="content">
      <div class="left-side">
        <div class="topic-text">Our Location</div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d393.43526914434494!2d85.3068999847664!3d27.688584043753625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d27.688566899999998!2d85.30713879999999!4m3!3m2!1d27.6885056!2d85.3069525!5e0!3m2!1sen!2snp!4v1641989063278!5m2!1sen!2snp" width="300" height="350" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe> 
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="enter your fullname" name="fullname" value={user.fullname} onChange={handleInput} />
        </div>
        <div class="input-box">
          <input type="email" placeholder="Enter your email" name="email" value={user.email} onChange={handleInput}/>
        </div>
        <div class="input-box">
          <input type="number" placeholder="enter your phone" name="phone" value={user.phone} onChange={handleInput} />
        </div>
        <div class="input-box message-box">
          <textarea name="message" value={user.message} onChange={handleInput} placeholder="Enter your message"></textarea>
        </div>
        <div class="button">
          <input type="button"  onClick={addContact} value="Send Now"/>
        </div>
      </form>
    </div>
    </div>
  </div>


</div>  

  





<Footer/>



</div>
  )
}

export default Body