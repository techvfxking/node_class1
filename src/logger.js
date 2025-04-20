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
    return `[${new Date().toLocaleString()}]`;
}

export default logData;