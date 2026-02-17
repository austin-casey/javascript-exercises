const reverseString = function(string) {
    const arr = string.split('');
    const arrReversed = arr.reverse();
    const strReversed = arrReversed.join('');
    return strReversed;
};

console.log(reverseString('hello there'))

// Do not edit below this line
module.exports = reverseString;
