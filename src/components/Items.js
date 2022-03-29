import React, { useContext, useEffect,useState } from "react";
import { CartContext } from "./Cart";
import axios from 'axios';
const Items = ({ id, description, title, img, price, quantity }) => {
  const[user,setUser]=useState([]);
    const { removeItem, increment, decrement } = useContext(CartContext);

    useEffect(()=>{
      axios.get('http://localhost:5000/api/v1/getproduct', {
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })
        .then(res => {
            setUser(res.data.product);
            console.log(res.data.product);
          
        })
        .catch(err => {
            console.log(err);
        });
    },[])

    
  return (
    <>
    {
      user.map((curElem)=>{
        const{title,description,img,quantity,price}=curElem;
          return(
            <>
            {/* <h1>{title}</h1>
            {description}
            <img src={img} alt="" />
            {price}
            {quantity} */}


            <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div> 
                        </>
          )
      })
    }


      

      <hr />
    </>
  );
};

export default Items;
