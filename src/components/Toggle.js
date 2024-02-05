import React, {useState} from "react";

function Toggle() {

  const [btnState, setBtn] = useState(false)

  function toggle(){
   setBtn((btnState) => !btnState) 
  }

  const color = btnState ? "green" : "red"

  return <button onClick={toggle} style={{ background: color }}>{btnState ? "ON" : "OFF"}</button>;
}

export default Toggle;
