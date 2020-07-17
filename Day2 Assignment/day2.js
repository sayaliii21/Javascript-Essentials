// Question 1 : Taking input from user and logging it to the console 
let name = prompt("What is your name ");
console.log("The name is",name);

//Question 2 : Methods in string and array 

//String
let str = "The quick brown fox jumps over a lazy dog";
let str1 = " Hey ! There how are you ";
console.log(str.anchor("Sentence"));
console.log(str.charCodeAt(10)); // returns the unicode of charater at given index 
console.log(str.concat(str1));
console.log(str.includes("brown"));
console.log(str.localeCompare(str1));
console.log(str1.localeCompare(str));
console.log(str1);
console.log(str1.trim());
console.log(str.slice(0,10));
console.log(str.valueOf());

//Array
let animals = ["cat" , "rabbit" , "Cow" , "Mouse" , "horse"];
var fruits = ["apple" , "mango" , "cherry" , "Litchi"];
sorting = animals.sort();
console.log(sorting);
spli = fruits.splice(2,2);
console.log(spli);
str2 = animals.toString();
console.log(str2);
console.log(str2.length);
key1 = fruits.keys();
console.log(key1);

// Question 3 : check if can drink or not
check = confirm("Are you 21+ ? Press OK if yes");
if (check == true) {
    console.log("Can Drink");
}
else {
    console.log("Cannot Drink");
}


