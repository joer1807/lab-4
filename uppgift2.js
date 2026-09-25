"use strict";
//jag ska räkna priset på 100kr för antalet 3 sen moms



let priset = 100;
console.log("Priset: 100kr");

let antalet = 3; 
console.log("Antalet:3");

let totalt = priset * antalet; //hela summan
console.log("totalt: " + totalt + " kr");

let moms = 1.25;

console.log("totalt inklusive moms: " + (priset * moms * antalet) + "kr");    // nu la jag in antalet, gånger momssatsen och priseto console. 

