import logData from "./logger.js"

export const timeoutcheck = () => {
    let status = true
    const loop = () => {
        if (status) {
            logData("Processing");
            const timeout = setTimeout(() => {
                status = false;
                logData("Api Stopped and Status: ", status);
                clearTimeout(timeout);
            }, 10000);
        }
    }
    loop();
}

export const intervalCheck = () => {
    // const interval = setInterval(() => {
    //     logData("Hello: " + Math.round(Math.random() * 1000));
    //     clearInterval(interval);
    // }, 5000);
    // logData("Processing: " + Math.random());
    // const interval = setInterval(() => {
    //     logData("Processing: " + Math.random());
    // }, 2000);
    // const timeout = setTimeout(() => {
    //     clearInterval(interval);
    //     clearTimeout(timeout);
    // }, 10000);
    let num = 10;
    logData(num)
    const interval = setInterval(() => {
        num--;
        logData(num);
        if(num === 0){
            clearInterval(interval);
        }
    },1000);
}


//JS is a single threaded language
