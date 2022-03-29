import React,{useState} from 'react'
import MockData from "../MOCK_DATA.json";
const SearchTable = () => {
    const[searchTerm,setsearchTerm]=useState("");
  return (
    <div>
        <input type="text" onChange={(e)=>{
            setsearchTerm(e.target.value);
        }} />
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
            {
                MockData.filter(val=>{
                    if(searchTerm===""){
                        return val;
                    }
                    else if(
                        val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.gender.toLowerCase().includes(searchTerm.toLowerCase()) 
                        ){
                        return val;
                    }
                }).map((m)=>(
                    <tr key={m.id}>
                    <td>{m.first_name}</td>
                    <td>{m.last_name}</td>
                    <td>{m.email}</td>
                    <td>{m.gender}</td>
                    </tr>
                ))
            }
                </tbody>
        </table>



    </div>
  )
}

export default SearchTable