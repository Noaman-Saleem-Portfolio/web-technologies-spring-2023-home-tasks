// function greet(){
//     console.log(`Good Morning`);
// }

// greet()

// Function agruments
// function greet(name){
//     console.log(`Good Morning ${name}`);
// }

// greet("Nomi")

// return a value from functions
// function square(num){
//     // console.log(num*num);
//     return num*num;
// }
// let answer = square(6)
// console.log(answer);

// return stops the function execution
// function add(num1,num2){
//     console.log(`I am First`);
//     return num1 + num2;
//     console.log(`I am Last`);
// }
// let answer = add(4,6)
// console.log(answer);

// Function Expression
// const greet =function (name){
//     console.log(`Good Morning ${name}`);
// }

// greet("Nomi")

//High order functions
// const func = function(){
//     console.log(`HaHaHa =====> :)`);
// }

//Passing function as arguments
// const callTwice = function(func){
//     func();
//     func();
// }

//Return Function as return value from another function
// function makeBetween(min,max){
//     return function(val){
//         return val >= min && val <=max
//     }
// }



//Arrow Functions
// const greet = (name)=>{
//     console.log(`Hello ${name}`);
// }

// const square = (val) => {
//     return val*val
// }

// const square = (val) => (
//      val*val
// )

// const square = (val) => val*val

// const square = val => val*val


// const result=square(4)





// We can add functions as
// properties on objects.

// We call them methods!


const math = {
    greet:"Hello Buddy!",
    square: function (val){
        return val*val
    },
    cube: function (val){
        return val*val*val
    }
}


//this keyword in methods

const intro={
    firstName:"Noaman",
    lastName:"Saleem",
    fullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// Invocation Context
const person={
    firstName:"Noaman",
    lastName:"Saleem",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

const personIntro = person.fullName


// Lexical Scope
function outer(){
    let superHero = `Spiderman`

    function inner(){
        // let dummy="Dummy"
        console.log(`${superHero} HELP US!!!!!!!!!!!`);
    }

    inner()
    // console.log(dummy);
}
