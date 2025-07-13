let choices= document.querySelectorAll(".choice");
let user_msg= document.querySelector(".user-score");
let com_msg= document.querySelector(".computer-score");
let finalWin= document.querySelector(".result");
let userScore= 0;
let computerScore =0;

let playGame= (yourChoice)=>{
    let computerOption= ["scissor","paper","rock"];
    let ranNum= Math.floor(Math.random()*3);
    let computerChoice= computerOption[ranNum];
    console.log(computerChoice);
    if(computerChoice == yourChoice){
        // console.log("Draw");
        finalWin.innerText = "It\'s Draw "
    }
    else if((computerChoice == "scissor" && yourChoice == "rock")||
    (computerChoice == "paper" && yourChoice == "scissor")||
    (computerChoice == "rock" && yourChoice == "paper"))
    {
        finalWin.innerText = "You win!"
        user_msg.innerText = ++userScore;
    }
    else{
        finalWin.innerText = "You loose!"
        com_msg.innerText = ++computerScore;  
     }
}   
choices.forEach((option)=>{
    option.addEventListener("click",()=>{
        let userChoice= option.getAttribute("id");
        playGame(userChoice);
    }
    )
})