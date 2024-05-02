// Day -1

// function findLongestWord(str) {
//     words = str.split(" ");
//     words = words.sort((a,b) =>b.length-a.length)
//     console.log(words);
//     return words[0];
// }
// console.log(findLongestWord("My Name is Ashish Shukla and i am a frontend developer")) 

// Day - 2

const generateHash = (str) => {
    text = str.split(" ")
    //    console.log(text)
    text = text.map((curElem) => curElem.replace(curElem[0], curElem[0].toUpperCase()));
    text = `#${text.join("")}`;
    // console.log(text)
    return text
}
console.log(generateHash("ashish shukla"));