
console.log('super code loaded');
resultsArray = [];

let boxes = document.querySelectorAll('.block');
var gameOver = 0;
var result = "";
var wordLength = 0;
var wordTxt = "_ _ __";
var letter = "";
var results = document.getElementById("gameDisplay");
const goButton = document.querySelector('#go-btn');
let selectWordtype = "";//document.querySelectorAll('.selectButton');
////selecto buttons
document.getElementById("gameWord").style.visibility = "hidden"
var manual = document.querySelector('#manual');
manual.addEventListener("click", function(e5) {
    this.style.background = "blue";
    document.querySelector('#random').style.background = "white";
    selectWordtype = "manual"
    document.getElementById("gameWord").style.visibility = "visible"

console.log(selectWordtype);}
)

var random = document.querySelector('#random');
random.addEventListener("click", function(e6) {
    this.style.background = "blue";
    document.querySelector('#manual').style.background = "white";
    selectWordtype = "random"
    document.getElementById("gameWord").style.visibility = "hidden"
console.log(selectWordtype);}
)

/*for(let i =0; i < selectWordtype.length; i++) {
    selectWordtype[i].addEventListener("click", function(e3){
        //document.getElementById("manual").innerHTML = "_____ _"
        this.style.background = "blue";
        this.style.background = "red";
        console.log(this)
    }
    
    )}
*/

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



//for(var x=0; x<20; x++)
    console.log(randomWord(words));



