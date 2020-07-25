// Question 1
// let chck = prompt("Enter the number of elements you want to add in the array :");
// let arr = [] ;
// for(var i=0;i<chck;i++){
//     arr.push(prompt("Enter the element :"));
// }
// let cube = arr.filter(a =>(a%2 !=0)).map(a => a**3);
// console.log(cube);


// Question 2
class User {
    constructor(name , age , email){
        this.name = name ;
        this.age = age ;
        this.email = email ;
    }
    login(){
        console.log(`${this.name} is logged in `);
    }

    logout(){
        console.log(`${this.name} is logged out `);

    }
}

let user1 = new User("sayali",21, "S@gmail.com");

class Moderator extends User {
    User.coins =0 ;    
    addCoins(User){
        User.coins += 1 ;
        console.log(`${this.name}has ${User.coins}`);
    }

    removeCoins(User) {
        if(User.coins ==0)
            User.coins = 0 ;
        else 
            User.coins -= 1 ;
    }
}
let mod1 = new Moderator('xyz',45 , "x@gmail.com");
 mod1.addCoins(user1);

