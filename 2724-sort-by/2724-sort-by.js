/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.slice().sort((a,b) => {
        return fn(a) - fn(b)
    })
};