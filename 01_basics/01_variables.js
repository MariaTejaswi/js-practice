const accountId = 144553
let accountEmail = "maria@google.com"
var accountPassword = "12345"
accountCity = "Vizag"
let accountState;

// accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"


console.log(accountId);
// console.log(accountEmail);

/*
Perfer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

