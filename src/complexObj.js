import logData from "./logger.js";

//create a new function ✅
//obj property loop wise ghorabo ✅
//if property type arr the print every element individually ✅
//if aarr[ele]==="number" do addition and return output ✅
//if object er pro[erty arr[element]==="number" ✅
//use reduce function and do addition method ✅
//if obj[property]=== "function"  then execute the function and log the result ✅
//obj[property]=== "obj" same condition will occur on it ✅
//obj[property]=== "boolean" convert this into "string" ✅
//obj[property]=== "date". yyyy/MM/dd formet e print korate hobe ✅
//if(obj[property]=== "createdby") then the value will be change to "Sourav" ✅
//If object property is returning a object it self then again apply the same conditions ✅

export const executeComplexObj = (complexObject = undefined) => {
    if (complexObject === undefined) {
        complexObject = {
            name: "ComplexCalculator",
            version: 1.0,
            operations: ["add", 10, "subtract", 56, "multiply", 73, "divide"],
            metadata: {
                createdBy: "Biplab",
                createdAt: new Date(),
                features: {
                    advanced: true,
                    modes: ["basic", "scientific", "programmer", 0, 0, 0, 0],
                }
            },
            numbers: [5, 10, 15, 20, "a"],
            numbers2: [5, 10, 15, 20],

            multiply: (a, b) => a * b,
            addition: (a, b) => a + b,
            subtract: (a, b) => a - b,
            division: (a, b) => a / b,

            returnObject: () => {
                const obj = {
                    name: "Name Name",
                    age: 1000000000,
                    active: "Yes",
                    status: true
                }

                return obj;
            }
        }
    }

    // const keysArr = Object.keys(complexObject);
    // for(const [index, prop] of keysArr.entries())

    //Itarating the complexObject variable with For in loop
    //So that we can get the object proerty value in each itaration
    for (const prop in complexObject) {

        //Saving the object property value in variable
        let objValue = complexObject[prop];

        //Checking the object property value is Array or not
        //Also using every method to check whether the each element is a number in the array
        //Hence this will be known as Array of Numbers or Numbers Array
        const isNumberArr = Array.isArray(objValue) && objValue.every(x => typeof x === 'number' || typeof x === 'bigint');
        if (isNumberArr) {
            let numArrResult = 0;
            numArrResult = objValue.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
            logData(`Key: "${prop}" & Value: ${numArrResult} & Number Array is True`);
            continue;
        }

        //Check if the property is Array
        //If the array is having a number element then we are adding the number and printing the final result
        const isPropArr = Array.isArray(objValue);
        if (isPropArr) {
            logData(`Key: "${prop}" and This is Normal Array`);
            let numArrResult = 0;
            objValue.map((elem, index) => {
                if (typeof elem !== "number" && typeof elem !== 'bigint')
                    logData(`Element: ${elem}`);
                else if (typeof elem === "number" || typeof elem === "bigint")
                    numArrResult += elem;
            });
            if (numArrResult !== 0) {
                logData(`Number Result: ${numArrResult}`);
            }
            continue;
        }

        //Checking if the object property is function then we are executing the function and
        //Returning the result 
        const isFunction = typeof objValue === 'function';
        if (isFunction) {
            logData(`Key: "${prop}" and This is Function`);
            if (Object.prototype.toString.call(objValue()) === "[object Object]") {
                logData(`Key: "${prop}" and this is a function which is returing a object so we are calling the same function\n and making this a 'Recursive Call'`)
                executeComplexObj(objValue());
                continue;
            }
            const result = objValue(12, 12);
            logData(`Function Result: ${result}`);
            continue;
        }

        //Checking if the Object Propert is Object or not
        //If object then we are doing recursive function calling 
        const isReallyObject = Object.prototype.toString.call(objValue) === "[object Object]";

        //If object then we are doing recursive function calling 
        if (isReallyObject) {
            logData(`Key: "${prop}" and this is object so we are calling the same function\n and making this a 'Recursive Call'`)
            executeComplexObj(objValue);
            continue;
        }

        //Checking if the object property is Boolean then convert the boolean into string and print it
        const isBoolean = typeof objValue === "boolean";
        if (isBoolean) {
            logData(`Boolean Property ::: Key: "${prop}" & Value: ${objValue.toString()}`);
            continue;
        }

        //Checking if the objValue is date
        const isDateObject = Object.prototype.toString.call(objValue) === '[object Date]';
        if (isDateObject || objValue instanceof Date) {
            logData(`Date Property ::: Key: "${prop}" & Value: ${objValue.toISOString().replace("T", " ").substring(0, 19)}`);
            continue;
        }

        //Checking if the porperty is created by then we are Modifying the value
        if (prop.toLowerCase() === "createdby") {
            objValue = "Created By Sourav"
            logData(`Created By Property ::: Key: "${prop}" & Value: ${objValue}`);
            continue;
        }

        logData(`Plain Property ::: Key: "${prop}" & Value: ${objValue}`);
    }
}