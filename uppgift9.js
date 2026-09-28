"use strict" 

const people = [   //värde som inte går att ändra
    {
        name: "Polly",
        eyecolor: "brown",
        born: "skåne"
    }, 
    {
        name: "Hannes",
        eyecolor: "green",
        born: "Poland"
    }, 
    {
        name: "Louis",
        eyecolor: "blue",
        born: "irland"
    }, 
];                             // nu ska jag skapa loopen 
for (let i = 0; i <people.length; i++) {
    let person = people[i];
  console.log(`${person.name} är född i ${person.born}.`);
}