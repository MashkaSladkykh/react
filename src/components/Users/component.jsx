import React, { useEffect, useState} from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(users => setUsers(users))
  },[])

  return (
    <div className="Wrapper">
      <ul className="Users">
        {users.map(({id, name}) => {
          return (<li key={id} style={{listStyleType:"none", marginBottom:"5px"}}>
            <Link to={`/users/${id}`} style={{textDecoration:"none"}}>{name}</Link>
          </li>)
        })}
      </ul>
    <Outlet/>
    </div>
  )
  
}

export default Users;