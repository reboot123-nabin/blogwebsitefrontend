import {useEffect,useState} from "react";

import axios from "axios";

const Search=()=>{
    const[query,setQuery]=useState("");
    const[data,setData]=useState([]);

 
    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`http://localhost:5000/search?q=${query}`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });
          setData(res.data);
        };
        if (query.length === 0 || query.length > 2) fetchData();
      }, [query]);


    return(
        <>
          <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      {<table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>}
        </>
    );
};

export default Search;