goButton.addEventListener("click", function(evt) {   //start game, big time parantheses here
evt.preventDefault();
//gameOver = 0;

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
console.log("game arry here" + gameArray)
for(i=0; i < wordTxt.length; i++) {
    if(gameArray[i] == " "){
        alert("Sorry, No Splaces Please");
    }}
 // loop to put dashes in display array
    for(i=0; i < wordTxt.length; i++) {
        resultsArray.push("_");
    }     
     
//GAME LOOP
console.log("start" + gameOver)

for(let i =0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function(evt){
if(gameOver == 0){
    



    letter = this.textContent;
    wordLength = wordTxt.length;
    console.log(wordLength)
    this.style.background = "red";
    wordTxt = wordTxt.toUpperCase();
//if(gameOver === 1) {
  //  alert("Please Click Go Play Button"); }                   
// new code to computer  TWO arrays gameArray & resultsArray>>>>>>>>>>>>>>>>>>
            for(i=0; i < wordTxt.length; i++) {





                if(letter == gameArray[i]) {
                    this.style.background = "lightgreen";                    
                    resultsArray[i] = gameArray[i];                   
                    result = resultsArray.join("");
                    console.log(wordTxt);
                    document.getElementById("gameDisplay").innerHTML = result;
                    console.log(" this result:  " + result)
                    console.log("yes sir");
                    console.log("this is matching leter:  " + gameArray[i]);
                    console.log("this is game array in loop:    " + gameArray);
                    console.log("this is resultsArray in loop:  " + resultsArray);
                    console.log(gameOver)
                } //reset
//if(gameOver === 1) {
 //   alert("Please Click Go Play Button");
//}

                    
                            if (result == wordTxt) {
                             console.log("you won");
                             gameOver = 1;
                             
                             //for( let i =  0; i < boxes.length; i++) {
                               // resetter[i].style.background = "white";  
                             // }

                            }


                }


            }       






    })}


///RESET GAME++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++RESET
 const resetButton = document.getElementById("resetButton");
    let resetter = document.querySelectorAll(".block")
    
resetButton.addEventListener("click", function(e1){


    ///new reset code here
    document.getElementById("gameDisplay").innerHTML = "_____ _"
    resultsArray = [];
    result = "";
    document.querySelector('#wordInput').textContent = result;
    wordLength= 0;
    wordTxt = "";
    letter = "";
    gameOver = 0;
    document.querySelector("#gameWord").value = "";
    wordLength = wordTxt.length;

    for( let i =  0; i < boxes.length; i++) {
      resetter[i].style.background = "white";  
    }
})

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

    //}}})






/*
let player = 0;
let boxPlayed = [];
document.querySelector(".block").style.background = "white";
const checkBlue = document.querySelector('.block').style.backgroundColor;
}

let boxes = document.querySelectorAll('.block');

for(let i =0; i< boxes.length; i++) {
boxes[i].addEventListener("click", function(evt){
    const checkBlue = document.querySelector('.block').style.backgroundColor;
    console.log(checkBlue)
  
    //console.log(game.["i"])
    if(player === 0) {
        this.style.background = "red";
        player = 1;
        document.getElementById('winner').textContent = "blue Player's Turn";
        let spot = i + 1;
      
                if(spot === 1) {game.b1 = 2}
         else if  (spot === 2) {game.b2 = 2}
         else if  (spot === 3) {game.b3 = 2}
         else if  (spot === 4) {game.b4 = 2}
         else if  (spot === 5) {game.b5 = 2}
         else if  (spot === 6) {game.b6 = 2}
         else if  (spot === 7) {game.b7 = 2}
         else if  (spot === 8) {game.b8 = 2}
                          else {game.b9 = 2};
            
         if(2 === game.b1 && 2 === game.b2 && 2 === game.b3
        ||2 === game.b4 && 2 === game.b5 && 2 === game.b6
        ||2 === game.b7 && 2 === game.b8 && 2 === game.b9
        ||2 === game.b1 && 2 === game.b5 && 2 === game.b9
        ||2 === game.b7 && 2 === game.b5 && 2 === game.b3
        ||2 === game.b1 && 2 === game.b4 && 2 === game.b7
        ||2 === game.b2 && 2 === game.b5 && 2 === game.b8  
        ||2 === game.b3 && 2 === game.b6 && 2 === game.b9                        
                            
                            )
                            {
                              document.getElementById('winner').textContent = "Red Player Won";
                            console.log("winner");
                           
                            
        }else if(0 !== game.b1 && 0 !== game.b2 && 0 !== game.b3
        && 0 !== game.b4 && 0 !== game.b5 && 0 !== game.b6
        && 0 !== game.b7 && 0 !== game.b8 && 0 !== game.b9
        ){ document.getElementById('winner').textContent = "It's a Tie,  Hit Reset to Play again"
        console.log("winner")};
        

         
       console.log(game)
    
        console.log("should be 22  :" + game.b1)
        //removeEventListener("click", function(evt){
            //console.log("removed")
            }else{
            this.style.background = "blue";
            player = 0;
            document.getElementById('winner').textContent = "Red Player's Turn";
            
            let spot2 = i + 1;
            

                if(spot2 === 1){game.b1 = 3}
            else if  (spot2 === 2) {game.b2 = 3}
            else if  (spot2 === 3) {game.b3 = 3}
            else if  (spot2 === 4) {game.b4 = 3}
            else if  (spot2 === 5) {game.b5 = 3}
            else if  (spot2 === 6) {game.b6 = 3}
            else if  (spot2 === 7) {game.b7 = 3}
            else if  (spot2 === 8) {game.b8 = 3}
                             else {game.b9 = 3};

                             if(3 === game.b1 && 3 === game.b2 && 3 === game.b3
                                ||3 === game.b4 && 3 === game.b5 && 3 === game.b6
                                ||3 === game.b7 && 3 === game.b8 && 3 === game.b9
                                ||3 === game.b1 && 3 === game.b5 && 3 === game.b9
                                ||3 === game.b7 && 3 === game.b5 && 3 === game.b3
                                ||3 === game.b1 && 3 === game.b4 && 3 === game.b7
                                ||3 === game.b2 && 3 === game.b5 && 3 === game.b8                       
                                ||3 === game.b3 && 3 === game.b6 && 3 === game.b9    
                                ){
                document.getElementById('winner').textContent = "Blue Player Won"
                console.log("winner")
            }else if
                (0 !== game.b1 && 0 !== game.b2 && 0 !== game.b3
                && 0 !== game.b4 && 0 !== game.b5 && 0 !== game.b6
                && 0 !== game.b7 && 0 !== game.b8 && 0 !== game.b9
                ){ document.getElementById('winner').textContent = "It's a Tie,  Hit Reset to Play again"
                                    console.log("winner")};;
                              console.log(game)
   

                }
                if(2 === game.b2 && 2 === game.b3){
                    console.log("winner")};
   
                console.log(game)
        })

if(2 === game.b2 && 2 === game.b3){
    console.log("winner")};
    
    
    game.b1 = 0;
    game.b2 = 0;
    game.b3 = 0;
    game.b4 = 0;
    game.b5 = 0;
    game.b6 = 0;
    game.b7 = 0;
    game.b8 = 0;
    game.b9 = 0;

    
}

    

const resetButton = document.getElementById("resetArea");

resetButton.addEventListener("click", function(e1){
    console.log("test")

    let resetter = document.querySelectorAll(".block")
    for( let i =  0; i < boxes.length; i++) {
      resetter[i].style.background = "white";  
      document.getElementById('winner').textContent = "Start Playing"};
      game.b1 = 0;
      game.b2 = 0;
      game.b3 = 0;
      game.b4 = 0;
      game.b5 = 0;
      game.b6 = 0;
      game.b7 = 0;
      game.b8 = 0;
      game.b9 = 0;
   
        
})
*/