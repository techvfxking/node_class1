import { formatDate } from "./datefns.js";

const logData = (data, type = "") => {
    const timeStamp = returnTimeStamp();
    
    if(data === undefined)
        data = "";

    switch(type){
        case "info".toLowerCase():
            console.log(`${timeStamp} ::: ${data}`);
            break;
        case "error".toLowerCase():
            console.error(`${timeStamp} ::: ${data}`);
            break;
        default:
            console.log(`${timeStamp} ::: ${data}`);
            break;
    }
    
}

export const returnTimeStamp = () => {
    //return `[${new Date().toLocaleString()}]`;

    const date = new Date();
    const format = "yyyy-MM-dd hh:mm:ss:zz tt";

    return `${formatDate(date, format)}`;
}

export default logData;