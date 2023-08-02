export function isArray(value) {
    return Array.isArray(value);
}

export function isFunction(value) {
    return typeof value === 'function';
}

export function isObject(value) {
    // If the value is null or undefined return false
    if (value === null) return false;
    const type = typeof value;
    // A function in javascript is considered as an object
    return type === 'object' || type === "function";
}

export function isPlainObject(value) {
    // If the value is not an object, return false
    if (!isObject(value)) return false;
    // If the object is created by Object.create(null), then it wouldn't have any prototypes (null)
    if (Object.getPrototypeOf(value) === null) return true;
    // If the value has Object.prototype as its prototype, it means it is a plain JavaScript object
    return Object.getPrototypeOf(value) === Object.prototype;
}