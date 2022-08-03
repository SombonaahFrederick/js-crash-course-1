// Declearing a variable
// keyword identifier/variable = value
var firstName = "Frederick";
let lastName = "Sombonaah";
let age = 33;
let isMarried = true;
let children = ["Ezra", "Modicai"];
let other = {
    favoriteColor: "Agua",
    favoritSport: "Soccer",
    favoriteFruit: "Watermelon"
};
const fullName = firstName + " " + lastName; //concatenation;
const myself = `My name is ${firstName} ${lastName}`; // strings interpolation
console.log(fullName);

//STRINGS
let sentence = "This is the story of Freddie trying to learn coding for the first Time";
console.log(sentence.length);
console.log(sentence.split(" Frederick"));
console.log(sentence.replace("Frederick", "Freddie"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith());
console.log(sentence.endsWith());
console.log(sentence.includes(""));

// ARRAY
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",];
console.log(days.length);
days.push("Friday");
console.log(days);
console.log(days.pop());
days.unshift("Sunday");
console.log(days);
console.log(days.shift());
console.log(days.indexOf("Friday"));
console.log(days[4]); // retrieving data
days[0] = "Sunday"; // change data in the array
console.log(days);

// OBJECT
let person = {
    firstName: "Frederick",
    lastName: "Sombonaah",
    age: 33,
};
console.log(person['firstName']);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
