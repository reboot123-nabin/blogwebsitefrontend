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
import Search from './Component/Search';

import UseRef from './Component/UseRef';

import CallBack from './Component/CallBack';
import SResult from './Component/SResult';
import RefHook from './ReactHook/RefHook';
import SearchTable from './Component/SearchTable';
import SearchReact from './Component/SearchReact';
import Cart from "./components/Cart";
import TodoApp from './TodoApp';
import Upload from './CommonComponent/Upload';

function App() {

  return (
    <>
    
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
       <Route path="/search" exact element={<Search/>}/>
       <Route exact path="*" element={<Error/>}/>
       <Route path="/sresult" exact element={<SResult/>}/>
       {/* <Route exact path="/useref" element={<UseRef/>}/> */}
      
       <Route exact path="/callback" element={<CallBack/>}/>
     
      <Route path="reference" exact element={<RefHook/>}/>
      <Route path="/usecallback" element={<useCallBack/>}/>
      <Route path="/filtertable" element={<SearchTable/>}/>
       <Route path="/searchreact" element={<SearchReact/>}/>
        <Route path="/todoapp" element={<TodoApp/>}/> 
         <Route path="/cart" element={<Cart/>}/>  
         <Route path="/upload" exact element={<Upload/>}/>
</Routes>
        
    </BrowserRouter>


      
    </>
  );
}

export default App;
