import {useState} from "react";

function App() {
  const [value, setValue] = useState(0);
  const [warningValue, SetwarningValue] = useState("");

  let AddValue = () => {
    if(value != 20){
      SetwarningValue("");
      setValue(value +1);
      console.log("Updated Value", value)
    }else{
      SetwarningValue("You Can't Increase Value After Reaching 20");
    }
   
  }
  let DecreaseValue = () => {
    if(value != 0){
      SetwarningValue("");
      setValue(value -1);
      console.log("Updated Value", value)
    }
  
  }
  console.log("Rebuild");

  return (
   <>
   <div >
        <h1 >{warningValue}</h1>
    <br />
        <h1 className="text-3xl font-bold underline">My First Counter {value}</h1>
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
