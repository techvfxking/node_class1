import logData from "./logger.js";

export const arr_exce = () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // let result = 0;
    // let newRes = arr1.map((x, index) => {
    //     return result += x
    // });
    // logData(newRes);

    // for(let i in arr1){ //In loop gives the collection of index
    //     logData(`Index: ${i} and Value: ${arr1[i]}`);
    // }

    const obj = {
        name: "Sourav",
        age: 0,
        class: 1,
        home: "Digha",
        degree: "None",
        girlfriends: [1, 2, 3, 4],
        status: true,
        success: (num1, num2) => {
            logData(`Hello The result is: ${num1 + num2}`);
        },
        objs: {
            name: "Sourav",
            age: 0,
            class: 1,
            home: "Digha",
            degree: "None",
            girlfriends: [1, 2, 3, 4],
            status: true,
        }
    }

    // for(let prop in obj){
    //     logData(prop);
    // }

    // const keys = Object.keys(obj);

    // for(let i in keys){
    //     logData(i);
    // }

    // for(let prop in obj){
    //     if(typeof obj[prop] === 'function')
    //         obj[prop](12,45);
    //     logData(`Key:'${prop}' & Value: ${obj[prop]}`);
    // }

    //create array of objects
    const arr2 = [
        { name: "Sourav", age: 0, class: 1, home: "Digha", degree: "None", girlfriends: [1, 2, 3, 4], status: true },
        { name: "Sourav", age: 0, class: 1, home: "Digha", degree: "None", girlfriends: [1, 2, 3, 4], status: true },
        { name: "Sourav", age: 0, class: 1, home: "Digha", degree: "None", girlfriends: [1, 2, 3, 4], status: true },
    ]

    for(let [index, Value] of arr2.entries()){
        
    }

    logData(arr2);
}


