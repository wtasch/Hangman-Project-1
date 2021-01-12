
console.log('super code loaded');
resultsArray = [];
gameDisplayArray = [];
var clickCounter = 0;
var loopCounter = 0;
let boxes = document.querySelectorAll('.block');
var gameOver = 0;
var events = 0;
var result = "";
var wordLength = 0;
var wordTxt = "_ _ __";
var letter = "";
var noMatched = 0;
var noMatchCounter = 0;
var results = document.getElementById("gameDisplay");
const goButton = document.querySelector('#go-btn');
let selectWordtype = "";//document.querySelectorAll('.selectButton');

//hide hangman elements
document.querySelector(".vert").style.visibility = "hidden";
document.querySelector(".horz").style.visibility = "hidden";
document.querySelector(".head").style.visibility = "hidden";
document.querySelector(".chest").style.visibility = "hidden";
document.querySelector(".leftarm").style.visibility = "hidden";
document.querySelector(".rightarm").style.visibility = "hidden";
document.querySelector(".leftfoot").style.visibility = "hidden";
document.querySelector(".rightfoot").style.visibility = "hidden";

////selecto buttons
document.getElementById("gameWord").style.visibility = "hidden"
var manual = document.querySelector('#manual');


//Select type button s>>>>>>>>>>>>>>>>>
manual.addEventListener("click", function(e5) {
    this.style.background = "blue";
    document.querySelector('#random').style.background = "white";
    selectWordtype = "manual"
    document.getElementById("gameWord").style.visibility = "visible";
    gameOver = 1;

console.log(selectWordtype);}
)

var random = document.querySelector('#random');
random.addEventListener("click", function(e6) {
    this.style.background = "blue";
    document.querySelector('#manual').style.background = "white";
    selectWordtype = "random"
    document.getElementById("gameWord").style.visibility = "hidden";
    gameOver = 1;
console.log(selectWordtype);}
)

var words = [
'Horse',
'Dude',
'Dog',
'Truck',
'bird',
'Iguana',
'driving',
'animal',
'house',
'food',
'farm',
'automoble'
];
function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

 //start game, big time parantheses here================================START GAME BUTTON
