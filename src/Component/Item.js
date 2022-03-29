import React from 'react'
import data from "./data";
import ItemCard from "./Itemcard";
const Item = () => {
    console.warn(data.data)

  return (
    <div>
        <h1 className="text-center mt-3">All Items</h1>
        <section className="py-4 container">
            <div className="row justify-content-center">
                {data.cardData.map((item,index)=>{
                    return(
                        <ItemCard img={item.img}
                         title={item.title} 
                         desc={item.desc} 
                         price={item.price}
                          item={item} 
                          key={index}/> 
                    )
                })} 
                   
                </div>
            
            </section>




    </div>
  )
}

export default Item;