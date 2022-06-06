import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Home = () => {
  return (
    <>
      <main style={{textAlign:"center"}}>
        <h1>Welcome to the homepage!</h1>
      </main>
      <nav style={{textAlign:"center"}}>
        <Link to="/users" style={{padding:"20px"}}>Click here to see all the users</Link>
        <Link to="/">Click here to go back to homepage</Link>
      </nav>
      <Outlet/>
    </>
  );
}

export default Home;