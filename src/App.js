import './App.css';
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from './components/Users/Home/component';
import Error from './components/Users/Error/component';
import User from './components/Users/User/component';
import Users from './components/Users/component';


const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<User/>}/>
        </Route>
        <Route path='*' element={<Error />}/>
      </Route>
    </Routes>
</div>
);

export default App;






