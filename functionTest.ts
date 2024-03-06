// function overloading

function add(num1:number,num2:number):number
function add(num1:string,num2:string):string
function add(num1:any,num2:any):any{
    return num1+ num2

}

add(2,2); // 4
add("2","2") //22

// Generic
// it is a better solution than function overloading


// Example 1
function old<T>(age:T):T{
         return age
}


old<number>(25)
old<string>("44")


// Example 2
type UserData = {
    name:string;
    age : number
}
type AdminData = {
    firstName : string;
    role : string
}

let userDetail : UserData = {
    name: "jhon",
    age: 35
}
let adminDetail : AdminData = {
    firstName : "wick",
    role : "admin"
}

function getData<T>(details:T):T{
    return details
}

let newUser = getData<UserData>(userDetail)
let newAdmin = getData<AdminData>(adminDetail)

newUser.age
newAdmin.role