import React from 'react';
import Discover from './Discover';
import Login from "./Login";
import Callback from "./Callback";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Index() {
  const auth = useSelector(state => state.auth)
  // Here you'd return an array of routes

  return (
    <BrowserRouter>
      <Routes>
        {
          auth.isLogged ?
            <Route path='/' element={<Discover />} />
            :
            <>
              <Route path='/' element={<Login />} />
              <Route path='/callback' element={<Callback />} />
            </>
        }
      </Routes>
    </BrowserRouter>
  )
}
