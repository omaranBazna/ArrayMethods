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
console.log(myFavorite);
