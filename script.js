//Pseudocode for counter functions
//save current date into variable dateStarted
//grab current date = let that equal currentDate
//run function to compare dateStarted with currentDate, save difference as count, Lcount, Rcount
//if dates are equal, do nothing to date
    //apply counts from buttons
//if dates are not eqaul, 


// left lens counter display
let lCountDisplayElem = document.querySelector('.lCountDisplay');
let rCountDisplayElem = document.querySelector('.rCountDisplay');
//glasses counter
let counterMinusElem = document.querySelector('.counter-minus');
//slept in counter
let counterPlusElem = document.querySelector('.counter-plus');

//initial count for left lens counter
let lCount = 0;
//initial count for right lens counter
let rCount = 15;
//initial count for lens case counter
//let caseCount = 15;

updateCountDisplay();

counterPlusElem.addEventListener("click",()=>{
    lCount++;
    rCount++;
    updateCountDisplay();
});

counterMinusElem.addEventListener("click",()=>{
    lCount--;
    rCount--;
    updateCountDisplay();
})

function updateCountDisplay(){
    lCountDisplayElem.innerHTML = lCount;
    rCountDisplayElem.innerHTML = rCount;
    return 0;
};

console.log(lCount);

//keeps track of left contact lens age (days)
function lCounter(){
    //int counter to 0
    //while running, count++ every 24 hours
    //at count == 30, send 'alert', ask to reset count to 0?
    //if glasses is hit, count--
    //if sleep is hit, count++
    //if reset is hit, count == 0
}

//keeps track of right contact lens age (days)
function rCounter(){
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
