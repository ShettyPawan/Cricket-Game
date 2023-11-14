//Version 5 using local storage to save scores in the browser

let points;

function x(){
  let df = Math.random();
  if (df < 0.33) {
    return 'Bat' ;
  } else if (df < 0.66) {
    return 'Ball' ;
  } else {
    return 'Stump' ;
  }  
}

function logicf(buttonValue, randomChoice){
  if (buttonValue === randomChoice){
    return 'Its a Tie' ;
  } else if ((buttonValue === 'Bat' && randomChoice === 'Ball')||(buttonValue === 'Ball' && randomChoice === 'Stump')||(buttonValue === 'Stump' && randomChoice === 'Bat')) {
    return 'You Win' ;
  } else {
    return 'You Lost';
  }
}

function scoreBoard(printMSG){
  
  if (printMSG === 'You Win'){
    points.win ++ ;
  } else if (printMSG === 'You Lost'){
    points.lost ++ ;
  } else if (printMSG === 'Its a Tie'){
    points.tie ++ ;
  }
}

function comparator(printMSG){
if(printMSG === 'You Win'){
  points.uWin ++ ;
  points.cWin -- ; 

}else if(printMSG === 'You Lost') {
  points.uWin -- ;
  points.cWin ++ ;
}
}

function printStatus(buttonValue,randomChoice,printMSG){
  document.querySelector('#result').innerText = `You have chosen to ${buttonValue}. Computer has chosen to ${randomChoice} and the result is ${printMSG}`;
  document.querySelector('#comparator').innerText = `Your Score is ${points.uWin} Vs Computer Score is ${points.cWin}`;
}

function resultStatus (buttonValue){
  let randomChoice = x();
  let printMSG = logicf(buttonValue,randomChoice);
  scoreBoard (printMSG); // to update points as a log 
  comparator (printMSG) ; // to display user Vs computer score
  printStatus(buttonValue,randomChoice,printMSG);
  localStorage.setItem('SB', (JSON.stringify(points)));
}

function resetStorage(){
  points = { win: 0, lost: 0, tie: 0, uWin: 0, cWin: 0,};
  localStorage.clear ;
  localStorage.setItem('SB', JSON.stringify(points));
  document.querySelector('#comparator').innerText = `Your Score is ${points.uWin} Vs Computer Score is ${points.cWin}`;
  document.querySelector('#result').innerText = '' ;
}

let storedSB = JSON.parse(localStorage.getItem('SB'));
points = storedSB || { win: 0, lost: 0, tie: 0, uWin: 0, cWin: 0,} // using ternary shortcut method we can deine it in this way too
 // if(storedSB !== undefined){
//   points = storedSB ;
// } else {
//   points = { win: 0, lost: 0, tie: 0, uWin: 0, cWin: 0,} ; 
// };



// //Version 4 implementing objects in this code

// function x(){
//   let df = Math.random();
//   if (df < 0.33) {
//     return 'Bat' ;
//   } else if (df < 0.66) {
//     return 'Ball' ;
//   } else {
//     return 'Stump' ;
//   }  
// }

// function logicf(buttonValue, randomChoice){
//   if (buttonValue === randomChoice){
//     return 'Its a Tie' ;
//   } else if ((buttonValue === 'Bat' && randomChoice === 'Ball')||(buttonValue === 'Ball' && randomChoice === 'Stump')||(buttonValue === 'Stump' && randomChoice === 'Bat')) {
//     return 'You Win' ;
//   } else {
//     return 'You Lost';
//   }

// }

// function printStatus(buttonValue,randomChoice,printMSG){
//   document.querySelector('#result').innerText = `You have chosen to ${buttonValue}. Computer has chosen to ${randomChoice} and the result is ${printMSG}`;
//   document.querySelector('#comparator').innerText = `Your Score is ${points.uWin} Vs Computer Score is ${points.cWin}`;
// }

// function resultStatus (buttonValue){
//   let randomChoice = x();
//   let printMSG = logicf(buttonValue,randomChoice);
//   scoreBoard (printMSG); // to update points of as a log file
//   comparator (printMSG) ; // to display user Vs computer score
//   printStatus(buttonValue,randomChoice,printMSG);
// }

// // using points as a object to store the score
// let points = {
//   win: 0, lost: 0, tie: 0, uWin: 0, cWin: 0,
// }

// function scoreBoard(printMSG){
  
//     if (printMSG === 'You Win'){
//       points.win ++ ;
//     } else if (printMSG === 'You Lost'){
//       points.lost ++ ;
//     } else if (printMSG === 'Its a Tie'){
//       points.tie ++ ;
//     }
  
// }

// function comparator(printMSG){
//   if(printMSG === 'You Win'){
//     points.uWin ++ ;
//     points.cWin -- ; 

//   }else if(printMSG === 'You Lost') {
//     points.uWin -- ;
//     points.cWin ++ ;
//   }
//   console.log(points);
// }
  
