const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function printResult (result1, result2) {
var para = document.createElement("P");                      
var t = document.createTextNode(result1); 
para.appendChild(t);                                          
document.getElementById(result2).appendChild(para);
}

// 1. Display an array from the cities in gotCitiesCSV *USE JSON.stringify(XXXX) for any answers with an array as the output*
const cities = gotCitiesCSV.split(",");
var para = document.createElement("P");                      
var t = document.createTextNode(JSON.stringify(cities)); 
para.appendChild(t);                                          
document.getElementById("div1").appendChild(para);

// 2. Display an array of words from the sentence in bestThing
const things = bestThing.split(" ");
var para = document.createElement("P");    
var t = document.createTextNode(JSON.stringify(things));   
para.appendChild(t);                                          
document.getElementById("div2").appendChild(para);

// 3. Display a string separated by semi-colons instead of commas from gotCitiesCSV
const withSemicolons = gotCitiesCSV.replace(/,/g, ";");
// var para = document.createElement("P");                      
// var t = document.createTextNode(withSemicolons);   
// para.appendChild(t);                                          
// document.getElementById("div3").appendChild(para);
printResult (withSemicolons, "div3");

// 4. Display a CSV (comma-separated) string from the lotrCitiesArray
const lotrcitieswithcommas = lotrCitiesArray.join(", ");
printResult (lotrcitieswithcommas, "div4");

// 5. Display the first 5 cities in lotrCitiesArray
const firstthreelotrcities = lotrCitiesArray.slice(0,5)
printResult (JSON.stringify(firstthreelotrcities), "div5");

// 6. Display the last 5 cities in lotrCitiesArray
const lastfivelotrcities = lotrCitiesArray.slice(3,8)
printResult (JSON.stringify(lastfivelotrcities), "div6");
// 7. Display the 3rd to 5th city in lotrCitiesArray
const thirdToFifthLotrCities = lotrCitiesArray.slice(2,5)
printResult (JSON.stringify(thirdToFifthLotrCities), "div7");

// 8. Using splice, remove "Rohan" from lotrCitiesArray
const noRohan = lotrCitiesArray.splice(2, 1, "");
printResult (JSON.stringify(lotrCitiesArray), "div8");
// 9. Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray
const noCitiesAfterDeadMarshes = lotrCitiesArray.splice(6,8,"");
printResult (JSON.stringify(lotrCitiesArray), "div9");

// 10. Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"
const Rohan = lotrCitiesArray.splice(2, 1, "Rohan");
printResult (JSON.stringify(lotrCitiesArray), "div10");
// 11. Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray
const deadAF = lotrCitiesArray.splice(5, 1, "Deadest Marshes");
printResult (JSON.stringify(lotrCitiesArray), "div11");

// 12. Using slice, display the first 14 characters from bestThing
const firstFourteen = bestThing.slice(0, 17);
printResult(firstFourteen, "div12");


// 13. Using slice, display the last 12 characters from bestThing
//const lastTwelve = bestThing.slice()


// 14. Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even"

// Repeat #13 using substring instead of slice.
// Repeat #14 using substr instead of slice.
// Find and display the index of "only" in bestThing
// Find and display the index of the last word in bestThing
// Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)
// Find and display all cities from lotrCitiesArray that end with "or"
// Find and display all the words in bestThing that start with a "b"
// Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"
// Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"
// Display the index of "Mirkwood" in lotrCitiesArray
// Find and display the first city in lotrCitiesArray that has more than one word
// Reverse the order in lotrCitiesArray
// Sort lotrCitiesArray alphabetically
// Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)
// Using pop, remove the last city from lotrCitiesArray
// Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array
// Using shift, remove the first city from lotrCitiesArray
// Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array

