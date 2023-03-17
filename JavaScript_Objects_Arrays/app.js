console.log("Hello World!\n==========\n");

// Exercise 1 Section

const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum(arr) {
  console.log(numbers[0]);
  let sum = 0;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    sum = sum + arr[i];
    console.log("Sum",sum)
  }
  return sum;
}
console.log(arraySum(numbers));

// console.log("EXERCISE 1:\n==========\n");

// // Exercise 2 Section
//The Great Gatsby
let Book = {
  Title: "The Great Gatsby",
  Author: "F. Scott Fitzgerald",
  Pages: 208,
  Read: "4 times",
};
console.log(Book.Author, Book.Pages, Book.Read, Book.Title);

// //Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";

let words = sentence.split(" ");
console.log(words)
let arr = []

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
};
//Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

const stuff = csvData.split("\n");
let result= [ ];
let header= stuff[0].split(",");
console.log(header)
//console.log(words[0]);
for (let i = 1; i < stuff.length; i++) {
  const element = stuff[i];
  let words2 = stuff[i].split(",");
let object={
[header[0]]:words2[0],
[header[1]]:words2[1]

}
 result.push(object) 
 // console.log(object)
}
console.log(result)














// const words = sentence.split(" ");
// let result = [];
// console.log(words);
// for (let i = 0; i < words.length; i++) {
//     console.log(words[i]);
//   let letters = words[i].split(" ");
//   console.log(letters.slice());

//   const lettersReversed = letters.reverse();
//   const lettersJoined = letters.join();
//   console.log(lettersJoined);

//   result.push(lettersJoined);
//   console.log(letters.join(" "));
// }
// const finalSentence = result.join(" ");

// console.log(finalSentence);

//Exercise 4
// let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
// function parseCSV(startingData) {
//   console.log(csvData);
//   const rows = csvData.split("\n");
//   console.log("Rows", rows);
//   const headers = rows[0].split(",");
//   console.log("Headers", headers);
//   const resultArray = [];
//   for (let i = 1; i < rows.length; i++) {
//     const valuesArray = rows[i].split(",");
//     console.log(valuesArray);
//     const dataObjects = {
//       Name: valuesArray[0],
//       Age: valuesArray[1],
//     };
//     const dataObjects = {};
//     dataObjects[headers[0]]="value"
//     dataObjects[headers[1]]="something else"

//     resultArray.push(dataObjects);
//   }
// }
// console.log(parseCSV(csvData));

