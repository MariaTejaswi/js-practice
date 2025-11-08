//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();
// chai()

// when interviewer asked about why we used iife? 
// global scope ke pollution se problem hoti h kahibar tho uss global scope ke jo variables h yah pollution h usko hatane keliye hamne iife ka use kiya


( (name) => {
    //unamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
} ) ('hitesh')

