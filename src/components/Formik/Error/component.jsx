import { Link } from "react-router-dom";
import React from "react";

const Error = () => (
  <div>
    <h1>Error</h1>
    <h2>Page is not found</h2>
    <Link to="/">Click here to go back to Homepage</Link>
  </div>
)

export default Error;