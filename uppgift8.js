"use strict" 

let book = {
titel: "Technology",
author: "Evans",
year: 2022 

}; 

function printBookInfo (bokensinfo) {
    console.log("titel" + bokensinfo.titel);
    console.log("author: " + bokensinfo.author);
    console.log("year: " + bokensinfo.year);
}

printBookInfo(book);