"use strict" 

const people = [   //värde som inte går att ändra
    {
        name: "Polly",
        age : 27,
        born: "skåne"
    }, 
    {
        name: "Hannes",
        age: 17,
        born: "Poland"
    }, 
    {
        name: "Louis",
        age: 22,
        born: "irland"
    }, 

    

];                             // nu ska jag skapa loopen 
for (let i = 0; i <people.length; i++) {
    let person = people[i];
  console.log(`${person.name} är född i ${person.born}.`);
}
if (age < 18) {     //mellanslag
    console.log("barn");
    }