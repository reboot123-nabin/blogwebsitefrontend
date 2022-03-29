import React,{useState} from 'react'
import data from './data';

import Header from '../CommonComponent/Header';
import Footer from '../CommonComponent/Footer';
import Model from './Model';
const SearchReact = () => {
    const[model,setModel]=useState(false);
    const[tempdata,setTempData]=useState([]);
    const[noOfElement,setnoOfElement]=useState(4);
    const slice=data.cardData.slice(0,noOfElement);
    const getData=(img,title,desc)=>{
        let template=[img,title,desc];
        setTempData(item=>[1,...tempdata]);
        console.log(template);
        return setModel(true);
    }
 
    // const slice2=data.carddata.slice(0,noOfElement);
    const loadMore=()=>{
        setnoOfElement(noOfElement+noOfElement);
    }
    const[filter,setFilter]=useState('');
    const searchText=(event)=>{
        setFilter(event.target.value);
    }
    let dataSearch=data.cardData.filter(item=>{
        return Object.keys(item).some(key=> 
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            ) 
        
    });


  return (
    <div>
        <Header/>
        <section className="py-4 py-lg-5 container">
           
          
         <section className="py-4 py-lg-5 container">
            <div className="row justify-content-center">
                        
                      
                
                
                <div className="col-12 mb-5">
                        <div className="mb-3 col-4 mx-auto text-center">
                        <label htmlFor="" className="form-table h4">Search</label>
                        <input type="text" className="form-control" value={filter} onChange={searchText.bind(this)} />
                
                            </div>


                    </div>
                    {dataSearch.map((item,index)=>{
                        return(
                <div className="col-sm-4 col-md-4 col-lg-3 mx-0 mb-4">
                    <div className="card p-0 overflow-hidden h-100 shadow">
                        <img src={item.img} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card">{item.title}</h5>
                            <p className="card-text">{item.desc}</p>
                            <button className="btn btn-primary" onClick={()=>getData(item.img,item.title,item.desc)}>Open </button>



                            </div>    
                    </div>    
                </div> 







                        )  
            })} 
            </div>
            <button className='btn btn-dark d-block w-100' onClick={()=>loadMore()}>
                Load More
            </button>

            </section>

            </section>
            {
                model===true ?   <Model img={tempdata[1]} title={tempdata[2]} desc={tempdata[3]} hide={()=>setModel(false)}/>: ''
            }
          
            <Footer/>
    </div>
  )
}

export default SearchReact