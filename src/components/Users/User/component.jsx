import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import  "./styles.scss";

const User = () => {
  const {userId} = useParams();
  console.log (userId)
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/` + userId)
    .then(data => data.json())
    .then(user => {setUser(user)})}, [userId])

    console.log(user)
    const {email, name, phone, website} = user;


    return (
      <article className="User" style={{border:"1px, solid, black"}}>
        <h2 className="User-name">{name}</h2>
        <a href={email} className="User-mail">{email}</a>
        <p>
          <a href={phone} className="User-phone">{phone}</a>
        </p>
        <p>
          <a href={website} className="User-website">{website}</a>
        </p>
      </article>
    )
  }

export default User;


// "id": 1,
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "address": {
//   "street": "Kulas Light",
//   "suite": "Apt. 556",
//   "city": "Gwenborough",
//   "zipcode": "92998-3874",
//   "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"
//   }
// },
// "phone": "1-770-736-8031 x56442",
// "website": "hildegard.org",
// "company": {
//   "name": "Romaguera-Crona",
//   "catchPhrase": "Multi-layered client-server neural-net",
//   "bs": "harness real-time e-markets"
// }
// }