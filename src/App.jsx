import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Battle } from './component/Battle';
import { Home } from './component/Home';
import CreateBattle from './component/CreateBattle';

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
          <Route
            exact
            path="/createbattle"
            element={
              // eslint-disable-next-line react/jsx-pascal-case
              <CreateBattle/>
            }
          />
          <Route
            exact
            path="/battle"
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
