import logData from "./logger.js"

export const add_1 = (numArr = [0]) => {
    let result = 0;
    
    ////1st Normal Forloop
    // for(let i = 0; i < numArr.length; i++){
    //     const num = numArr[i];
    //     result += num;
    // }

    ////2nd Foreach loop
    // numArr.forEach((num, index) => {
    //     result += num;
    // });

    ////3rd For of Loop V1
    // for(let num of numArr){
    //     result += num;
    // }

    ////4th For of Loop V2
    // for(let [index, num] of numArr.entries()){
    //     result += num;
    // }

    //result = numArr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    //logData(result);
}

export const add_2 = (...arg) => {
    let result = 0;
    arg = arg.filter(x => typeof(x) !== "string");
    result = arg.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    logData(result);
}