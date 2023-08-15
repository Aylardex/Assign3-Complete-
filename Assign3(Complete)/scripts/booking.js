/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let number_of_days=0;
let cost_per_day=35;

let calcCost = document.getElementById("calculated-cost");
const mon = document.getElementById("monday");
const tue = document.getElementById("tuesday");
const wed = document.getElementById("wednesday");
const thu = document.getElementById("thursday");
const fri = document.getElementById("friday");

const full = document.getElementById("full");
const half = document.getElementById("half");

const clear = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function dayClick(click) {
    const clickedDay = click.target;
    clickedDay.classList.toggle("clicked");

    if (clickedDay.classList.contains("clicked")){
        number_of_days++;
    }
    else{
        number_of_days--;
    }
    costCalc();
}


mon.addEventListener("click", dayClick);
tue.addEventListener("click", dayClick);
wed.addEventListener("click", dayClick);
thu.addEventListener("click", dayClick);
fri.addEventListener("click", dayClick);

full.addEventListener("click", fullButton);
half.addEventListener("click", halfButton);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearButton() {
    const allClicked = document.querySelectorAll(".clicked");
    allClicked.forEach(item => item.classList.remove("clicked"));
    number_of_days=0;
    full.classList.toggle("clicked");
    costCalc();
}

clear.addEventListener("click", clearButton);



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfButton(click) {
    const clickedTarget = click.target;
    clickedTarget.classList.toggle("clicked");

    if (clickedTarget.classList.contains("clicked")) {
        cost_per_day=20;
    }

    full.classList.toggle("clicked");

    costCalc();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullButton(click) {
    const clickedTarget = click.target;
    clickedTarget.classList.toggle("clicked");

    if (clickedTarget.classList.contains("clicked")){
        cost_per_day=35;
    }

    half.classList.toggle("clicked");

    costCalc();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function costCalc() {
    calculated = cost_per_day * number_of_days
    calcText = calculated.toString();
    calcCost.innerHTML = calcText
}
