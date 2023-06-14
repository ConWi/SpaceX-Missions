export function convertArrayItemsToObject(array: Object[]): {} {
    return array.reduce((acc, obj) => ({...acc, ...obj}), {})
}