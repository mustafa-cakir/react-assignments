/**
 * Convert array to object the given array.
 * @param {Array} arr
 * @throws {TypeError} Will throw an error if the arr argument type is not array.
 * @returns {Object}
*/
export const convertArrayToObject = arr => {
    const initialAccumulator = {};

    if (!Array.isArray(arr)) {
        throw new TypeError("arr parameter type must be array");
    }
    
    return arr.reduce((accumulator, item) => {
        accumulator[item.id] = {
            price: item.price,
            product: {
                id: item.productId,
                name: item.productName,
            },
            basket: item.basketId && {
                id: item.basketId,
                count: item.basketCount,
            }
        }
        return accumulator;
    }, initialAccumulator);
};

/**
 * Calculate the total price of data the given array
 * @param {Array} arr
 * @throws {TypeError} Will throw an error if the arr argument type is not array.
 * @returns {number}
*/
export const calculateTotalPrice = arr => { 
    const keyword = 'price';
    const initialAccumulator = 0;

    if (!Array.isArray(arr)) {
        throw new TypeError("arr parameter type must be array");
    }

    return arr.reduce((accumulator, currentValue) => {
        if (typeof currentValue[keyword] !== 'number') {
            throw new TypeError(`${keyword} type must be number`);
        }
        return accumulator + currentValue[keyword];
    }, initialAccumulator).toFixed(2);
};
