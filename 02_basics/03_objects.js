//singleton
// Object.create 

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Maria", 
    [mySym]: "mykey1", //this is turned to string it will not be symbol, [] is to refer to symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])



JsUser.email = "hitest@chatgpt.com"
//Object.freeze(JsUser) //changes will not be made
JsUser.email = "hitest@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");   
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


