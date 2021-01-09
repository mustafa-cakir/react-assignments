/**
 * Toggles array with given value
 * @param {Array} arr
 * @param {string|number} value must string or number
 * @throws {TypeError} Will throw an error if the arr argument type is not array.
 * @throws {TypeError} Will throw an error if the value argument type is not string or number.
 * @returns {Array}
 * @example
 * toggleValueInArray([1, 2, 3, 4], 'mustafa')
 * // returns [1, 2, 3, 4, 'mustafa']
*/
export const toggleValueInArray = (arr, value) => {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr parameter type must be array");
    }

    if (!(typeof value === 'string' || typeof value === 'number')) {
        throw new TypeError("value parameter type must be number or string");
    }

    if (arr.includes(value)) {
        return arr.filter(item => item !== value);
    }

    return [...arr, value];
};

/**
 * Capitalizes the first letter of the given string value
 * @param {string} Word
 * @throws {TypeError} Will throw an error if the word argument type is not string.
 * @returns {string}
 * @example
 * captializeFirstLetter('mustafa')
 * // returns 'Mustafa'
*/
export const captializeFirstLetter = word => {
    if (typeof word !== 'string') {
        throw new TypeError("word parameter type must be string");
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
};
