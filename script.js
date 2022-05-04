let lCountDisplayElem = document.querySelector(".lCountDisplay");
let rCountDisplayElem = document.querySelector(".rCountDisplay");
let caseCountElem = document.querySelector("#caseCounterDisplay");

let counterPlusElem = document.querySelector(".buttons.counterPlus");
let counterMinusElem = document.querySelector(".buttons.counterMinus");
let leftResetButtonElem = document.querySelector("#refreshButtonL"); 
let rightResetButtonElem = document.querySelector("#refreshButtonR");

//initial count for left lens counter
let lCount = 30;
//initial count for right lens counter
let rCount = 30;
//initial count for lens case counter
let caseCount = 90;

// local storage variables
let startDate; //change to dateStartedCounter
let startDay; //change to current day?

// data tracking variables
//let daysSleptInContacts = 0;
//let daysWornGlasses = 0;

checkStorageStartDate();
checkStorageLCounts();
checkStorageRCounts();
checkCaseCounts();
updateCountDisplay();
alertReplaceContacts();

//check to see if theres a start date saved already, if not, save todays date
function checkStorageStartDate(){
    if(localStorage.getItem('startDate')){
        startDate = localStorage.getItem('startDate');
    } else {
        startDate = new Date();
        startDay = startDate.getDate();
        localStorage.setItem('startDate', startDate);
        } 
}

//check if first time visiting, if not, update lCount
function checkStorageLCounts(){
    if(localStorage.getItem('leftCount')){
        lCount = localStorage.getItem('leftCount');
    } else {
        localStorage.setItem('leftCount', lCount);
    }
}

//check if first time visiting, if not, update rCount
function checkStorageRCounts(){
    if(localStorage.getItem('rightCount')){
        rCount = localStorage.getItem('rightCount');
    } else {
        localStorage.setItem('rightCount', rCount);
    }
}

//check if first time visiting, if not, update caseCount
function checkCaseCounts(){
    if(localStorage.getItem('caseCount')){
        caseCount = localStorage.getItem('caseCount');
    } else {
        localStorage.setItem('caseCount', 90);
    }
}

// when one, or both contact lenses counter hits 0, alert user it's time to replace.
function alertReplaceContacts() {
    if (lCount == 0 && rCount == 0) {
        if (confirm("It's time to replace your contacts. Reset countdown?")) {
            lCount = 30;
            rCount = 30;  
            lCountDisplayElem.innerHTML = lCount;
            rCountDisplayElem.innerHTML = rCount;
        } else {
            return 0;
        }
    } if (lCount == 0 && rCount > 0) {
        if (confirm("It's time to replace your left contact. Reset countdown?")) {
            lCount = 30;
            lCountDisplayElem.innerHTML = lCount;
        } else {
            return 0;
        }
    } if (lCount > 0 && rCount == 0) {
        if (confirm("It's time to replace your right contact. Reset countdown?")) {
            rCount = 30;
            rCountDisplayElem.innerHTML = rCount;
        } else {
            return 0;
        }
    } if (lCount < 0 || rCount < 0) {
        let daysPast = lCount * -1;
        if (confirm(`"Time to replace your contacts! It's ${daysPast} day(s) overdue!"`)) {
            rCount = 30;
            lCount = 30;
            updateCountDisplay();
            localStorage.setItem('leftCount', lCount);
            localStorage.setItem('rightCount', rCount);
        }
        
    }
}

//when slept-in button is pressed, add 1 to each contact lens count
counterPlusElem.addEventListener('click', () => {
    lCount++;
    rCount++;
    localStorage.setItem('leftCount', lCount);
    localStorage.setItem('rightCount', rCount);
    updateCountDisplay();
});

//when glasses button is pressed, subtract 1 from each contact lens count
counterMinusElem.addEventListener('click', () => {
    lCount--;
    rCount--;
    localStorage.setItem('leftCount', lCount);
    localStorage.setItem('rightCount', rCount);
    updateCountDisplay();
});

//when called, function updates the display to show correct counters
function updateCountDisplay(){
    lCountDisplayElem.innerHTML = lCount;
    rCountDisplayElem.innerHTML = rCount;
    caseCountElem = caseCount;
    alertReplaceContacts();
    //return 0;
};

//left contact counter is reset to zero, when left reset button is clicked
leftResetButtonElem.addEventListener('click', () => {
    lCount = 30;
    localStorage.setItem('leftCount', lCount);
    updateCountDisplay();
})

//right contact counter is reset to zero, when right reset button is clicked
rightResetButtonElem.addEventListener('click', () => {
    rCount = 30;
    localStorage.setItem('rightCount', rCount);
    updateCountDisplay();
})


/*current bugs / fixes

- alert function: when count reaches 0, and user is prompted to reset count to 30, reset isn't saved to local storage, and count is set to 0 again creating an endless loop. Only saves when any of the buttons are pressed

- caseCount not updating/ showing starting count of 90


*/