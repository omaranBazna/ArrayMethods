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

const drinkOrders = [
  { id: 0, customerName: "Zachary", drinkName: "Dirty Martini" },
  { id: 1, customerName: "Juan", drinkName: "Zombie" },
  { id: 2, customerName: "Kayla", drinkName: "Mojito" },
  { id: 3, customerName: "Zachary", drinkName: "Mojito" },
];

// All challenges will use the drinkOrders array.

// Challenge 1
// Use the find() method to retrieve the first object with the customerName of 'Juan' and console.log() it.
console.log(drinkOrders.find((order) => order.customerName === "Juan"));

// Challenge 2
// Use the find() method to retrieve the first object with the drinkName of 'Mojito' and console.log() it.
// Write your code below this line.
console.log(
  drinkOrders.find((order) => {
    return order.drinkName == "Mojito";
  })
);

// Challenge 3
// Use the find() method to retrieve the object with the id of 3 from the drinkOrders array, then console.log only the name of the customer who ordered it, rather than the entire object. Hint: Use find() to get the object, then dot notation to access the id.
// Write your code below this line.

console.log(
  drinkOrders.find((a) => {
    return a.id == 3;
  })
);

// Bonus Challenge
// Use the filter() method to create a new array containing only the objects with the customerName of 'Zachary'. Then, use the find() method on this new array to retrieve the id of the object with the drinkName of 'Mojito', and console.log() that id.
// Write your code below this line.

//comment
//uncomment
//comment
//uncommet
//comment
//uncomment
//comment
//uncomment
//comment
//uncomment
//comment
//uncomment
//comment
