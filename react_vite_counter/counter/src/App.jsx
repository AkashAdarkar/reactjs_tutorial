import { useState } from 'react'

import './App.css'

function App() {
  
let [counter,setCounter] = useState(0);
// let text = "from 0 - 20"
let [text,setText] = useState('from 0 - 20')

const addValue = ()=>{
  if(counter>=20){
        counter = 20
      setText('limit is 20') 
  }else{
    setCounter(counter+1)
    setText('from 0 - 20')

  }
}

const removeValue = ()=>{
  if(counter<=0){
    counter = 0
    setText('cant go below 0 ')
  }
  else{
    setCounter(counter-1)
    setText('from 0 - 20')  
  }
}
  return (
    <>  
      <div>
          <h2>React Counter</h2>
          <p>{counter}</p>
          <button onClick={removeValue}>-</button>
          <span> </span>
          <button onClick={addValue}>+</button>
          <p>{text}</p>
       </div>
    </>
  )   
}

export default App
