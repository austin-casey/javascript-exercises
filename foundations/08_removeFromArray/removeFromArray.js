// const removeFromArray = function(arr, ...toRemove) {
//     for (number of arr) {
//         if (toRemove.includes(number)) {
//             arr.splice(number, 1);
//         }
//     }
//     return arr;
// };


const removeFromArray = function(arr, ...toRemove) {

    let filteredArr = arr.filter(element => !toRemove.includes(element))
    return filteredArr; 
}




console.log(removeFromArray([1, 2, 3, 4, 3], 3));
// Do not edit below this line
module.exports = removeFromArray;
