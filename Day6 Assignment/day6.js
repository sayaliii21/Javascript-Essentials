///Question 1
function setBackground() {
    let arr = ["Red","Blue","Green","Yellow","Orange","Violet"];
        for (let i=0 ; i<arr.length; i++){
        document.body.style.background = arr[i];
    }
   }
setBackground();
// Question 2
// function printTable(num) {
//     let input = num.value;
//     if(!isNaN(input)) {
//         let table="";
//         let number="";
//         for(i=1;i<=10;i++) {
//             number = input * i;
//             table +=  input + " * " + i + " = " + number + "<br/>";
//         }
//         document.getElementById("mul").innerHTML = table;
//     }
//     else {
//         document.getElementById("mul").innerHTML = "Please Enter a valid Number";
//     }
// }