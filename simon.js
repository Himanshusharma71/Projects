let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started==false){
        // alert("game is started");
        started=true;
        lavelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function lavelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let ranIndx=Math.floor(Math.random()*3);
    let rancolor=btns[ranIndx];
    let randbtn=document.querySelector(`.${rancolor}`);
    gameSeq.push(rancolor);
    gameFlash(randbtn);
}

function checkAns(idx){
    console.log(`current level is : ${level}`);

    // let idx=level -1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(lavelUp,1000);
        }
        console.log("same value");

    }else{
        h2.innerHTML=`game Over! Your score was <b>${level}</b> <br> Press any key to start game again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}




function btnpress(){
    // console.log(this);
    let btn=this;
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.push.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    started==false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

















