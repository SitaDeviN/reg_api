/**import logo from './logo.svg';**/
import './App.css'
//import Header from './js/Header';
import Headerbar from './JS/Headerbar'
//import Hooks from "./js/Hooks";
//import Component from './js/Component';
//import Pages from './js/Footer';
import Content from './JS/Content'


import { Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div>
      <Headerbar />
      <Routes>
        <Route path="/Content" element={<Content />} />
        
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/Content">Header</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default App