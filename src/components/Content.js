import  { Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from 'components/Navbar'
import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";

const Content = () => {
  return (
    <main className="flex-auto">
        <Navbar />
        <div className="px-8 pt-5">
            <Routes>
              <Route exact path="/" element={<Home />}>
              </Route>
              <Route path="/search" element={<Search />}>
              </Route>
              <Route exact path="/collection" element={<Collection />}>
              </Route>
            </Routes>
        </div>
    </main>
  )
}

export default Content