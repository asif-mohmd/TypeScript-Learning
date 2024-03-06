
// interface

interface Details {
    name:string;
    // optional checking . but its check the type . if type is incorrect it will shows error
    age?:number;
    // union operator
    salary:number | string
}

interface Seller {
    name:string;
    // optional checking . but its check the type . if type is incorrect it will shows error
    age?:number;
    // union operator
    salary:number | string;
    getInfo?:()=>void;
}

let adminDetails: Details= {
    name:"asif",
    age:21,
    salary: "7000"
}

let sellerDetails: Seller= {
    name:"jishnu",
    age:26,
    salary: "9000",

    }



function getUserName(adminDetails:Details):string {
    return adminDetails.name

}
getUserName(adminDetails)


function getAdminDetails({name,age}:{name:string,age:number}):number {
    return age
}
getAdminDetails({name:"jacky",age:25})

function getSellerDetails({name,age}:{name:string,age:number}):void {
// if no return we can add void data type
    console.log("seller")
}
getAdminDetails({name:"jacky",age:25})