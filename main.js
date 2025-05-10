import { add_1, add_2 } from "./src/calculate.js";
import { arr_exce } from "./src/arr.js"
import { executeComplexObj } from "./src/complexObj.js"
import logData from "./src/logger.js";
import { formatDate } from "./src/datefns.js";
import { timeoutcheck, intervalCheck } from "./src/timeoutAndInterval.js";
import { promiseExc, promiseExc2 } from "./src/async_await.js";

// const main = async () => {
//     // add_1([1,2]);
//     // add_1([1,2,3,4]);
//     // add_1([1,2,3]);

//     // add_2(1,2);
//     // add_2(1,2,3,4);
//     // add_2(1,2,3,"Sourav","1","2",4);
//     //arr_exce();
//     //executeComplexObj();

//     // const date = new Date();
//     // const format = "d, MMM, yyyy"
//     // const formattedDate = formatDate(date,format);

//     // logData(formattedDate);

//     //timeoutcheck();
//     //intervalCheck();
//     // promiseExc().then((value) => {
//     //     logData("Success: "+value);
//     // }).catch((error) => {
//     //     logData("Error: "+error);
//     // });

//     try {
//         const result = await promiseExc();
//         logData(result);
//     } catch (error) {
//        logData("Error: " + error); 
//     }

// }

// main().then(value => {});

const main = async () => {
    // add_1([1,2]);
    // add_1([1,2,3,4]);
    // add_1([1,2,3]);

    // add_2(1,2);
    // add_2(1,2,3,4);
    // add_2(1,2,3,"Sourav","1","2",4);
    //arr_exce();
    //executeComplexObj();

    // const date = new Date();
    // const format = "d, MMM, yyyy"
    // const formattedDate = formatDate(date,format);

    // logData(formattedDate);

    //timeoutcheck();
    //intervalCheck();
    // promiseExc().then((value) => {
    //     logData("Success: "+value);
    // }).catch((error) => {
    //     logData("Error: "+error);
    // });

    // try {
    //     const result = await promiseExc();
    //     logData(result);
    // } catch (error) {
    //    logData("Error: " + error); 
    // }

    // logData("1");
    // logData("2");
    // logData("3");
    // promiseExc().then((value) => {
    //     logData("4")
    //     logData("Success: " + value);
    // }).catch((error) => {
    //     logData("5");
    //     logData("Error: " + error);
    // });

    // try {
    //     const value = await promiseExc();
    //     logData("4")
    //     logData("Success: " + value);
    // } catch (error) {
    //     logData("5");
    //     logData("Error: " + error);
    // }
    // logData("6");
    // logData("7");
    // logData("8");
    logData("1");
    logData("2");
    logData("3");
    promiseExc().then((value) => {
        logData("4")
        logData("Success: " + value);
    }).catch((error) => {
        logData("5");
        logData("Error: " + error);
    });
    promiseExc2().then((value) => {
        logData("6")
        logData("Success: " + value);
    }).catch((error) => {
        logData("7");
        logData("Error: " + error);
    });
    logData("8");
    logData("9");
    logData("10");

}

main().then(v => { });