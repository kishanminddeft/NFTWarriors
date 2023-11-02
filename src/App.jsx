import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Battle } from './component/Battle';
import { Home } from './component/Home';


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
              <Home/>
            }
          />

       
        
        </Routes>
      </BrowserRouter>
    </>
     
    </>
  )
}

export default App
