const permutations = function(array, permutationsArray = [], permutationSoFar = []) {
    if(array.length === 0) {
        permutationsArray.push(permutationSoFar)
        return permutationsArray
    }
    if(array.length === 1) {
        let copy = [...permutationSoFar]
        copy.push(array[0])
        permutationsArray.push(copy)
        return permutationsArray
    }

    for(let i = 0; i < array.length; i++) {
        let permutationSoFarCopy = [...permutationSoFar]
        permutationSoFarCopy.push(array[i])
        let arrayCopy = [...array]
        arrayCopy.splice(i, 1)
        permutations(arrayCopy, permutationsArray, permutationSoFarCopy)
    }
    return permutationsArray
};

// Do not edit below this line
module.exports = permutations;
