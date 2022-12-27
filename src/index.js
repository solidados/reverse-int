module.exports = function reverse(n) {
    /* (typeof(n) == 'string' || !Number.isInteger(n)) ? 'Error' :  */
    return parseInt(n.toString().split('').reverse().join(''));
};