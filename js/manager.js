const scoreText=document.getElementById("number-text");
const rulesButton=document.getElementById("rules-button");
const gameArea=document.getElementById("game-area");

const duelArea = document.getElementById("duel-area");
const pickedItem = document.getElementById("picked-item");
const computerItem=document.getElementById("computer-item");

const playAgain = document.getElementById("play-again");
const resultBlock = document.getElementById("result-block");

let score =localStorage.getItem("myScore");
console.log(score);
if (score==null) score=0;

let options=["rock","paper","scissors","lizard","spock"]
let rules={
    "rock":     ["scissors","lizard"],
    "paper":    ["rock","spcok"],
    "scissors": ["paper","lizard"],
    "lizard":   ["paper","spcok"],
    "spock":    ["scissors","rock"]
}


const addScore=()=>{
    score++;
};
const decreaseScore=()=>{
    score--;
};
const updateScore=()=>{
    scoreText.textContent=score;
    localStorage.setItem("myScore",score);
    
};

const wins=(choice1, choice2)=>{
    if(rules[choice1].includes(choice2)) return true;
    else return false;

};


// updating score at the beggining of the round
updateScore();


gameArea.addEventListener("click",(e)=>{
    var a=0;
    if(e.target instanceof HTMLButtonElement)
        a=e.target;
    else if (e.target.parentElement instanceof HTMLButtonElement){
        a=e.target.parentElement;

    }
    else return;

    let choice = a.classList[1];
    
    var index=-1;
    let computersChoice="";
    do{
    index = Math.floor(Math.random()*5);
    computersChoice=options[index];
    }while(computersChoice==choice)
        
    console.log(choice);
    console.log(computersChoice);
    console.log(wins(choice,computersChoice));

    

    gameArea.classList.add("d-none");
    duelArea.classList.remove("d-none");

    pickedItem.innerHTML = `
        <div class="choice ${choice}">
            <img
                src="./images/icon-${choice}.svg"
                alt="Lizard"
            >
        </div>
    `;


    computerItem.innerHTML=`
        <div class="choice ${computersChoice} style=" opacity:0 ;"">
            <img
                src="./images/icon-${computersChoice}.svg"
                alt="Lizard"
            >
        </div>
    `;
    var i=0;
    let step =0.01;
    computerItem.style.opacity=0;
    
    
    const fadeIn=()=>{
        if( i*step<1){
            computerItem.style.opacity=step * i;

            i++;
            setTimeout(fadeIn,1000*step);
        }

    }
    setTimeout(fadeIn,2000);
    setTimeout(()=>{
        if(wins(choice,computersChoice))addScore();
        else decreaseScore();
        updateScore();
        resultBlock.classList.remove("d-none");
    },2500)
});

playAgain.addEventListener("click", () => {
    duelArea.classList.add("d-none");
    gameArea.classList.remove("d-none");

    resultBlock.classList.add("d-none");
    computerItem.innerHTML = `<div class="placeholder"></div>`;
});






