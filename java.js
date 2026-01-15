let boxes = document.querySelectorAll(".button");
let resetButton = document.querySelector("#reset");
//let newgamecontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-btn");
let resetgamebtn = document.querySelector("#reset");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetgame = () => {
    turnO = true;
    enabledbtns();
    msg.classList.add("hide");

};

const newgame = () => {
    turnO = true;
    enabledbtns();
    msg.classList.add("hide");

};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerHTML = "O";
            turnO = false;

        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
})

let disabledbtns = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let enabledbtns = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `${winner} Won the Game!`;
    msg.classList.remove("hide");
    disabledbtns();
}



let checkwinner = () => {
    
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
            return; 
        }
    }

    
    let isDraw = true;

    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        msg.innerText = "Game Draw!";
        msg.classList.remove("hide");
    }
};


resetgamebtn.addEventListener("click", resetgame);
newbtn.addEventListener("click", newgame);



