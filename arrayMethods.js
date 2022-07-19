///Array.map

///it is high order function

const names = ["omaran", "omar", "ahmed"];

const upper = names.map((a) => {
  return a.toUpperCase();
});
console.log(upper);

const things = [
  {
    id: 0,
    title: "whiskers on kittens",
    favorite: true,
    points: 97,
  },
  {
    id: 1,
    title: "raindrops on roses",
    favorite: true,
    points: 77,
  },
  {
    id: 2,
    title: "brown paper packages tied up with string",
    favorite: true,
    points: 87,
  },
  {
    id: 3,
    title: "dog bite",
    favorite: false,
    featured: "true",
    points: 12,
  },
  {
    id: 4,
    title: "bee sting",
    favorite: false,
    points: 6,
  },
];
/*
const myFavorite =things.filter((a)=>{
    a.favorite==true
})
*/
const thing = things.filter((a) => a.points > 15);
function selectThingsById(id) {
  const findId = things.find((a) => {
    a.id == id;
  });
}

console.log(myFavorite);

const pets = ["goldfish", "dog", "turtle", "tiger"];

// CHALLENGE 1: Uncomment line 4 then use that line for your challenge, and uncomment the console.log() in line 6 to test your challenge.
// const petsShortNames = pets.filter( /* your code here */ )
// The below line should console.log: ["dog", "tiger"]
const petsShortNames = pets.filter((str) => {
  return str.length < 6;
});
console.log(petsShortNames);

// CHALLENGE 2: Uncomment line 9 and line 11 when you've finished challenge 1
//const petsTNames =
// The below line should console.log: ["turtle", "tiger"]
// console.log(petsTNames);
const petsTNames = pets.filter((a) => a[0] == true);

const numbers = [3, 7, 4, 5, 10];
//3 - uncomment line 15 and line 17
//const numbersBiggerThanFour =
// The below line should console.log: [7, 5, 10]
const numberBiggerThanFour = numbers.filter((num) => {
  return num > 4;
});
console.log(numberBiggerThanFour);

//Bonus - uncomment line 20 and line 22
const evenNumbers = numbers.filter((a) => {
  return a % 2 == 0;
});
// The below line should console.log: [4, 10]
console.log(evenNumbers);
