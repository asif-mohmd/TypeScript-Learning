type Person = {
    // we can reassign value
    readonly name : string;
    age : number
}

let person : Person = {
    name : "asif",
    age : 22
}

// person.name = "saif"  this will not work