// Iterated version 3 using function as an argument inside a function

// function x(){
//   let df = Math.random();
//   if (df < 0.33) {
//     return 'Bat' ;
//   } else if (df < 0.66) {
//     return 'Ball' ;
//   } else {
//     return 'Stump' ;
//   }  
// }

// function logicf(buttonValue, randomChoice){
//   if (buttonValue === randomChoice){
//     return 'Its a Tie' ;
//   } else if ((buttonValue === 'Bat' && randomChoice === 'Ball')||(buttonValue === 'Ball' && randomChoice === 'Stump')||(buttonValue === 'Stump' && randomChoice === 'Bat')) {
//     return 'You Win' ;
//   } else {
//     return 'You Lost';
//   }

// }

// function printStatus(buttonValue,randomChoice,printMSG){
//   document.querySelector('#result').innerHTML = `You have chosen to ${buttonValue}. Computer has chosen to ${randomChoice} and the result is ${printMSG}`;
// }

// function resultStatus (buttonValue){
//   let randomChoice = x();
//   let printMSG = logicf(buttonValue,randomChoice);
//   printStatus(buttonValue,randomChoice,printMSG);

// }
  


// Iterated Version 2
// let user2;
// let resultMsg;
// let buttonValue;

// function random() {
//   let decidingFactor = Math.random() ;
//   if (decidingFactor <= 0.333 ) {
//     user2 = 'Bat' ;
//   } else if (decidingFactor<= 0.66) {
//     user2 = 'Ball' ; 
//   } else {
//     user2 = 'Stump'
//   }
// }

// function button(){
//   if(buttonValue === user2){
//     resultMsg = 'Its a tie' ;
//   } else if ((buttonValue == 'Bat' && user2 == 'Ball')||(buttonValue == 'Ball' && user2 == 'Stump')||(buttonValue == 'Stump' && user2 == 'Bat')) {
//     resultMsg = 'You Won' ;
//   } else {
//     resultMsg = 'You Lost' ;
//   }
//   alert(`You have chosen to ${buttonValue}. Computer has chosen to ${user2} and the result is ${resultMsg}`);
//   document.querySelector('#result').innerHTML = `You have chosen to ${buttonValue}. Computer has chosen to ${user2} and the result is ${resultMsg}`;
// }


// Initial Code
/*commented the lines to make the code more easier ...else the code works perfectly fine but is bulky which uses more memory so we need to make code shorter
// random function is edited and used in the above code

function batButton(){
  if (user2 == 'Ball'){
    //document.querySelector('#result').innerHTML= `You have chosen Bat. Computer have chosen ${user2} and You Win`;
    //alert(`WINNNNN`);
    resultMsg = 'You won' ;
  }
  else if (user2 == 'Stump') {
    //document.querySelector('#result').innerHTML = 'You Lost' ;
    //alert(`LOST`) ;
    resultMsg = 'You Lost' ;
  }
  else if (user2 == 'Bat') {
    //document.querySelector('#result').innerHTML = 'Sheeeesh Its a Tie' ;
    //alert(`TIEEEE`) ;
    resultMsg = 'its a Tie' ;
  }
  document.querySelector('#result').innerHTML = `You Have Chosen BAT. Computer has chosen ${user2} and the result is ${resultMsg}` ;
}

function ballButton(){
  if (user2 == 'Bat'){
    //document.querySelector('#result').innerText = 'You Lost' ;
    //alert('LOST')
    resultMsg = 'You Lost' ;
  }
  else if (user2 == 'Stump') {
    //document.querySelector('#result').innerText = 'You Win' ;
    //alert(`WINNNN`) ;
    resultMsg = 'You won' ;
  }
  else if (user2 == 'Ball') {
    //document.querySelector('#result').innerText = 'Sheeeesh Its a Tie' ;
    //alert(`TIEEE`) ;
    resultMsg = 'its a Tie' ;
  }
  document.querySelector('#result').innerHTML = `You Have Chosen BALL. Computer has chosen ${user2} and the result is ${resultMsg}` ;
}

function stumpButton(){
  if (user2 == 'Bat'){
    //document.querySelector('#result').innerText = 'You Win' ;
    //alert('Win')
    resultMsg = 'You won' ;
  }
  else if (user2 == 'Ball') {
    //document.querySelector('#result').innerText = 'You Lost' ;
    //alert(`Losttt`) ;
    resultMsg = 'You Lost' ;
  }
  else if (user2 == 'Stump') {
    //document.querySelector('#result').innerText = 'Sheeeesh Its a Tie' ;
    //alert(`TIEEE`) ;
    resultMsg = 'its a Tie' ;
  }
  document.querySelector('#result').innerHTML = `You Have Chosen Stump. Computer has chosen ${user2} and the result is ${resultMsg}` ;
}

*/


  
  
