//johanna lilja lösning uppgift8.

"use strict" 

let book = {
titel: "Technology",
author: "Evans",
year: 2022 

}; 

function printBookInfo (bokensinfo) {
    console.log("Titel: " + bokensinfo.titel);
    console.log("Author: " + bokensinfo.author);
    console.log("Year: " + bokensinfo.year);
}

printBookInfo(book);