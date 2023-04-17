console.log("Hello World!\n==========\n");

// Exercise 1 Section

const arr = [2, 22, 12, 17, 18, 39, 129];
function arraySum(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum = number + sum;
  });
  return sum;
}
console.log(arraySum(arr));

// console.log("EXERCISE 1:\n==========\n");

// // Exercise 2 Section
//The Great Gatsby
const book = {};
book.title = "The Great Gatsby";
book.author = "F. Scott Fitzgerald";
book.pages = 208;
book.read = "4 times";
book.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} times`;
};
console.log(book.info());

// //Exercise 3

const sentence = "The quick brown fox jumps over the lazy dog";

const words = sentence.split(" ");
console.log(words);

for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
  const tempArr = words[i].split("");
  tempArr.reverse();
  const tempWord = tempArr.join("");
  words[i] = tempWord;
}
console.log(words);
const resultSentence = words.join(" ");
console.log(resultSentence);
// let tempWord = "";
// let reversedSentence = "";
// for (let i = 0; i < sentence.length; i++) {
//   console.log(sentence[i]);
//   if (sentence[i] != " ") {
//     tempWord += sentence[i];
//   }
//   if (sentence[i] == " ") {
//     console.log(tempWord);
//     let reverseWord = "";
//     for (let j = tempWord.length; j >= 0; j--) {
//       reverseWord = tempWord[j];
//     }
//     tempWord = "";
//     console.log(reverseWord);
//     reversedSentence += reverseWord + " ";
//   }
//   if (i == sentence.length - 1){
  
//     tempWord += sentence[i];

//   }

//console.log(reversedSentence)
//Exercise 4
//CSV-Comma Seperated Values

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

const rows = csvData.split("\n");
const headers = rows[0].split(",");
const arrObj = [];
for (let i = 1; i < rows.length; i++) {
  const temp = rows[i].split(",");
  const obj = {
    name: temp[0],
    age: temp[1]
  }
  arrObj.push(obj);
  }



console.log(arrObj);
