export function convertArrayItemsToObject<T extends object>(array: T[]): {} {
    return array.reduce((acc, obj) => ({...acc, ...obj}), {})
}