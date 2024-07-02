import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/' exact element={
              <News key="general" category="general" country="in" />
            }
          />
          <Route
            path='/general' exact element={
              <News key="general" category="general" country="in" />
            }
          />
          <Route
            path='/business' exact element={
              <News key="business" category="business" country="in" />
            }
          />
          <Route
            path='/entertainment' exact element={
              <News key="entertainment" category="entertainment" country="in" />
            }
          />
          <Route
            path='/health' exact element={
              <News key="health" category="health" country="in" />
            }
          />
          <Route
            path='/science' exact element={
              <News key="science" category="science" country="in" />
            }
          />
          <Route
            path='/sports' exact element={
              <News key="sports" category="sports" country="in" />
            }
          />
          <Route
            path='/technology' exact element={
              <News key="technology" category="technology" country="in" />
            }
          />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App