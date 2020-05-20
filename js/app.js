// OBJECT 1: recipe with ingredients, other characteristics, and the recipe description
var recipe = {
  name: "Pasta with sauteed mushrooms",
  ingredients: [
    "spaghetti",
    "mushrooms",
    "garlic",
    "olive oil",
    "salt",
    "pepper"
  ],
  category: "launch",
  cookingTime: 20,
  servings: 4,
  // Write "recipe.cook()" to run this code:
  cook: function () {
    console.log(`Boil the ${this.ingredients[0]}.
      At the same time, sauté the ${this.ingredients[1]} with the ${this.ingredients[2]} and
      the ${this.ingredients[3]} for 5 minutes. Then we add ${this.ingredients[4]} and ${this.ingredients[5]}.
      After 10 minutes put all ingredients together and stir.`);
  }
}


// OBJECT 2: laptop with characteristics and description
var myLaptop = {
  brand: "ASUS",
  model: "ZenBook Deluxe",
  processor: "Intel Core i7",
  color: "deep blue",
  isNew: true,
  light: 1.1,
  thin: 12.9,
  // Write "myLaptop.completeDescription()" to run this code:
  completeDescription: function () {
    console.log(`This laptop is an ${this.brand} ${this.model}, color ${this.color} and it has a ${this.processor} processor.`);
  }
}

// OBJECT 3: person with characteristics and a method to say hello
var person = {
  name: "Peter",
  city: "New York",
  age: 28,
  hasPet: true,
  currentJob: "frontend developer",
  // Write "person.sayHello()" to run this code:
  sayHello: function () {
    console.log(`Hello! This is ${this.name} from ${this.city}!`);
  }
}
