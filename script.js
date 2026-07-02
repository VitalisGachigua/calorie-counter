console.log("Script loaded");

const foodForm = document.getElementById("food-form");
const foodNameInput = document.getElementById("food-name");
const caloriesInput = document.getElementById("calories");

const foodList = document.getElementById("food-list");
const totalCalories = document.getElementById("total-calories");

const resetBtn = document.getElementById("reset-btn");

let foods = [];

function updateTotalCalories() {
    let total = 0;

    for (let i = 0; i < foods.length; i++) {
        total += foods[i].calories;
    }

    totalCalories.textContent = total + " kcal";
}

function renderFoods() {
    foodList.innerHTML = "";

    for (let i = 0; i < foods.length; i++) {

        const food = foods[i];

        const foodHTML = `
        <div class="flex justify-between items-center bg-slate-100 p-3 rounded-lg mb-2">
            <div>
                <p class="font-semibold">${food.name}</p>
                <p class="text-sm text-gray-600">${food.calories} Calories</p>
            </div>

            <button
                class="remove-btn bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                data-id="${food.id}">
                Remove
            </button>
        </div>
        `;

        foodList.innerHTML += foodHTML;
    }
}

function saveFoods() {
    localStorage.setItem("foods", JSON.stringify(foods));
}

foodForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const foodName = foodNameInput.value.trim();
    const calories = caloriesInput.value.trim();
    
    if (foodName === "" || calories === "") {
        alert("Please fill in all fields.");
        return;
    }

    const food = {
        id: Date.now(),
        name: foodName,
        calories: Number(calories)
    };

    foods.push(food);
    saveFoods();
    renderFoods();
    updateTotalCalories();
    
    foodNameInput.value = "";
    caloriesInput.value = "";
});

foodList.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
        const id = Number(event.target.dataset.id);
        foods = foods.filter(function (food) {
            return food.id !== id;
        });
        saveFoods();
        renderFoods();
        updateTotalCalories();
    }
});

resetBtn.addEventListener("click", function () {
      foods = [];
     saveFoods();
    renderFoods();
    updateTotalCalories();
});

window.addEventListener("load", function () {
const storedFoods = localStorage.getItem("foods");
    if (storedFoods) {
        foods = JSON.parse(storedFoods);
        renderFoods();
        updateTotalCalories();
    }
});