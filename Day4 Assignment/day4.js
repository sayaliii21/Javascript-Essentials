// Question 1
for (let i=0;i<=100;i++){
    if(i%3==0)
        console.log("fizz");
    if(i%5==0)
        console.log("buzz");
    if(i%3==0 && i%5==0)
        console.log("fizzbuzz");    
}

// //Question 2
const student ={
    name :"Helsinki",
    age:24 ,
    projects :{
        diceGame : "Two players dice Game using Javascript"
    },
}
const {name , age ,projects : diceGame } = student 
console.log(name,age,diceGame);

//Question 3
let shoppingList = ['bread','buttter','milk','tea','sugar'];
console.log(shoppingList);
let shoppingBasket = [... shoppingList,'cheese','eggs'];
console.log(shoppingBasket);

//Question 4
let numbers = prompt("Enter two numbers seperated by space : ");
let val = numbers.split(" ");
let chck = Number(prompt("Choose 1.Add 2.Substract 3.Multiply 4.Division 5.Square_root"));
switch(chck){
    case 1 :
        add = Number(val[0])+Number(val[1]);
        console.log(add);
        break ;
    case 2 :
        console.log(Math.abs(val[0]-val[1]));
        break ;
    case 3 :
        console.log(val[0]*val[1]);
        break ;
    case 4 :
        console.log(val[0]/val[1]);
        break ;
    case 5 :
        console.log(Math.sqrt(val[0]),Math.sqrt(val[1]));
        break ;
}


//Question 6
do{
    function ask (){
        let num =Number(prompt("Enter a number greater than 100"));
        let res = (num < 100) ? ask():console.log("Done") ; 
        return num ;                                
    }
    brk = ask();
}while(brk < 100);

//Question 7
let num =Number(prompt("Enter a number :"));
let prime = [2] ;
for (let i=3;i<=num;i ++){
    let flag =0 ;
    for (let j=2;j<i;j++){
        if(i%j == 0)
             flag = 1;
    }
    if(flag ==0)
        prime.push(i);
}
console.log(`For n = ${num} the result is ${prime}`);

//Question 8 
let question = confirm("Do you agree ? ");
let result = question => {
    if (question== true)
        alert("you agreed");
    else
        alert("You cancelled the execution");
}
result(question);

