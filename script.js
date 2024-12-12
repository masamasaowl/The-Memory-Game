let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let boxes = document.querySelectorAll(".box");
let welcome = document.querySelector("h3");

let level = 0;
let levelText = document.createElement("h4");


// ================== Random Box ===============
let randomNumber = Math.floor(Math.random() * boxes.length);

// boxes[0] = blue, boxes[1] = red, boxes[2] = yellow, boxes[3] = green
let randomBox = boxes[randomNumber];


// ==================== Arrays ==================
// these two arrays keep track of the clicked boxes
let gameSeq = [];
let userSeq = [];



// ================ Start of the game ============
document.addEventListener("DOMContentLoaded",() => {
    console.log("game started");
    // blinking of a random box at the start of the game
    randomBox.classList.add("blink");
    console.log(`random box is : ${randomBox.classList[1]}`);
});



// =================== Algorithm =================

// boxes is a node list so we use a iterator to apply event listener to all boxes
boxes.forEach(box => {
    box.addEventListener("click", () => {
        welcome.classList.add("remove");
        console.log(`you clicked on : ${box.classList[1]}`);

        // add the box in userSeq
        userSeq.push(box.classList[1]);
        console.log(`userSeq : [${userSeq}]`);

        levelUp();
        fruitFlash(box);
    } );
});

// a function to level up
function levelUp(){
    level++;
    levelText.innerText = `LEVEL : ${level}`;
    levelText.classList.add("press-start-2p-regular");
    welcome.after(levelText);
}

// a function to flash the box when clicked
function fruitFlash(clickBox){
    if (clickBox === blue) {
        clickBox.classList.add("blueBox");
    }
    else if (clickBox === red) {
        clickBox.classList.add("redBox")
    }
    else if (clickBox === yellow) {
        clickBox.classList.add("yellowBox")
    }
    else if (clickBox === green) {
        clickBox.classList.add("greenBox")
    };

    setTimeout(() => {
        clickBox.classList.remove("blueBox",'redBox','yellowBox','greenBox')
    }, 200);
};

// to keep generating random boxes
function newRandom (){
    
}








