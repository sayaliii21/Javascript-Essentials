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
        this.coins = 0 ;
        this.courses = [] ;
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
    addCoins(User){
        User.coins += 1 ;
        console.log(`${User.name} has ${User.coins} coins`);
    }

    removeCoins(User) {
        if(User.coins ==0)
            User.coins = 0 ;
        else 
            User.coins -= 1 ;
        console.log(`${User.name} has ${User.coins} coins`);
    }
}
let mod1 = new Moderator('xyz',45 , "x@gmail.com");
//  mod1.addCoins(user1);
//  mod1.addCoins(user1);
//  mod1.removeCoins(user1);

 class Admin extends Moderator {
     addCourse(user,course){
        user.courses.push(course);
        console.log(`${user.name} is enrolled in this courses : ${user.courses}`);
     }

     deleteCourse(user,course){
        user.courses.splice(user.courses.indexOf(course),1);
        console.log(`${user.name} is enrolled in this courses : ${user.courses}`);

     }
 }

let adm = new Admin ('john',50,'j@gmail.com');
adm.addCourse(user1,"Javascript");
adm.addCourse(user1,"Python");
adm.deleteCourse(user1,"Javascript");
//Question 3 
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response =>response.json())
// .then(data => console.log(data));
