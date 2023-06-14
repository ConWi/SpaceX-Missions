/**
 * Retrieves the value associated with a specified key from an object, even if the key is nested.
 *
 * @example
 * const obj = { key1: { key: value } };
 * const value = getValueByKey(obj, 'key1.key');
 *
 * @param {any} obj - The object from which to retrieve the value.
 * @param {string} key - The key used to search for the value.
 * @returns {any} - The value associated with the specified key.
 */
export function getValueByKey(obj: any, key: string): any {
    return obj && key.split('.').reduce(
        (result, prop) => result == null ? undefined : result[prop],
        obj
    );
}

/**
 * Retrieves unique values from an array of objects based on the specified key.
 * @param {<T>[]} data - The array of objects.
 * @param {string} key - The key used to extract the values.
 * @returns {string[]} - The unique values.
 */
export function getUniqueValuesByObjects<T>(data: T[], key: string): string[] {
    return [...new Set(data.map((item: T) => getValueByKey(item, key)))];
}