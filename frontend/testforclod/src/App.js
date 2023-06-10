import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import './styles/mainPage.css'
import {FirstPage} from "./pages/FirstPage";
import './styles/stepper.css'
import './styles/firstPage.css'
import {SecondPage} from "./pages/SecondPage";
import './styles/secondPage.css'
import './styles/App.css'
function App(){
  return(
      <div>
        <BrowserRouter basename='/'>
          <Routes>
            <Route exact path='/' element={<MainPage/>}/>
              <Route exact path='/1' element={<FirstPage/>}/>
              <Route exact path='/2' element={<SecondPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
