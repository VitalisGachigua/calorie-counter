const foodForm = document.getElementById("food-form");
const foodNameInput = document.getElementById("food-name");
const caloriesInput = document.getElementById("calories");

const foodList = document.getElementById("food-list");
const totalCalories = document.getElementById("total-calories");

const resetBtn = document.getElementById("reset-btn");

let foods = [];

foodForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const foodName = foodNameInput.value.trim();
    const calories = caloriesInput.value.trim();

    if (foodName === "" || calories === "") {
        alert("Please fill in all fields.");
        return;
    }

    console.log(foodName);
    console.log(calories);
});
