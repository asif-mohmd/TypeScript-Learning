// infer types (Implcit types)
let userName = "Tyescript 1"

// userName = 0


// Explicit types : means we can mension the type 
// always try to mension type . dont depend too much on infer

let userName2:string = "Type Script 2"
let number: number = 3000
let isSubscribed : boolean = true
let skills: string[] = ["coding","typing","reading"]
let skills2: number[] = [1,2,3,4,5,6]

let userDetails:{name:string,age:number} = {name:"asif",age:21}


// union operator
let skill3: (string|number)[] = ["coding","typing",2,3,"reading"]
