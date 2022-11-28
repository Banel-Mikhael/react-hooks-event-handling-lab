// Code Keypad Component Here
import react from "react";
import EyesOnMe from "./EyesOnMe";
function Keypad (){
    return (
        <div>
        <input type='password' onChange={()=> {console.log('Entering password...')}}/>
        <EyesOnMe/>
        </div>
    )
}

export default Keypad;