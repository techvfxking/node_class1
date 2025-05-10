/**
 * Async means asynchronous operations. = async
 * I have api which is taking 4 minute time to fetch the data from server. <= Process A
 * I have another api which is taking 2 minutes time to fetch the data from server. <= Process B
 * 
 * I want to execute both the process at the same time
 * 
 * To make asynchronous function in two ways, by using promise or async and await keyword
 */

import logData from "./logger.js";

export const promiseExc = () => {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            logData("Executed");
            clearTimeout(timeout);
            resolve("Resolved Sourav");
        }, 5000);
    });
}

export const promiseExc2 = () => {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            logData("Executed");
            clearTimeout(timeout);
            reject("Rejected Sourav");
        }, 2000);
    });
}

