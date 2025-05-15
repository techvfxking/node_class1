//What is Class and Objects

import logData from "./logger.js";

/** Class is nothing but a blueprint of anything that we are trying represent
 * Object is the state or the reference or the representation of the class
 * IN JS or TS Everthing is object even a function is also a object
 * OOP => Object Oriented Programming ❌
 * OBP => Object Based Programming ✅
 * 
 */
export class Employee {
    #id = 0; //This is known access modifires or access specifires: With # we are telling JS that it is Private scope variable
    #name = "";
    #age = 0;
    #designation = new Designation();

    #num1 = 0;
    #num2 = 0

    set id(id) {
        this.#id = id;
    }

    id_ = () => {
        return this.#id;
    }

    constructor(num1, num2) {
        this.#num1 = num1;
        this.#num2 = num2;
    }

    add = () => {
        this.#num1 = 0;
        this.#num2 = 0;
        logData(this.#num1 + this.#num2);
    }

    multi = () => {
        logData(this.#num1 * this.#num2);
    }

    sub = () => {
        logData(this.#num1 - this.#num2);
    }

    div = () => {
        logData(this.#num1 / this.#num2);
    }
}

export class Designation {
    id = 0;
    name = "";
}