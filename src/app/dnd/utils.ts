/**
 * Check and return true if an object is type of string
 */
export function isString(obj:any) {
    return typeof obj === "string";
}

/**
 * Check and return true if an object not undefined or null
 */
export function isPresent(obj: any) {
    return obj !== undefined && obj !== null;
}

/**
 * Check and return true if an object is type of Function
 */
export function isFunction(obj: any) {
    return typeof obj === "function";
}

/**
 * Call the function
 */
export function callFun(fun: Function) {
    return fun();
}