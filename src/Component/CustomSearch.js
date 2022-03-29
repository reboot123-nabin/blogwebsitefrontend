import React,{useState,useEffect} from 'react'

const CustomSearch = () => {
    const[userData,setUserData]=useState([]);
    const[userSearchData,setUserSearchData]=useState([]);
    const[name,setName]=useState('');
    const[profession,setProfession]=useState('');
    useEffect(()=>{
        const data=[
            {name:"manoj",age:"29",profession:"SE"},
            {name:"Virat",age:"32",profession:"Batsman"},
            {name:"Rohit",age:"28",profession:"Batsman"},
            {name:"Shami",age:"31",profession:"Bowler"},
            {name:"Batman",age:"30",profession:"Bowler"}
        ]
        setUserData(data);
        setUserSearchData(data);
    })
    const handleSearch=()=>{
        dedugger
        const newData=userData
        .filter(x=>x.name== (name==''?x.name:name))
        .filter(y=>y.profession==(pro))
        setUserSearchData(newData);
    }
  return (
    <div>
        <input className="form-control" type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)} />
        
        <select className="form-control">
            <option value="">Select</option>
            <option value='Batsman'>Batsman</option>
            <option value='SE'>SE</option>
            <option value="Bowler">Browler</option>

            </select>
        
        
        <button className="btn btn-primary" onClick={()=>handleSearch()}>Search</button>



    {
        userSearchData && userSearchData.length>0?
        userSearchData.map(item=>
            <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.profession}</td>
            </tr>
            )
            :'No data'
    }
    </div>
  )
}

export default CustomSearch