//Question 1
let val= prompt("Enter a number :");
function check(val1) {
    if(val1 % 2 == 0)
        console.log(typeof(val1));
        console.log("The number entered is " + val1 + " and the number is even" );
        else 
        console.log("The number entered is "+ val1 + " and the number is odd");
    }
check(val);

//Quesstion 2
let str = prompt("Enter the OS and version of the mobile with a space between ");
var spi = str.split(" ");
console.log("The OS name is "+ spi[0] + " and version is " + spi[1]);

//Question 3
// if-else :
let mark = prompt("Enter your marks:");
if(mark >= 70)
    console.log("Marks are "+mark + " and grade is A");
else if(mark >= 40)
    console.log("Marks are "+mark + " and grade is B");
else if(mark >= 10 )
    console.log("Marks are "+mark + " and grade is C");
else 
    console.log("Marks are "+mark + " and grade is D");

// ternary 
console.log((mark >= 70) ? "Marks are "+mark + " and grade is A": (mark >= 40) ? "Marks are "+mark + " and grade is B": (mark >= 10) ?"Marks are "+mark + " and grade is C" :"Marks are "+mark + " and grade is D")

// Switch Case 
switch (true){
    case mark >= 70 :
        console.log("Marks are "+mark + " and grade is A");
        break ;

    case mark >= 40 :
        console.log("Marks are "+mark + " and grade is B");
        break ;

    case mark >= 10 :
        console.log("Marks are "+mark + " and grade is C");
        break ;

    default :
        console.log("Marks are "+mark + " and grade is D");
        break ; 

}