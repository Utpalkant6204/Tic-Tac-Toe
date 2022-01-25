let music1 = new Audio('abc.wav');
let music2 = new Audio('over.wav');
let turn = "X";
let winsk = false;
let start = true;



const changeturn =()=>{
    if(turn === "X"){
        turn = "0";
    }
    else{
        turn = "X";
    }
    return turn;
}


const checkwin = () =>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6], 
    ]
    
    
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[1]].innerText===boxtexts[e[2]].innerText)&&boxtexts[e[0]].innerText!=='')
        {
            document.querySelector(".r").innerText = boxtexts[e[0]].innerText + " WON";
            winsk = true;
            music2.play();
        }
    })
}


let boxes = document.getElementsByClassName("box1");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        music1.play();
       if(winsk===false)
       {    
            if(boxtext.innerText === "")
            {
                //console.log(turn);
                boxtext.innerText = turn;
                changeturn();
                checkwin();
            }
       }
    })
})

let reset = document.getElementById("reset");
reset.addEventListener('click', ()=>{
    let boxtext1 = document.querySelectorAll('.boxtext');
    Array.from(boxtext1).forEach(element =>{
        element.innerText = ""
        document.querySelector(".r").innerText = ""
    })
    turn = "X";
        winsk = false;
    
})