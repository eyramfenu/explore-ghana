// Called when the budget form is submitted.
function calculateBudget() {
    // Input values are strings; Number converts them into numbers.
    var days = Number(document.getElementById("days").value);
    var travellers = Number(document.getElementById("travellers").value);
    var stay = Number(document.getElementById("stay").value);
    var food = Number(document.getElementById("food").value);
    var transport = Number(document.getElementById("transport").value);
    var nights = days - 1;
    var total = travellers * (nights * stay + days * food) + transport;
    // Display a numeric result rounded to two decimal places.
    document.getElementById("result").textContent = "Estimated group total: GHS " + total.toFixed(2) + ". Activities and entry fees are extra.";
}
