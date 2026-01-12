const palindromes = function (str) {
    const cleanString = str
        .replaceAll("!", "")
        .replaceAll(",", "")
        .replaceAll(".", "")
        .split(" ")
        .join("")
        .toLowerCase()
    const cleanStringReversed = cleanString.split("").reverse().join("")
    return cleanString === cleanStringReversed
};

// Do not edit below this line
module.exports = palindromes;
