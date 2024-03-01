import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('Olive')
  return (
    <>
     <div className = "w-full h-screen"style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'style={{backgroundColor: "#d946ef"}}>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'style={{backgroundColor:"pink"}}>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Red"}} onClick={()=>setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"#fdd835"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Black"}} onClick={()=>setColor("black")}>Black</button>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Skyblue"}} onClick={()=>setColor("skyblue")}>Skyblue</button>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>Gray</button>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"#475569"}} onClick={()=>setColor("choclate")}>Choclate</button>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Purple"}} onClick={()=>setColor("purple")}>Purple</button>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"#3f3f46"}}  onClick={()=>setColor("zinc")}>Zinc</button>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"#064e3b"}}  onClick={()=>setColor("emerald")}>Emerald</button>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"#0e7490"}}  onClick={()=>setColor("cyan")}>Cyan</button>
          <button className='outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"#5b21b6"}}  onClick={()=>setColor("v5b21b6")} >Violet</button>
        </div>
      </div>
     </div>
     </>
  );
}

export default App;
