// const findLongestWord = (str) => {
//  strArr = str.split("")
//  console.log(strArr)
// }

// findLongestWord("My Name is Ashish Shukla and i am a frontend developer")

function findLongestWord(str) {
    words = str.split(" ");
    words = words.sort((a,b) =>b.length-a.length)
    console.log(words);
    return words[0];
}
console.log(findLongestWord("My Name is Ashish Shukla and i am a frontend developer")) 