let counterLeftElem = document.querySelector('.counterLeft');
let counterRightElem = document.querySelector('.counterRight');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

//need to code these functions
refreshDisplayL();
refreshDisplayR();
resetCounter();

counterPlusElem.addEventListener("click", ()=>{
    count++;
    updateDisplay();
});

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterLeftElem.innerHTML = count;
    counterRightElem.innerHTML = count;
    console.log("count");
}

//keeps track of left contact lens age (days)
function lCount(){
    //int counter to 0
    //while running, count++ every 24 hours
    //at count == 30, send 'alert', ask to reset count to 0?
    //if glasses is hit, count--
    //if sleep is hit, count++
    //if reset is hit, count == 0
}

//keeps track of right contact lens age (days)
function rCount(){
    //int counter to 0
    //while running, count++ every 24 hours
    //at count == 30, send 'alert', ask to reset count to 0?
    //if glasses is hit, count--
    //if sleep is hit, count++
    //if reset is hit, count == 0
}

//keeps track contact case age (days)
function caseCounter(){
    //int counter to 0
    //while running, count ++ every 24 hours
    //at count == 90, sent 'alert', ask to reset count to 0?
    //if reset is hit, count == 0
}
