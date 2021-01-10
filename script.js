
console.log('super code loaded');
var game = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,}

let boxes = document.querySelectorAll('.block');
let digit = 0;
var result = "";
var wordLength = 0;
var wordTxt = "_ _ _ _ _";
var letter = "";
/*
wordTxt = document.querySelector("#gameWord").placeholder;
//document.querySelector("#gameWord").placeholder = "new word"
wordTxt = "new words";
wordLength = wordTxt.length;
console.log(wordLength);
console.log("wordTxt from game loop: " + wordTxt);

*/
const goButton = document.querySelector('#go-btn');

goButton.addEventListener("click", function(evt) {   //start game, big time parantheses here
evt.preventDefault();



//GAME LOOP
for(let i =0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function(evt){
   letter = this.textContent;
        wordTxt = document.querySelector('#gameWord').value
            wordLength = wordTxt.length;
            console.log(wordLength)
console.log("wordTxt from game loop: " + wordTxt)

//document.querySelector('#wordInput').textContent = wordTxt
wordTxt = wordTxt.toUpperCase();
       
    this.style.background = "yellow";
//console.log(this.textContent)
    console.log("digit:  " + digit); 
    console.log("just clicked this letter: " + letter)
    console.log("this is result after click:" + result)
    console.log("this is wordTxt after click" + wordTxt)
    //var wordTxt = document.querySelector('#gameWord').value
    wordTxt = wordTxt.toUpperCase();
        
        
//compare selection
//while loop here
        //while(digit <= wordLength){
            
            if(letter === wordTxt.charAt(digit) && digit < wordLength) {
               console.log("yes sir")
               digit = digit + 1;
               result = result + letter;
               document.querySelector('#wordInput').textContent = result;    
               console.log("this is wordTxt:" + wordTxt) 
               console.log("this is result:" + result) 
            }    
                    if (wordTxt == result) {
                    console.log("you won");
                    //document.write("you are a winnerz1")
                    console.log(game)
       }


       
    })}


///RESET GAME


 const resetButton = document.getElementById("resetButton");
    let resetter = document.querySelectorAll(".block")
    
resetButton.addEventListener("click", function(e1){




    console.log("test")
    result = "";
    document.querySelector('#wordInput').textContent = result;
    console.log("result reset:  " + result)
    wordLength= 0;
    wordTxt = "";
    console.log("wordTxt reset:  " + wordTxt)
    letter = "";
    digit = 0;
    document.querySelector("#gameWord").value = "";
    //document.getElementById("").placeholder = ""
    //wordTxt = document.querySelector("#gameWord").placeholder;
    //document.querySelector("#gameWord").placeholder = "new word"
    //wordTxt = "new words";
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
      game.b1 = 0;
      game.b2 = 0;
      game.b3 = 0;
      game.b4 = 0;
      game.b5 = 0;
      game.b6 = 0;
      game.b7 = 0;
      game.b8 = 0;
      game.b9 = 0;
   
        

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