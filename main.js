import { add_1, add_2 } from "./src/calculate.js";
import {arr_exce} from "./src/arr.js"
import {executeComplexObj} from "./src/complexObj.js"
import logData from "./src/logger.js";
import { formatDate } from "./src/datefns.js";

const main = () => {
    // add_1([1,2]);
    // add_1([1,2,3,4]);
    // add_1([1,2,3]);

    // add_2(1,2);
    // add_2(1,2,3,4);
    // add_2(1,2,3,"Sourav","1","2",4);
    //arr_exce();
    //executeComplexObj();

    const date = new Date();
    const format = "d, MMM, yyyy"
    const formattedDate = formatDate(date,format);

    logData(formattedDate);
}

main();