import './App.css';
import React, {useState} from "react"
import Login from './components/app/Login';
import Signup from './components/Signup';

function App() {
  let [popupStyle, setPopupStyle] = useState({visibility: "visible"})
  let [compo, setCompo] = useState(<Login/>)

  return (
    <div className="App">
       <div className="header">
          <div className="btnBack">
          <button onClick={()=> { setPopupStyle({visibility: "visible"}); setCompo(<Login/>)}}>Login</button>
          <button onClick={()=> {setPopupStyle({visibility: "visible"}); setCompo(<Signup/>)}} >Signup</button>
          </div>
       </div>

       <div className="popupBack" style={popupStyle}>
          <div className="blurBack" onClick={()=> {setPopupStyle({visibility: "hidden"})}}></div>
          {compo}
          
       </div>
    </div>
  );
}

export default App;
