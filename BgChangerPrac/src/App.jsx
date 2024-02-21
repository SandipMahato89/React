import { useState } from 'react'



function App() {
  const [color, setColor] = useState("olive")

  return (
   
      
      <div className='w-full h-screen duration-200' style={{background:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap gap-3 justify-center shadow-xl bg-white px-3 py-2 rounded-3xl'> 
            <button onClick={ () => setColor("Red")} className='outline-none px-4 text-white py-1 rounded-full shadow-lg' style={{background:"Red"}}>Red</button>
            <button onClick={ () => setColor("Blue")} className='outline-none px-4 text-white py-1 rounded-full shadow-lg' style={{background:"Blue"}}>Blue</button>
            <button onClick={ () => setColor("Yellow")} className='outline-none px-4 text-black py-1 rounded-full shadow-lg' style={{background:"Yellow"}}>Yellow</button>
            <button onClick={ () => setColor("Purple")} className='outline-none px-4 text-white py-1 rounded-full shadow-lg' style={{background:"Purple"}}>Purple</button>
            <button onClick={ () => setColor("Green")} className='outline-none px-4 text-white py-1 rounded-full shadow-lg' style={{background:"Green"}}>Green</button>
          </div>
        </div>
      </div>
   
  )
}

export default App