goButton.addEventListener("click", function(evt) {  
evt.preventDefault();
gameOver = 0;
events = events + 1;


///RESET GAME++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++RESET
 const resetButton = document.getElementById("resetButton");
    let resetter = document.querySelectorAll(".block")
    
    function resetFunction(){
    document.getElementById("gameDisplay").innerHTML = "_____ _"
    resultsArray = [];
    gameArray = [];
    console.log("this is reuslt array in reset: " + resultsArray)
    console.log("this is game array in reset: " + gameArray)
    result = "";
    document.querySelector('#wordInput').textContent = result;
    wordLength= 0;
    wordTxt = "";
    letter = "";
    gameOver = 1;
    document.querySelector("#gameWord").value = "";
    wordLength = wordTxt.length;
    clickCounter = 0;
    noMatchCounter = 0;
    document.querySelector('#banner').textContent = "Start Playing";
    document.querySelector('#banner').style.background = "green";
    loopCounter = 0;
//hide hangman elements
/*
document.querySelector(".vert").style.visibility = "hidden";
document.querySelector(".horz").style.visibility = "hidden";
document.querySelector(".head").style.visibility = "hidden";
document.querySelector(".chest").style.visibility = "hidden";
document.querySelector(".leftarm").style.visibility = "hidden";
document.querySelector(".rightarm").style.visibility = "hidden";
document.querySelector(".leftfoot").style.visibility = "hidden";
document.querySelector(".rightfoot").style.visibility = "hidden";
*/

    for( let i =  0; i < boxes.length; i++) {
      resetter[i].style.background = "white";  
    }   
} //reset Function


resetButton.addEventListener("click", function(e1){
resetFunction();

})
    

//add random buttons stuff here
//Select type button s>>>>>>>>>>>>>>>>>
manual.addEventListener("click", function(e5) {
    this.style.background = "blue";
    document.querySelector('#random').style.background = "white";
    selectWordtype = "manual"
    document.getElementById("gameWord").style.visibility = "visible"
    gameOver = 1;
    resetFunction();

console.log(selectWordtype);}
)

var random = document.querySelector('#random');
random.addEventListener("click", function(e6) {
    this.style.background = "blue";
    document.querySelector('#manual').style.background = "white";
    selectWordtype = "random";
    gameOver = 1;
    document.getElementById("gameWord").style.visibility = "hidden";
    console.log(selectWordtype);
    resetFunction();}
)

var words = [
'Horse',
'Dude',
'Dog',
'Truck',
'bird',
'Iguana',
'driving',
'animal',
'house',
'food',
'farm',
'automoble'
];
function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

    //console.log(randomWord(words));

//end of random button stuff
if(gameOver === 1) {
   alert("Please Click Reset Game Button");
}

//load game work into array
if(selectWordtype == "manual") {
wordTxt = document.querySelector('#gameWord').value
} else {
wordTxt = randomWord(words)

}
wordTxt = wordTxt.toUpperCase();
var gameArray = wordTxt.split("");

//check for spaces
console.log("game arry here after" + gameArray)
for(i=0; i < wordTxt.length; i++) {
    if(gameArray[i] == " "){
        alert("Sorry, No Splaces Please");
    }}
 // loop to put dashes in display array
    for(j=0; j < wordTxt.length; j++) {
        resultsArray.push("_");
    }     
    gameDisplayArray = resultsArray.join("  ")
 
    document.getElementById("gameDisplay").innerHTML = gameDisplayArray;
    document.querySelector("#gameWord").value = "";
//GAME LOOP++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=======================
console.log("start   :" + gameOver)
if(gameOver === 1) {
    alert("Please Click Reset Game Button game loop");
 }


for(let m =0; m < boxes.length; m++) {
 
    boxes[m].addEventListener("click", function(evt){
    loopCounter = (loopCounter)+1 ;
    noMatched = 0;
    console.log("loopcounter" + loopCounter); 
clickCounter = (loopCounter/ events)
//var noMatchCounter = wordLength


console.log("this is clickCounter:  " + clickCounter);
console.log("events:  " + events)
document.querySelector('#counterDisplay').textContent ="Game Counter:  " + clickCounter + " Clicks far..."


if(gameOver == 0){
    
    
    letter = this.textContent;
   // console.log("this.textcontent" + this.textContent)
    wordLength = wordTxt.length;
   // console.log(wordLength)
    this.style.background = "red";
    wordTxt = wordTxt.toUpperCase();
   /*
    document.querySelector(".vert").style.visibility = "visible"
    console.log(document.querySelector(".vert").style.visibility)
    document.querySelector(".horz").style.visibility = "visible"
    document.querySelector(".head").style.visibility = "visible"
    document.querySelector(".chest").style.visibility = "visible"
    document.querySelector(".leftarm").style.visibility = "visible"
    document.querySelector(".rightarm").style.visibility = "visible"
    document.querySelector(".leftfoot").style.visibility = "visible"
    document.querySelector(".rightfoot").style.visibility = "visible"*/
    if (clickCounter < 8){
        document.querySelector('#banner').textContent = "Congnitive Load = " +wordLength;
        document.querySelector('#banner').style.background = "yellow";
    }
//if(gameOver === 1) {
  //  alert("Please Click Go Play Button"); }                   
// new code to computer  TWO arrays gameArray & resultsArray>>>>>>>>>>>>>>>>>>
            for(k=0; k < wordTxt.length; k++) {
                

                if(letter == gameArray[k]) {
                    this.style.background = "lightgreen";                    
                    resultsArray[k] = gameArray[k]; 
                    console.log("k: " +k)                  
                    result = resultsArray.join("");
                  //  console.log("this is wordTxt" + wordTxt);
                    document.getElementById("gameDisplay").innerHTML = resultsArray.join("  ");
                   // console.log(" this result:  " + result)
                   // console.log("yes sir");
                   // console.log("this is matching leter:  " + gameArray[k]);
                   // console.log("this is game array in loop:    " + gameArray);
                   // console.log("this is resultsArray in loop:  " + resultsArray);
                  //  console.log(gameOver)

                  }
                  if(letter != gameArray[k]) {
                      noMatched = noMatched + 1;                                          
                  }

                  if(noMatched == wordLength){                                        
                  noMatchCounter = noMatchCounter + 1;
                }
                console.log("noMatched:  " + noMatched)
                console.log("noMatchCounter:  " + noMatchCounter)
                console.log("word length:  " + wordLength)




                         if(noMatchCounter === 1) {
                     document.querySelector(".vert").style.visibility = "visible";
                     document.querySelector(".horz").style.visibility = "visible";
                        }
                       if(noMatchCounter === 2) {
                     document.querySelector(".head").style.visibility = "visible";
                         }
                        if(noMatchCounter === 3) {
                    document.querySelector(".chest").style.visibility = "visible";
                        }
                        if(noMatchCounter === 4) {
                        document.querySelector(".leftarm").style.visibility = "visible";
                        }
                        if(noMatchCounter === 5) {
                    document.querySelector(".rightarm").style.visibility = "visible";
                        }
                        if(noMatchCounter === 6) {
                    document.querySelector(".leftfoot").style.visibility = "visible";
                        }
                         if(noMatchCounter === 7){
                    document.querySelector(".rightfoot").style.visibility = "visible";
                         }
                         
                         //noMatched = 0;

                if (clickCounter > 6){
                    document.querySelector('#banner').textContent = "Game Over, Please Try Again";
                    document.querySelector('#banner').style.background = "red";
            }


                if (result == wordTxt) {
                             console.log("you won");
                             gameOver = 1;
                             resultsArray = [];
                             gameArray = [];
                             document.querySelector('#banner').textContent = "you Won, You're Brain is Working";
                             document.querySelector('#banner').style.background = "lightgreen";

                            }
                }//for loop
            }   //check for gameOver    
    })
}

} //game loop function




)//end event listener for go play button
   

    //let resetter = document.querySelectorAll(".block")
    //for( let i =  0; i < boxes.length; i++) {
      //resetter[i].style.background = "white";  
      //document.getElementById('winner').textContent = "Start Playing"};

        

    //const checkBlue = document.querySelector('.block').innerHTML;
    //console.log(checkBlue)
  
    
    //if(player === 0) {
       // this.style.background = "red";
       // player = 1;
       // document.getElementById('winner').textContent = "blue Player's Turn";
        //let letter = i + 1;
      
        //        if(spot === 1) {game.b1 = 2}
        // else if  (spot === 2) {game.b2 = 2}

    