# The Foodie Calorie Counter

A simple calorie tracking app built with html, JavaScript and Tailwind CSS. Users can add food items, track total calories, remove items, reset the list, and persist data using localStorage. 

---

## Features

- Add food items with calorie values
- Display list of added foods
- Remove individual items
- Auto-calculate total calories
- Reset daily log
- Persistent storage (localStorage)


---

## Tech Stack

- HTML5
- Tailwind CSS
- JavaScript 
- localStorage 

---

## Project Structure

---

## Core Logic

### Add Food
- Captures input values
- Creates food object `{ id, name, calories }`
- Pushes into `foods[]`
- Updates UI + storage

### Render Foods
- Clears DOM container
- Loops through `foods[]`
- Injects HTML dynamically

### Total Calories
- Reduces `foods[]` to a sum
- Updates UI

### Remove Food
- Filters `foods[]` by id
- Re-renders UI
- Updates storage

### Reset
- Clears array
- Clears UI
- Clears storage

---

