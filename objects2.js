let
  me = { name: "Medha", age: 35 };
console.log(me.name);
console.log(me.age);

// Use the increment operator to increase the value of your age once
console.log(me.age);
me.age++;
console.log(me.age);

//Add another property called hobbies and set the value to be an arrar which should  be an array of objects that represent some of your hobbies.//   "movies",
me.hobbies = [
  "music",
  "munching",
  "movies"

];
console.log(me.hobbies);
//Add another property called pets which should be an array .pets should have three properties:name,age and species
me.pets = [
  {
    name: "Alex",
    age: 2,
    species: "Dog"
  }, {
    name: "Tommy",
    age: 3,
    species: "Cat"
  }
];
for (let i = 0; i < me.pets.length; i++)
{
  let pet = me.pets[i]
  console.log(`My ${pet.species}is${pet.age}years old.Their nameis${pet.name}`)


}






