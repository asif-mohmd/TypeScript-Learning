interface UserData2  {
    name:string;
    age : number
}

// inherting UserData2 properties to AdminData2 in interface
interface AdminData2 extends UserData1 {

    role : string
}

let userDetail2 : UserData2 ={
    name: "jhon",
    age: 35
}
let adminDetail2 : AdminData2 = {
    name : "wick",
    age : 33,
    role : "admin"
}

function getDatas<T>(details:T):T{
    return details
}

let newUser2 = getDatas<UserData2>(userDetail2)
let newAdmin2 = getDatas<AdminData2>(adminDetail2)

newUser.age
newAdmin.role