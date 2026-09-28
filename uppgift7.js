//johanna Lilja uppgift 7arrayer och funktioner 

"use strict";

let numbers = [1, 2, 3, 4, 5, 6,];     // skapa en variabel som heter numbers- sparar 6 siffror. 
function calculateSum (arr) {  //arrayens summa- datorn memorerar den? 

let summa = 0;  //starten i arrayen är 1, men noll. 
// loopa arrayen
for (let i = 0; i <arr.length; i++) {     //starta loopen här- den räknar alla 6 saker i++. 
    summa = summa + arr[i]; 
}
   
    return summa;   // retursvaret 
 }
    let totalt = calculateSum(numbers);
console.log("Summan av mina tal är :" + totalt);
