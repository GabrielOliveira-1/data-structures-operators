'use strict';

// Data needed for first part of the section
const restaurant = {
  restName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log('---- OR ----');
// Use any data type, return any data type, short-circuiting

// Short circuiting is -> if the first value is a truthy value, it will return it
console.log(3 || 'Gabriel');
console.log('' || 'Gabriel');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || 'Hello' || 23 || null);

restaurant.numGuests = 58;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Gabriel');
console.log(1 && 'Gabriel');

console.log('Hello' && 23 && null && 'Gabriel');

// Practice
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*

The OR operator will return the first truthy value of all the operands, OR simply the last value if all of them are falsy.

The AND operator will return the first falsy value or the last value if all of them are truthy.

For practical applications
We can use the OR operator to set default values and we can use the AND operator to execute code in the second operand if the first one is true.

*/

////////////////////////////////
// Rest pattern and parameters
// 1) Destructuring

// // SPREAD, because on the RIGHT side of = operator
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of = operator
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 7, 3, 7);
// add(6, 3, 1, 5, 7, 9, 8);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

/*

Rest is used to pack elements into an array, the patterns basically colects the patterns that are unused in the destructuring assignment

Rest pattern always must be the last of the ddestructuring assignment, otherwise Js would never know until when it should collect the rest of the array

And there only be one rest in any destructuring assignment

So with the spread operator we expand, and with the rest operator we compress

Spread operator is used where we would otherwise write values separated by commas

Rest patterns is used where we would otherwise write variable names separated by commas

*/

// // Spread Operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Gabriel';
// const letters = [...str, ' ', 'O.'];
// console.log(letters);

// const ingredients = [
//   prompt("let's make pasta! Ingredient 1"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.restName = 'Ristorante Roma';
// console.log(restaurantCopy.restName);
// console.log(restaurant.restName);

/*

Spread operator is useful for when we need the elements individually

Spread operator is a bit similar to destructuring, however, it takes elements from array and doesn't create new variables, so we can only use it in places where we would otherwise write values separated by commas.

Spread operator is good to create shallow copies of arrays, and to merge two arrays together.

Spread operator works in all iterables (arrays, strings, maps, sets) but not objects.

We can still only use the spread operator when building an array, or when we pass values into a function

It is not possible, for example, to use the spread operator inside a template literal, because multiple values separated by a comma are usually only expected when we pass arguments into a function or when we build a new array.

Since ES 2018, spread operator also works with objects!!!

*/

// // Destructuring Objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { restName, openingHours, categories } = restaurant;
// console.log(restName, openingHours, categories);

// const {
//   restName: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant; // menu = [] is called a 'default value'
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/*

Default value is useful when we do not have data hard-coded

*/

// ////////////////////////
// // Destructuring arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a functino
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p, q, r = 1] = [8, 9];
// console.log(p, q, r);

// /*

// Desctructuring -> It is basically a way to unpacking complex data structure into smaller data structures

// The original array is not affected

// */

///////////////////////
