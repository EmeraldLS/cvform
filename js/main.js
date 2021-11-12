// var age = prompt('what is your age?')
// document.querySelector(".page-head").innerHTML = age
// console.log(age);

// var num = 10;
// num++
// console.log(num);

// function alertMe(word) {
//     alert(word)
// }
// alertMe("fuck y'all")
// const log = console.log;

// function greeting() {
//     let name = prompt("What's your name?");
//     let result = (`My name is ${name}`)
//     log(result)
// }
// greeting()

// var x = 0;

// while (x < 10) {
//     x += 1
//     console.log(x);
// }

// for( var x= 1; x <= 20; x +=3){
//     console.log(x);
// }

// var fruit = [{name : "Mango"}, {name : "Orange"}, {name : "Apple"}]
// console.log(fruit[0].name);

// let fruit = "Banana";
// let morefruits = "banana\napple";
// console.log(fruit.indexOf('a'));
// console.log(fruit.slice(0, 6));
// console.log(fruit.replace('nan', "123" + "My Name"))
// var database = ["1234567890", "1019202645","asdfghjjkl","23423492"]
// for(var i = 0; database.length < 9; i++) {
 
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


function submit() {
    let name = document.querySelector("#name").value;
    let matricNo = document.querySelector("#matricNo").value;
    let email = document.querySelector("#email").value;

    if(name == "" && matricNo == "" && email == "") {
        console.log("Input your name please and Input your matric No");
    }
        if(!email.includes("@")) {
        document.querySelector("#email").style.border = ("1px solid red")
        }
        else if(email == true) {
            document.querySelector("#email").style.border = ("1px solid grey")
        }
    else if(name != "" && matricNo == "") {
        console.log("Input your matric number");
    }
    else if(name == "" && matricNo != "") {
        if(matricNo.length > 10) {
            console.log("inavlid matric no");
        }
        console.log("Input your name");
    }
    else if (name != "" && matricNo != "" && matricNo.length <= 10 && !name.includes("1")){
    $("form").trigger("reset")        
        console.log("Data has successfully being sent");
    }
}

// let numbers = [1,2,3,4,5,6,7,8,9]
// for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];
//     if(num === 6) {
//         break;
//     }
//     console.log(num);
    
// }

// let names = ["lawrence","Eniola","Segun","James","John"]
// for(var i = 0; i < names.length; i++) {
//     let name = names[i]

//     console.log(name);
//     if(name == "Segun") {
//         // console.log("You got the correct name");
//         break; 
               
//     }
    
// }

// let score = 190

// switch(score){
//     case 180 :
//         console.log("you cant be given admission");
// }

// tax = (income, expenses) => {
//     income = [1,2,3,4,5,6,7,8,9]
//     expenses = 250;
//     for(var i =0; i < income.length; i++) {
//         let perIncome = income[i];
//         total = perIncome + expenses;
//         console.log(total);
//     }
// }
// tax()


// product = {
//     rice : {
//         sales : [200,2000,3200,5000,7540,3230],
//         price : 5000,
//         quantity : 40
//     },
//     beans : {
//         sales : [100,400,20,2000,5000,1000,7000],
//         price : 2000,
//         quantity : 10
//     }
// }
// for(var i = 0; i < product.rice.sales.length;i++) {
//     sale = product.rice.sales[i]
//     console.log(sale);
//     if(sale === product.rice.price){
//         break;
//     }
// }
// console.log("Current sale is same as the price");

// const bill = (products, tax) => {
//     var total = null;
//     for(var i = 0; i < products.length; i++) {
//         let product = products[i]
//         total += product * tax
        
//     } 
//     console.log(total);
// }
// bill([200,1000,300,100,1000], 0.4)

// function hello() {
//     console.log("Hello world");
// }

// function greet() {
//     return hello()
// }
// greet()

// function greet(hello) {
//     let word = "Hello world";
//     hello(word)
// }

