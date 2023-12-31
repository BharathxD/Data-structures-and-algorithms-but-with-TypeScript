/**
 * Checks if a value is a boolean.
 * @param value - The value to be checked.
 * @returns `true` if the value is a boolean, otherwise `false`.
 */
export function isBoolean(value: any): boolean {
    return typeof value === 'boolean';
}

/**
 * Checks if a value is a number.
 * @param value - The value to be checked.
 * @returns `true` if the value is a number, otherwise `false`.
 */
export function isNumber(value: any): boolean {
    return typeof value === 'number'
}

/**
 * Checks if a value is null.
 * @param value - The value to be checked.
 * @returns `true` if the value is null, otherwise `false`.
 */
export function isNull(value: any): boolean {
    return value === null
}

/**
 * Checks if a value is a string.
 * @param value - The value to be checked.
 * @returns `true` if the value is a string, otherwise `false`.
 */
export function isString(value: any): boolean {
    return typeof value === 'string'
}

/**
 * Checks if a value is a symbol.
 * @param value - The value to be checked.
 * @returns `true` if the value is a symbol, otherwise `false`.
 */
export function isSymbol(value: any): boolean {
    return typeof value === 'symbol'
}

/**
 * Checks if a value is undefined.
 * @param value - The value to be checked.
 * @returns `true` if the value is undefined, otherwise `false`.
 */
export function isUndefined(value: any): boolean {
    return typeof value === 'undefined'
}