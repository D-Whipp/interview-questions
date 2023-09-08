// Coding Challenge from https://hackernoon.com/3-coding-challenges-for-junior-javascript-developer-interviews
// Remove duplicates from the array
let duplicatesArray = [
    1, 2, 2, 2, 3, 1, 4, 4, 6, 7, 3, 6, 7, 2, 8, 9, 6, 3, 1, 0,
];
// The output should be:
// duplicates Array = [0, 1, 2, 3, 4, 6, 7, 8, 9]

// Simple solutions: use Set
let nodupes = [...new Set(duplicatesArray)];
console.log(nodupes);
// DONE!

// Solution using  filter() and indexOf()
let result = duplicatesArray.filter((item, index) => {
    return duplicatesArray.indexOf(item) == index;
});

console.log(result);
// DONE!
