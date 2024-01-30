const accountId = 1445;
var accountEmail = 'shriganehs@gmail.com';
let accountName = 'shriganesh';
accountCity = 'Kumta';
let accountState;
// accountId = 144939 //not allowed

accountEmail = 'testing@gmail.com';
accountName = 'shri';

/* 
  Prefer not to use var
  because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountName,accountCity,accountState]);