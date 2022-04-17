var userName = prompt("Enter Your Name");


var userGender = prompt("what is you gender if male type ( m ) if female type ( f )");
 
var userAge = prompt("Enter Your Age")
if(userAge<=0){
    alert("Your Age Is Less Than Or Equal To Zero");
}


var welcomeMassges =confirm("If You Want To Skip The Welcoming Massge Press (Ok)");

if(welcomeMassges==false){
(userGender =="m" )?alert ("Wlecome Mr : " + userName):
(userGender== "f")? alert("Welcome Ms" + userName) :
 alert("Welcome To Our Page" + userName);}
