
'use strict';

const answerArray =[]; 
function saveAnswer (){
const userAge = prompt("Are you over 18 years old? (Y/N)");
if(userAge =="Y" || userAge == "N"){
    const userAnswer = userAge;
    answerArray.push(userAnswer);
}
else{
    console.log("invalid");
}
const userCity =prompt("Are you living in Ammman? (Y/N)");
if(userCity =="Y" || userCity =="N"){
    const userAnswer1 = userCity ;
    answerArray.push(userAnswer1);
}
    else{
        console.log("invalid");
    }
    const userScience = prompt("Do you own a Bachelor's degree? (Y/N)");
    if (userScience== "Y" || userScience=="N"){
        const userAnswer2 =userScience;
        answerArray.push(userAnswer2);
    }
    else {
        console.log("invalid");
    }
}
saveAnswer();
  function printAnswer() {
    for(let i=0; i<answerArray.length ;i++)
        alert(answerArray[i]);
        
  }
  printAnswer();