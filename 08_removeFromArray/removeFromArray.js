const removeFromArray = function(array, ...toRemove) {
    return array.filter(item => !toRemove.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
