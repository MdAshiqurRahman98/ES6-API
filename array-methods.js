/* Array Methods */

// map
const numbersArray1 = [1, 3, 5, 7, 9];
const result1 = numbersArray1.map(number => number * 3);
console.log(result1);

// forEach
const numbersArray2 = [3, 5, 7, 9, 11];
numbersArray2.forEach(number => console.log(number));

// filter
const numbersArray3 = [5, 7, 9, 11, 13, 14, 16];
const result3 = numbersArray3.filter(number => {
    return number % 2 === 1;
});
console.log(result3);

const fruits = ['Mango', 'Jackfruit', 'Banana', 'Orange', 'Grape'];
const oddLength = fruits.filter(fruit => fruit.length % 2 === 1);
console.log(oddLength);

// find
const numbersArray4 = [7, 9, 11, 13, 15];
const result4 = numbersArray4.find(number => number > 11);
console.log(result4);

// reduce
const numbersArray5 = [9, 11, 13, 15, 17];
const result5 = numbersArray5.reduce((previous, current) => previous * current, 1);
console.log(result5);