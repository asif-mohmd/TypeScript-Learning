
// custom Named types


// example 1
type StatusType = 'pending1' | 'completed1' | 'failed1' |  "";

let currentStatus:StatusType = ""


// example: API fetching
const respose = "pending"

if(respose === "pending"){
    currentStatus = "pending1";
}


// example 2

type ToggleSwitch = "on" | "off"

let toggleSwitch:ToggleSwitch = "off"


if(true){
   toggleSwitch = "on"
}
