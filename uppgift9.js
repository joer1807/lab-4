const people = [   
    {
        name: "Polly",
        age: 27,
        born: "Skåne"
    }, 
    {
        name: "Hannes",
        age: 17,
        born: "Poland"
    }, 
    {
        name: "Louis",
        age: 22,
        born: "Irland"
    } 
];                             

// Här startar loopen som går igenom alla tre personer
for (let i = 0; i < people.length; i++) {
    let person = people[i]; 
    if (person.age < 18) {     
        console.log(`${person.name} är ett barn (född i ${person.born})`);
    } else {
        console.log(`${person.name} är vuxen (född i ${person.born})`);
    }
}