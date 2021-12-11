let lCountDisplayElem = document.querySelector(".lCountDisplay");
let rCountDisplayElem = document.querySelector(".rCountDisplay");
let counterMinusElem = document.querySelector(".buttons.counterMinus");
let counterPlusElem = document.querySelector(".buttons.counterPlus");
let leftResetButtonElem = document.querySelector("#refreshButtonL"); 
let rightResetButtonElem = document.querySelector("#refreshButtonR");

//initial count for left lens counter
let lCount = 0;
//initial count for right lens counter
let rCount = 0;
//initial count for lens case counter
let caseCount = 0;

updateCountDisplay();

//when slept-in button is pressed, add 1 to each contact lens count
counterPlusElem.addEventListener('click', () => {
    lCount++;
    rCount++;
    updateCountDisplay();
});

//when glasses button is pressed, subtract 1 from each contact lens count
counterMinusElem.addEventListener('click', () => {
    lCount--;
    rCount--;
    updateCountDisplay();
});

//when called, function updates the display to show correct counters
function updateCountDisplay(){
    lCountDisplayElem.innerHTML = lCount;
    rCountDisplayElem.innerHTML = rCount;
    return 0;
};

//left contact counter is reset to zero, when left reset button is clicked
leftResetButtonElem.addEventListener('click', () => {
    lCount = 0;
    updateCountDisplay();
})

//right contact counter is reset to zero, when right reset button is clicked
rightResetButtonElem.addEventListener('click', () => {
    rCount = 0;
    updateCountDisplay();
})


// PSEUDOCODE_________________
// first, check if user is new, (not signed in?) or has already started the counter previously.

// if new, 
    // alert, 'hello, press here to begin count' (should it be a countdown?)
    // prompt user to enter days of current contact usage; lInput, rInput
        // lInput = lCount;
        // rInput = rCount;
    // begin counter, save timestamp to variable??? use cookies? cache? or database?
        //grab current date/timestamp = let that equal startDate

// if not new, update UI to show counter for user using startDate
    // run function to compare startDate with currentDate, save difference as count, lCount, rCount
    // loop this function? how often should it be updating?


// (ALERT) if lCount or/and rCount = 30 
    // alert user
    // prompt reset button, "Ready to change your contacts? This will reset the counters back to zero."
        // if yes
            // lCount = 0
            // rCount = 0
        // if no 
            // do nothing
        // alert once per day


// (ALERT) if caseCount =  90 for case
    // alert user
    // prompt reset button, "Ready to change your contact case? This will reset the counter back to zero."
        // if yes
            // caseCount = 0
        // if no 
            // do nothing
        // alert once per day



/*
//keeps track of left contact lens age (days)
function lCounter(){
    int counter to 0
    while running, count++ every 24 hours
    at count == 30, send 'alert', ask to reset count to 0?
    if glasses is hit, count--
    if sleep is hit, count++
    if reset is hit, count == 0
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
*/
