const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
const scoreMorThan50 = students.filter((arr) => arr.score > 50);
// console.log(scoreMorThan50); // Bob, Charlie, Eve
const increaseScore = scoreMorThan50.map((arr) => arr.score + (arr.score*(10/100)));
// console.log(increaseScore); // 60.5, 74.8, 100.1
const sumScore =  increaseScore.reduce((acc, cur) => acc + cur,0);
// console.log(sumScore); // 235.4
console.log(`Total score is ${sumScore}`); // Total score is 235.4