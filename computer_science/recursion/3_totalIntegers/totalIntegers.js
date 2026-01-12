const totalIntegers = function(arrayOrObject) {
    if(typeof(arrayOrObject) !== 'object') {
        return undefined
    }
    let array = null
    if(Array.isArray(arrayOrObject)) {
        array = arrayOrObject
    } else { // Is object
        array = Object.values(arrayOrObject)
    }

    let total = 0;
    for(const thing of array) {
        if(Number.isInteger(thing)) {
            total += 1
        } else if(typeof(thing) === 'object' && thing !== null) {
            total += totalIntegers(thing)
        }
    }
    return total;
};
  
// Do not edit below this line
module.exports = totalIntegers;
