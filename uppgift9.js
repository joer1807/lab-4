//johanna lilja lösning uppgift.

"use strict";

const people = [   
    {
        name: "Polly",      //här är objecten 
        age: 10,
        born: "Skåne"
    }, 
    {
        name: "Hannes",
        age: 79,
        born: "Poland"
    }, 
    {
        name: "Louis",
        age: 22,
        born: "Irland"
    } 
];                             
// gör en function som ska kika ålder på personerna i arrayen och skriva ut om de är barn eller vuxna.
function checkAge(person) {
    if (person.age >= 18) {
        console.log(person.name + " är myndig (född i " + person.born + ")");
    } else {
        console.log(person.name + " är inte myndig (född i " + person.born + ")");
    }
}
// Här startar loopen som går igenom alla tre personer
for (let i = 0; i < people.length; i++) {
    let person = people[i]; 
    checkAge(person);
}