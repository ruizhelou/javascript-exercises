const sumAll = function(a, b) {
    if(a < 0 || b < 0) return 'ERROR'
    if(typeof(a) !== "number" || typeof(b) !== "number") return 'ERROR'
    if(!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'
    let startIndex
    let endIndex
    if(a > b) {
        startIndex = b
        endIndex = a
    }
    else {
        startIndex = a
        endIndex = b
    }
    let total = 0
    for(let i = startIndex; i <= endIndex; i++) {
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
