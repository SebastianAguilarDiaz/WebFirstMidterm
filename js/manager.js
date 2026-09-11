const scoreText=document.getElementById("number-text");
const rulesButton=document.getElementById("rules-button");
const gameArea=document.getElementById("game-area");

const duelArea = document.getElementById("duel-area");
const pickedItem = document.getElementById("picked-item");

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
});










