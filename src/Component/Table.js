import React from 'react'

const Table = () => {
    const [query, setQuery] = useState("");
    const keys=["first_name","last_name","email"]
    console.log(Users[0]["email"])
    const search=(data)=>{
        return data.filter(
            (item)=>
            item.first_name.toLowerCase().includes(query) ||
            item.last_name.toLowerCase().includes(query) ||
            item.email.toLowerCase().includes(query)
        );
    }
    
    console.log(Users.filter(user=>user.first_name.toLowerCase()))
  return (
    <div>
        <input type="text" placeholder="Search.." onChange={(e)=>setQuery(e.target.value)}
        />
        {/* <ul className="list">
            {Users.filter(user=>user.first_name.toLowerCase()).includes().map((user)=>{
                <li key={user.id} className="listItem">{user.first_name}</li>



            ))}
        </ul> */}



    </div>
  )
}

export default Table