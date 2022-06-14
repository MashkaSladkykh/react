import './App.css';
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from './components/Formik/Home/component';
import Error from './components/Formik/Error/component';
import Posts from './components/Formik';


const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/users" element={<Posts />}>
        </Route>
        <Route path='*' element={<Error />}/>
      </Route>
    </Routes>
</div>
);

export default App;






