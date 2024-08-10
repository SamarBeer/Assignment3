/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 35; // Default to full day rate
let daysSelected = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const daysOfWeek = document.querySelectorAll('li');
daysOfWeek.forEach(day => {
    day.addEventListener('click', function() {
        // Toggle the "clicked" class and update daysSelected accordingly
        if (day.classList.contains('clicked')) {
            day.classList.remove('clicked');
            daysSelected--;
        } else {
            day.classList.add('clicked');
            daysSelected++;
        }
        costCalculation();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
const clearButton = document.getElementById('clear-button');
const calculatedCost = document.getElementById('calculated-cost');
clearButton.addEventListener('click', function() {
    daysOfWeek.forEach(day => day.classList.remove('clicked'));
    daysSelected = 0;
    costCalculation();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
const halfButton = document.getElementById('half');
const fullButton = document.getElementById('full');
halfButton.addEventListener('click', function() {
    dailyRate = 20; // Set daily rate to half-day
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    costCalculation();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.addEventListener('click', function() {
    dailyRate = 35; // Set daily rate to full-day
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    costCalculation();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function costCalculation() {
    const total = daysSelected * dailyRate;
    calculatedCost.innerHTML = `$${total}`;
}