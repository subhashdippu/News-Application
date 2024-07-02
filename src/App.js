import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const [progress, setProgress] = useState(0)
  return (
    < div >
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color="red"
          progress={progress}
          height={4}
          onLoaderFinished={() => setProgress(progress)}
        />
        <Routes>
          <Route
            path='/' exact element={
              <News setProgress={setProgress} key="general" category="general" country="in" />
            }
          />
          <Route
            path='/general' exact element={
              <News setProgress={setProgress} key="general" category="general" country="in" />
            }
          />
          <Route
            path='/business' exact element={
              <News setProgress={setProgress} key="business" category="business" country="in" />
            }
          />
          <Route
            path='/entertainment' exact element={
              <News setProgress={setProgress} key="entertainment" category="entertainment" country="in" />
            }
          />
          <Route
            path='/health' exact element={
              <News setProgress={setProgress} key="health" category="health" country="in" />
            }
          />
          <Route
            path='/science' exact element={
              <News setProgress={setProgress} key="science" category="science" country="in" />
            }
          />
          <Route
            path='/sports' exact element={
              <News setProgress={setProgress} key="sports" category="sports" country="in" />
            }
          />
          <Route
            path='/technology' exact element={
              <News setProgress={setProgress} key="technology" category="technology" country="in" />
            }
          />
        </Routes>
      </BrowserRouter>
    </ div>
  )
}

export default App