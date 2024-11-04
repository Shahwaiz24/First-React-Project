import {useState} from "react";

function App() {
  const [value, setValue] = useState(0);

  let AddValue = () => {
    setValue(value +1);
    console.log("Updated Value", value)
  }
  let DecreaseValue = () => {
    if(value != 0){
      setValue(value -1);
      console.log("Updated Value", value)
    }
  
  }

  return (
   <>
   <div>
    <h1>My First Counter {value}</h1>
    <br />
    <button onClick={
AddValue
}
>
      Add Value {value}
    </button>
<br />
<button onClick={DecreaseValue}>
  Decrease Value {value}
</button>
   </div>
   </>
  )
}

export default App
