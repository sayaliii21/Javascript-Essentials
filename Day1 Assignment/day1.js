// Assignment 1

// Question 1
console.time("Total Time :")
console.log("Welcome to JS");
console.assert(document.getElementById("demo"), "You have no element with ID 'demo'");
console.error("404 error");
console.warn("This is a warning");
console.timeEnd("Total Time :");
var a = {name :"abc ", age:10 , place:"Mumbai"};
var b = {name : "efg", age:15 , place :"Thane"};
console.table({a,b});
console.info("This is about console info function");


// Question 2 
//var
var name = "Sayali";
console.log(name);
var obj = {name : "jeff" , age:35 , hobby : "singing"};
name = "bob";
console.log(name);

//let
{
    let name = "alice";
    console.log(name);
}
console.log(name);


//const
const name1 = "monica";
console.log(name1);
//now cannot assign new value to name1 


// Question 3 

var name2 = "paul" ; //string
var age = 45 ; //number
var adult = true ; // Boolean 
var fruits = ["mango", "grapes", "jackfruit"]; //array 
var obj = {val : 102 , name : "sayali" , gender :"F"} ; // object 
console.log(name2 , age , adult , fruits , obj);