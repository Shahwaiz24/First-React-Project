import { useState } from "react";
import CardComponent from "./Components/card-component";

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
   <div className="flex justify-center flex-col bg-yellow-300 text-center">
        <h1 >{warningValue}</h1>
    <br/>
        <h1 className="text-3xl">My First Counter {value}</h1>
    <br />
    <button className="bg-blue-300  rounded" onClick={
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
      <br />
      < CardComponent title="React" btntext="Visit"/>
   </>
  )
}

export default App
