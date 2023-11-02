import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Battle } from './component/Battle';


function App() {

  return (
    <>
     <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              // eslint-disable-next-line react/jsx-pascal-case
              <Battle/>
            }
          />

       
        
        </Routes>
      </BrowserRouter>
    </>
     
    </>
  )
}

export default App
