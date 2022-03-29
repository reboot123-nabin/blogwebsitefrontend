import React from 'react'
import {useCart} from "react-use-cart";


const ItemCard = (props) => {
    const{addItem}=useCart();

    return (
    <div>
        <div className="col-11 col-md-6 col-lg-3 mx-0">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} class="card-img-top img-fluid" alt="" />
                    <div className="card-b">
                       <h5 className="card-title">
                           <h5 className="card-title">{props.title}</h5>
                            <h5 className="card-title">${props.price}</h5>
                            <p className="card-text">{props.desc}</p>
                           </h5> 

                           <p className="card-text">{props.desc}</p>
                           <button className="btn btn-success" onClick={addItem(props.item)}>Add To Cart</button>

                        </div>
                </div>
            
            </div>

    </div>
  )
}

export default ItemCard