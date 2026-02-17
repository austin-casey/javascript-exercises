
function repeatString(string, num) {
    let newString = string;
    if (num < 0) {
        return 'ERROR'
    } else if (num == 0) {
        return '';
    }
    for (i = 1; i < num; i++) {
        newString += string;
    }
return newString;
}

console.log(repeatString('hey', 0))
// Do not edit below this line
module.exports = repeatString;
