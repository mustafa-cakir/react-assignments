import moment from 'moment';

/**
 * Print price in the desired format.
 * @param {number} Price
 * @param {number} [toFixDecimal=2] Decimal point digits
 * @throws {TypeError} Will throw an error if the price argument type is not number.
 * @returns {string}
 * @example
 * printPrice(20, 2)
 * // returns '20,00 TL'
*/
export const printPrice = (price, toFixDecimal = 2) => {
    const defaultCurrency = 'TL';
    
    if (typeof price === 'number') {
        return price
            .toFixed(toFixDecimal)
            .concat(' ', defaultCurrency)
            .replace('.', ',');
    }

    throw new TypeError("price parameter type must be number");
};

/**
 * Print expiration date.
 * @param {string|object} Date value must string or null
 * @throws {TypeError} Will throw an error if the date argument value is not string or null.
 * @returns {string}
 * @example
 * printExpiration('2021-11-01T00:00:00')
 * // returns 'Kasım 2021'
*/
export const printExpiration = date => {
    const dateFormat = 'MMMM YYYY';

    if (date === null) {
        return 'Mıadsız Ürün';
    }

    if (typeof date !== 'string') {
        throw new TypeError("date parameter type must be string");
    }

    return moment(date).format(dateFormat);
};
