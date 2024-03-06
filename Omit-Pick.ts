
// omit for removing any not needed property
type Person1 = {
    name : string;
    age : number
    salary : number
}

let person1 : Omit<Person1, "age" >= {
    name : "asif",
    salary : 3333
 
}




// pick = for needed property only

type Person2 = {
    name : string;
    age : number
    salary : number
}

let person2 : Pick<Person2, "name" >= {
    name : "asif",
 
}

