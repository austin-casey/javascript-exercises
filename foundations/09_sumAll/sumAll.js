const sumAll = function(a, b) {
    if (a < 0 ||
        b < 0 ||
        typeof a !== 'number' ||
        typeof b !== 'number' ||
        !Number.isInteger(a) ||
        !Number.isInteger(b)) {
            return 'ERROR';
    }
    
    let sum = 0;
    let arr = [a, b];
    let sortedArr = arr.sort((a, b) => a - b);

    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
        sum += i;
    }
    return sum;
}
// Do not edit below this line
module.exports = sumAll;


// Syntax: splice(start_index, deleteCount, item1, item2, ...)