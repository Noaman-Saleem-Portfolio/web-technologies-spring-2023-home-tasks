// let student = ["Ali",77,3.33]

// Object in JS
// updating and adding properties
const student = {
    name:"Ali",
    marks:77,
    cgpa:3.33
}

//Array of Objects
const students = [
    {
        name:"Ali",
        marks:77,
        cgpa:3.33
    },
    {
        name:"Adil",
        marks:44,
        cgpa:3.20
    },
    {
        name:"Anam",
        marks:88,
        cgpa:2.33
    }
]

// student object
const studentInfo ={
    firstName:"Ali",
    lastName:"Saleem",
    hobbies:["Music","travelling","reading"],
    marks:{
        midterm:44,
        finalterm:86
    }
}

// Shopping Cart
const shoppingCart=[
    {
        product:"Haleeb",
        price:80,
        quantity:5
    },
    {
        product:"Jam-e-Shere",
        price:480,
        quantity:2
    },
    {
        product:"LUX",
        price:140,
        quantity:15
    }
]

// for loop on shoppingCart
for(let item of shoppingCart){
    let total = item.price * item.quantity
    console.log(`Price of ${item.quantity} ${item.product} = ${total}`);
}

