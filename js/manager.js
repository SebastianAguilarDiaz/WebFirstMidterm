scoreText=document.getElementById("number-text");
rulesButton=document.getElementById("rules-button");
gameArea=document.getElementById("game-area");



let options=["rock","paper","scissors","lizard","spock"]

gameArea.addEventListener("click",(e)=>{
    var a=0;
    if(e.target instanceof HTMLButtonElement)
        a=e.target;
    else if (e.target.parentElement instanceof HTMLButtonElement){
        a=e.target.parentElement;

    }
    else return;

    let choice = a.classList[1];

    let index=Math.floor(Math.random()*5);
    let computersChoice=options[index];
    console.log(choice);
    console.log(computersChoice);
    
});










