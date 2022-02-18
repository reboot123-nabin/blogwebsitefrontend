import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './CommonComponent/Header';
import Body from './Component/Body';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Profile from './Component/Profile';
import EditProfile from './Component/EditProfile';
import UserDetail from './Component/UserDetail';
import UpdateUser from './Component/UpdateUser';
import Error from './CommonComponent/Error';
import AddBlog from './Component/AddBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import PostBlog from './Component/PostBlog';
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      {/* <Header/> */}
      <Routes>
          <Route path="/" exact element={<Body/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/register" exact element={<SignUp/>}/>
          <Route path="/profile" exact element={<Profile/>}/>
       <Route path="/editprofile" exact element={<EditProfile/>}/>
       <Route path="/userdetail" exact element={<UserDetail/>}/>
       <Route path="/updateuser/:id" exact element={<UpdateUser/>}/>
       <Route path="/blog" exact element={<AddBlog/>}/>
       <Route path="/addblog" exact element={<PostBlog/>}/>
       <Route exact path="*" element={<Error/>}/>
        </Routes>

        
    </BrowserRouter>


      
    </div>
  );
}

export default App;
