
import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
// import TextForm from './components/TextForm';
import Navbar from './components/Navbar';

function App() {
const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
}
  
  return (
    <>
    <Navbar></Navbar>
    <Alerts alert='jai mahakaal'/>
    </>
  );
}

export default App;
