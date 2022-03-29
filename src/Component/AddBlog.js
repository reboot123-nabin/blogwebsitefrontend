import React,{useState,useEffect} from 'react'
import Header from '../CommonComponent/Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../CommonComponent/Footer';
import $ from 'jquery'; 
import {FaTwitter} from 'react-icons/fa'
import Result from "./Result";
import axios from 'axios';
const AddBlog = () => {

    const[img,setImg]=useState("");

    const inputEvent=(event)=>{
        const data=event.target.value;
        console.log(data);
        setImg(data);
    }
    const navigate =useNavigate();
    const[blog,setblog]=useState([]);
    const blogdata = () => {
        axios.get('http://localhost:5000/api/v1/viewpost', {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(res => {
                setblog(res.data.posts);
                console.log(res.data);
            
            })
            .catch(err => {
                console.log(err);
            });

    }
    const reply = (rep) => {
        console.log('hi');
        // debugger;
        var res = document.getElementById(rep);
        console.log(res);
        if (res.className == "replies") {
            res.className = "thapa_show";
            res.style.WebkitTransition = 'all 0.3s ease';
            // res.style.transition = 'all 0.3s ease';
            // console.log(thapa_show);
        } else if (res.className == 'thapa_show') {
            // res.className = " ";
            console.log('thapa show');
            res.className = "replies";
        }
    }

  
    window.onload=function(){
        const like = document.getElementById('like_btn');
        const singleClick = () => {
            like.style.fontWeight = 'bold';
            like.style.background = '#bbe1fa';
            like.style.color = '#1b262c';
            like.innerHTML = "✓ Liked";
        }
        const doubleClick = () => {
            like.style.fontWeight = 'normal';
            like.style.background = '#3282b8';
            like.style.color = '#fff';
            like.innerHTML = "Like";
        }
        var clickCount = 0;
        like.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 1) {
                var singleClickTimer = setTimeout(function() {
                    clickCount = 0;
                    singleClick();
                }, 400);
            } else if (clickCount === 2) {
                clearTimeout(singleClickTimer);
                clickCount = 0;
                doubleClick();
            }
        }, false);
        // show and hide the replies
        const reply = (rep) => {
            console.log('hi');
            // debugger;
            var res = document.getElementById(rep);
            console.log(res);
            if (res.className == "replies") {
                res.className = "thapa_show";
                res.style.WebkitTransition = 'all 0.3s ease';
                // res.style.transition = 'all 0.3s ease';
                // console.log(thapa_show);
            } else if (res.className == 'thapa_show') {
                // res.className = " ";
                console.log('thapa show');
                res.className = "replies";
            }
        }
    }
    


    useEffect(() => {
        blogdata()
    },[])
  return (
    <div>
        <Header/>
<div className="container">
    <div className="row">
        <div className="searchbar">
            <h1>Search Bar</h1>
                <input type="text" placeholder="search anything" value={img} onChange={inputEvent} />
                <Result name={img}/>
        
        </div>
        </div>
        </div>
        <div class="container-fluid ">
    <div class="row ">
    
        <div class="col-xl-10  col-lg-10 col-md-12 col-11 mx-auto my-5">
            <div class="row gx-5 mx-sm-auto">
               
                <div class="col-lg-8 col-md-11 col-11 mx-auto">
                    <div class="row gy-5 ">
                        <div class="col-12 card p-4 shadow blog_left__div">
                            <div class="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 ">
                                <h1 class="text-uppercase">Best Laptop in 2020</h1>
                                <p class="blog_title"> <span class="font-weight-bold"> Title description, </span> Aug 12, 2020 </p>
                            </div>
                            <figure class="right_side_img mb-5">
                                <img src="https://images.pexels.com/photos/3815750/pexels-photo-3815750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid shadow"/>
                            </figure>
                            {/* <p><span class="font-weight-bold">{name}</span> {message}</p> */}
                            <p>
                                Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            </p>
                            <div class="d-flex justify-content-between left_div_btns">
                                <div>
                                    <button class="left_div__like" id="like_btn"><i class="fa fa-thumbs-up"></i>Like</button>
                                </div>
                                <div>
                                    <button class="left_div__reply" onclick="reply('reply1')">Replies <badge class="bg-white text-dark p-2">1</badge></button>
                                </div>
                            </div>
                            <div class="replies" id="reply1">
                                <div class="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
                                    <div class=" reply_img mx-2 align-self-center ">
                                        <img src="https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png" />
                                    </div>
                                    <div class="reply_text__left">
                                        <p class="blog_title "> <span class="font-weight-bold"> Thapa, </span> Aug 12, 2020, 7:20 PM </p>
                                        <p>Awesome, Bro I love your content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
        blog.map((curElem)=>{
            const {name,title,date, replies,message } = curElem

            return(
                <>
        
                <div class="col-12 card p-4 shadow blog_left__div">
                            <div class="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 ">
                                <h1 class="text-uppercase">{title}</h1>
                                <p class="blog_title"> <span class="font-weight-bold">{date}  </span>  </p>
                            </div>
                            <figure class="right_side_img mb-5">
                                <img src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="img-fluid shadow"/>
                            </figure>
                            <p><span class="font-weight-bold">{name}</span> {replies}</p>
                            <p>
                                {message}
                            </p>
                            <div class="d-flex justify-content-between left_div_btns">
                                <div>
                                <button class="left_div__like" id="like_btn"><i class="fa fa-thumbs-up"></i>Like</button>
                                    
                                </div>
                                <div>
                                    
                                <button class="left_div__reply" onclick={reply('reply1')}>Replies <badge class="bg-white text-dark p-2">1</badge></button>
                                </div>
                            </div>
                            <div class="replies" id="reply2">
                                <div class="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
                                    <div class=" reply_img mx-2 align-self-center ">
                                        <img src="https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png" />
                                    </div>
                                    <div class="reply_text__left">
                                        <p class="blog_title "> <span class="font-weight-bold"> Vinod, </span> Aug 11, 2020, 7:20 PM </p>
                                        <p>I really like the way you teach. Subscribed :)</p>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
                                    <div class=" reply_img mx-2 align-self-center ">
                                        <img src="https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png" />
                                    </div>
                                    <div class="reply_text__left">
                                        <p class="blog_title "> <span class="font-weight-bold"> Thapa, </span> Aug 12, 2020, 7:20 PM </p>
                                        <p>Awesome, Bro I love your content.</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                </>
            )
        })
    }
                         
                    
                    
                    </div>
                </div>
             
                <div class="col-lg-3 col-md-7 col-11 justify-content-end m-lg-0 m-auto right_side">
                    <div class="row gy-5 left_div__blog">
                 
                        <div class="col-12 about_me_div shadow">
                            <p>Nabin Thapa Magar</p>
                            <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of website . I want to share my world with you.</p>
                        </div>
                      
                        <div class=" popular_post ">
                            <div class="right_div__title py-4 pl-2 ">
                                <h2>Popular Posts</h2>
                            </div>
                            <div class="right_sub__div shadow">
                                <div class="row ">
                                    <div class="col-3  popular_post__img1 py-2 pl-2">
                                    </div>
                                    <div class="col-9">
                                        <h3>Bill Gates</h3>
                                        <p class="text-capitalize" style={{color: '#6c757d'}}>CEO Microsoft</p>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-3  popular_post__img2 py-2 pl-2">
                                    </div>
                                    <div class="col-9">
                                        <h3>Mark Zuckerberg </h3>
                                        <p class="text-capitalize" style={{color: '#6c757d'}}>Programmer</p>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-3  popular_post__img3 py-2 pl-2">
                                    </div>
                                    <div class="col-9">
                                        <h3>Jeff Bezos</h3>
                                        <p class="text-capitalize" style={{color: '#6c757d'}} >Amazon</p>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-3  popular_post__img4 py-2 pl-2">
                                    </div>
                                    <div class="col-9">
                                        <h3>Steve Jobs</h3>
                                        <p class="text-capitalize" style={{color: '#6c757d'}}>Apple</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                        <div class="right_div_post">
                            <div class="right_div__title py-4 pl-2 ">
                                <h2>Advertise</h2>
                            </div>
                            <div class="right_sub__div ">
                                <div class="adevetise_img bg-light shadow">
                                    <p>Ads goes here</p>
                                </div>
                            </div>
                        </div>
                       
                        <div class=" right_div_post">
                            <div class="right_div__title py-4 pl-2 ">
                                <h2>Tags</h2>
                            </div>
                            <div class="tags_main right_sub__div">
                                <a href="https://youtu.be/5p8e2ZkbOFU" target="_thapa" class="badge shadow text-capitalize text-black text-decoration-none"> html </a>
                                <a href="#" class="badge shadow text-capitalize text-black text-decoration-none"> css </a>
                                <a href="#" class="badge shadow text-capitalize text-black text-decoration-none"> js </a>
                                <a href="#" class="badge shadow text-capitalize text-black text-decoration-none"> react </a>
                                <a href="#" class="badge shadow text-capitalize text-black text-decoration-none"> vue </a>
                                <a href="#" class="badge shadow text-capitalize text-black text-decoration-none"> php </a>
                                <a href="#" class="badge shadow text-capitalize text-black text-decoration-none"> python </a>
                                <a href="#" class="badge shadow text-capitalize text-black text-decoration-none"> kotlin </a>
                                <a href="#" class="badge shadow text-capitalize text-black text-decoration-none"> c++ </a>
                                <a href="#" class="badge shadow text-capitalize text-black text-decoration-none"> java </a>
                            </div>
                        </div>
                   
                        <div class=" right_div_post">
                            <div class="right_div__title py-4 pl-2 ">
                                <h2>Inspiration</h2>
                            </div>
                            <div class="right_sub__div">
                                <div class="row gx-3">
                                    <div class="col-6">
                                        <figure>
                                            <img src="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" class="img-fluid shadow"/>
                                        </figure>
                                    </div>
                                    <div class="col-6">
                                        <figure>
                                            <img src="https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid shadow"/>
                                        </figure>
                                    </div>
                                    <div class="col-6">
                                        <figure>
                                            <img src="https://images.pexels.com/photos/38547/office-freelancer-computer-business-38547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid shadow"/>
                                        </figure>
                                    </div>
                                    <div class="col-6">
                                        <figure>
                                            <img src="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" class="img-fluid shadow"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <div class=" right_div_post">
                                    <div class="right_div__title py-4 pl-2 ">
                                        <h2>Follow Me</h2>
                                    </div>
                                    <div class="right_sub__div d-flex justify-content-around">
                                        <a href="#"> <i class="fab fa-facebook-square fa-3x text-black"></i></a>
                                        <a href="#"> <i class="fab fa-3x fa-instagram text-black"></i></a>
                                        <a href="#"> <i class="fab fa-3x fa-github-square text-black" ></i> </a>
                                        <a href="#"> <i class="fab fa-3x fa-twitter-square text-black"></i></a>
                                        <a href="#"> <i class="fab fa-3x fa-youtube-square text-black"></i> </a>
                                        <a href="#"> <i class="fab fa-3x fa-linkedin text-black"></i></a>
                                    </div>
                                </div>
                        <div class=" right_div_post">
                            <div class="right_div__title py-4 pl-2 ">
                                <h2>Subscribe</h2>
                            </div>
                            <div class="right_sub__div">
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Enter your e-mail below and get notified on the latest blog posts.</label>
                                        <input type="email" class="form-control mt-2" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                    </div>
                                    <div class="col-12">
                                        <button class="subs_btn d-block" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 

<Footer/>
    </div>
  )
}

export default AddBlog