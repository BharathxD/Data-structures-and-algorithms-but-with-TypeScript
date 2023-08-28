/**
 * Checks if a value is a boolean.
 * @param value - The value to be checked.
 * @returns `true` if the value is a boolean, otherwise `false`.
 */
export function isBoolean(value: any): boolean {
    return typeof value === 'boolean';
}

export function isNumber(value: any): boolean {
    return typeof value === 'number'
}

export function isNull(value: any): boolean {
    return value === null
}

export function isString(value: any): boolean {
    return typeof value === 'string'
}

export function isSymbol(value: any): boolean {
    return typeof value === 'symbol'
}

export function isUndefined(value: any): boolean {
    return typeof value === 'undefined'
}