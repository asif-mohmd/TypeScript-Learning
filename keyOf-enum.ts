// enum is working in runtime . not that much recommended way
const StatusType3 =  {
    PENDING : "pending",
    COMPLETED : "completed",
    FAILED : "failed",
}

function getStatus2(orderID: string, status: keyof typeof StatusType3){
    console.log(orderID , "==" , StatusType3[status])
}

getStatus2("12345" , "COMPLETED")