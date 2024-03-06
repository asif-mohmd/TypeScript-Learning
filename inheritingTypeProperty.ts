
// More preferable way is Type than interface

type UserData1 = {
    name:string;
    age : number
}

// inheriting UserData1 properties to AdminData1
type AdminData1 = UserData1 & {

    role : string
}

let userDetail1 : UserData1 ={
    name: "jhon",
    age: 35
}
let adminDetail1 : AdminData1 = {
    name : "wick",
    age : 33,
    role : "admin"
}

function getDatas1<T>(details:T):T{
    return details
}

let newUser1 = getDatas1<UserData>(userDetail)
let newAdmin1 = getDatas1<AdminData>(adminDetail)

newUser.age
newAdmin.role