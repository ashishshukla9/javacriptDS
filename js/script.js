// Day -1

// function findLongestWord(str) {
//     words = str.split(" ");
//     words = words.sort((a,b) =>b.length-a.length)
//     console.log(words);
//     return words[0];
// }
// console.log(findLongestWord("My Name is Ashish Shukla and i am a frontend developer")) 

// Day - 2

// const generateHash = (str) => {
//     text = str.split(" ")
//     //    console.log(text)
//     text = text.map((curElem) => curElem.replace(curElem[0], curElem[0].toUpperCase()));
//     text = `#${text.join("")}`;
//     // console.log(text)
//     return text
// }
// console.log(generateHash("ashish shukla"));

// Day -3

// const findTotal = (word, char) => {
//     word = word.toLowerCase();
//     char = char.toLowerCase();
//     totalCount = word.split("").reduce((accum, curChar) => {
//         if (curChar === char) {
//             accum++;
//         }
//         return accum;
//     },0)

//     return totalCount;
// }
// console.log(findTotal("MissIssippi", "I"))

// Day - 4 

// const checkTriangleType = (a, b, c) => {
//     if (a === b && b === c) return "equilaterals";
//     if (a === b || b === c || a === c) return "isosceles";
//     return "scalene";
// }
// console.log(checkTriangleType(3,3,3))
// console.log(checkTriangleType(3,4,3))
// console.log(checkTriangleType(5,8,6))

// Day - 5

// const sortAscending = (arr) => {
//     return arr.sort((a, b) => b - a);
// }
// console.log(sortAscending([5, 10, 3, 8, 20]));

// Day - 6
const isPalindrome = (str) => {
    str = str.toLowerCase();
    let t_string = str.split("").reverse().join("")
    console.log(t_string)
    return str === t_string ? true : false
    // console.log(str)

}

console.log(isPalindrome("A man, a plan, a canal, panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