// greet(function(word){
//     console.log(word);
// })


// function check(person) {
//     let name = "Lawrence Oluwasegun"
//     person(name)
// }
// check(function(name){
//     if(name.includes(" ")){
//         invalid = "Username can't have space in between"
//         console.log(invalid);
//     }
//     else{
//         console.log("Data sent");
//     }
// })

// let people = ["Lawrence","Segun","Emmanuel","James","Kevin","powell"]
// let eachPerson = people.forEach((person)=> {
//     console.log(person)
// })

const myInfo = (biodata) => {
    let firstName ="\nLawrence"
    let lastName = "Oluwasegun\n"
    let age = `${18}\n`
    let school = "Lagos State University, Ojo.\n"
    let level = "100L\n"
    let semester = "First Semester\n"
    let session = "2020/2021\n"

    biodata(firstName,lastName,age,school,level,semester,session)
}

myInfo(function(firstName,lastName,age,school,level,semester,session) {
    // console.log(firstName,lastName,age,school,level,semester,session)
})

let ul = document.querySelector(".people")

var people = ["Lawrence","Oluwasegun","Olanrewaju","Oluwapelumi","Eniola","Adetayo"]

let browser = ``

logPerson = (person,index) => {
    browser += `<a href="tel:+2349022682889"><li style="color:red">${person}</li></a>`
}

people.forEach(logPerson)

// console.log(browser);
ul.innerHTML = browser

const sayName = (name) => {
    console.log(name);
}
let firstStu = sayName("Lawrence")
let secondStu = sayName("Eniola")


let user = {
    name : "Lawrence",
    age : 18,
    email : "lawrencesegun025@gmail.com",
    location : "Nigeria",
    blogs : ["Why did you choose life over death?", "10 things to do while you wake up daily"],
    specificThings: function() {
        return(`${this.name} is ${this.age} and is from ${this.location}`)
    },
    login() {
        console.log(`The user logged in`);
    },
    logout() {
        console.log(`The user logged out`)
    },
    logBlogs() {
        console.log("This user has written the following blogs");
        this.blogs.forEach(function(blog){
            console.log(blog)
        })
    }
}
user["lastname"] = "Oluwasegun"
console.log(user.lastname);
// console.log(user["blogs"]);
// console.log(user.login());
user.logBlogs()

// console.log(Math.PI);
// console.log(Math);
// console.log(Math.E);

const area = 7.1;
// console.log(Math.round(area));
// console.log(Math.ceil(area));
// console.log(Math.floor(area));
// console.log(Math.trunc(area));


// const random = Math.random()
// console.log(random);

randomNumber = (a) => {
    random = Math.round((Math.random() * a))
    console.log(random);
}
randomNumber(7)


const scoreOne = 50
const scoreTwo = scoreOne
console.log(scoreOne, scoreTwo);



const link = document.querySelector(".link")
link.innerHTML = "Call the Developer Number"

console.log(link.getAttribute("href"));
link.setAttribute("href","https://www.facebook.com")
console.log(link.getAttribute("href"));
link.innerText = "Facebook Website"

const msg = document.querySelector("button")
console.log(msg.getAttribute("class"));
// msg.setAttribute("class","btn-secondary")

msg.setAttribute("style"," ")
// console.log(msg.style.color);

msg.style.color = "orange"


const head = document.querySelector("h1")
console.log(head.classList);


body = document.querySelector("body")
body.classList.add("linear-background")

head.classList.add("text-success")
head.classList.add("mt-0")
head.classList.remove("text-primary")

paras = document.querySelectorAll("p")
paras.forEach((para, index)=>{console.log(`${index} : ${para.innerText}`)
    if(index == 0 || index == 4 || index == 6){
        para.classList.add("error")
    }
    else if(index == 1 || index == 3 || index == 7) {
        para.classList.add("success")
    }
    else{
        para.classList.add("text-dark")
    }
})
