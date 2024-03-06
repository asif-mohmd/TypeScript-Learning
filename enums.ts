// enum is working in runtime . not that much recommended way
enum StatusType2 {
    PENDING = "pending",
    COMPLETED = "completed",
    FAILED = "failed",
}

function getStatus(orderID: string, status: StatusType2){
    console.log(orderID + "==" + status)
}

getStatus("12345",StatusType2.COMPLETED)