// 1. Data types
// Refresher
// So far we have seen:

// Strings
// Numbers
// Booleans
// Arrays
// Objects
// When these datatypes are combined, we get a data structure, 
// for example, an array that contains objects that each contain booleans.

// Suppose you are tasked with creating some software, 
// and it is up to you to determine which datatypes 
// and what data structure to use. For each of the following, 
// write which data types you would use to represent the data, 
// and then give a small example of the data structure:

// A light switch that can be either on or off.
// A user's email address.
// A spaceship with a hull, laser blasters, tractor beam, 
// and warp drive.
// A list of student names from our class.
// A list of student names from our class, each with a location.
// A list of student names from our class, 
// each with a location and each with a list of favorite tv shows.

// -boolean-
// if(x === true){
//   console.log('The lights are on!);
//} else {
//     console.log('false');
//}
// - string data type-
// const userEmail = ['bertha.pg@gmail.com', 'jimmy.john@aol.com']
// 
//-object with properties-
// const spaceShip = {
//     hull: "titanium",
//     weapon: "laser blasters",
//     tractorBeam: true,
//     warpDrive: true
// }

//-array of strings-
// const students = ['Donnie', 'Deirdre', 'Liz', 'Tomas', 'Deeter'
// ];

// const students = {
//     Donnie: 'Denver', 
//     Deirdre: 'Denver',
//     Liz: 'Denver', 
//     Tomas: 'Denver', 
//     Deeter: 'Denver'
// ];

// const students = {
//     const donnie = {
//         location: 'Denver', 
//         favShow: 'The Wire'},
//     const deirdre = {
//         location: 'Denver',
//         favShow: 'The Bachelor'
//     },
//     const liz = {
//         location: 'Denver', 
//         favShow: 'Gameofthrones'},
//     const Tomas = {
//         location: 'Denver', 
//         favShow: 'BreakingBad'
//     }
// }
// 2. Take it Easy
// Make an array that holds all of the colors of the rainbow.
// Write code that will access "blue" from the rainbow array.
// Make an object that is called your name and holds the 
// information about your favorite food, a hobby, 
// the name of the town that you live in currently, 
// and your favorite datatype.
// Write code that will access your hobby from the 
// object that you just created.

// const rainbow = [
//     'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
// ]
// console.log(rainbow[4]);

// const donnie = {
//     favFood: 'Ramen',
//     hobby: 'Reading',
//     town: 'Denver',
//     dataType: 'Boolean'
// }

// console.log(donnie.hobby);

const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", 
        "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", 
      "Is that a parkinson's thing?", 
      "women love a self confident bald man", 
      "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }
//   Use crazyObject to log the following.
  
//   "omg my mouth is burning"
//   "Pretty pretty prettayyyyy good"
//   "Swearing at Larry and Jeff"
//   "Chicken Teriyaki Boyyyyyy"
//   The object the contains the name funkhauser

// console.log(crazyObject.taco[1].salsa[5]);
// console.log(crazyObject.larry.quotes[0]);
// console.log(crazyObject.larry.characters[2].favourtieHobby);
// console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);






