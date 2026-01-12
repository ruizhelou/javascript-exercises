const totalIntegers = function(arrayOrObject) {
    // if(Number.isInteger(arrayOrObject)) {
    //     return 1
    // }
    // if(typeof(arrayOrObject) !== 'object') {
    //     return 0
    // }

    // let total = 0
    // if(Array.isArray(arrayOrObject)) {
    //     for(const subArrayOrObject of arrayOrObject) {
    //         total += totalIntegers(subArrayOrObject)
    //     }
    // } else {
    //     for(const subArrayOrObject of Object.values(arrayOrObject)) {
    //         total += totalIntegers(subArrayOrObject)
    //     }
    // }
    // return total
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
