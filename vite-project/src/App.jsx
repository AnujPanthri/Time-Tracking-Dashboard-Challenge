import './App.css'
import Nav from "./components/Nav";
import Tile from './components/Tile';
import data from "./assets/data.json";
import {useState} from "react";


function App() {
  const [timeMode,setTimeMode] = useState("weekly");
  // console.log(data);
  

  return (
    <main>

      <Nav timeMode={timeMode} setTimeMode={setTimeMode}/>
      <div className='tiles'>
        {
          data.map((value,idx)=>(
            <Tile key={idx} data={value} timeMode={timeMode}/>

          ))
        }
       
      </div>
      
    </main>
  )
}

export default App
