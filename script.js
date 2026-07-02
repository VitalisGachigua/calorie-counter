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

     const food = {
        id: Date.now(),
        name: foodName,
        calories: Number(calories)
    };

    foods.push(food);
    const foodHTML = `
        <div class="flex justify-between items-center bg-slate-100 p-3 rounded-lg mb-2">
            <div>
                <p class="font-semibold">${food.name}</p>
                <p class="text-sm text-gray-600">${food.calories} Calories</p>
            </div>

            <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">
                Remove
            </button>
        </div>
    `;

    foodList.innerHTML += foodHTML;
    
    console.log(foods);

    foodNameInput.value = "";
    caloriesInput.value = "";
});

    

