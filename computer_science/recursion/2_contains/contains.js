const contains = function(object, targetValue) {
    if(object === targetValue) {
        return true
    } else if(Number.isNaN(object) && Number.isNaN(targetValue)) {
        return true
    } 
    // Leaf node is non-object
    else if(typeof(object) !== 'object') {
        return false
    } else if(object === null || object === undefined) {
        return false
    }
    for(const subObject of Object.values(object)) {
        if (contains(subObject, targetValue)) {
            return true
        }
    }
    return false
};

// Do not edit below this line
module.exports = contains;
