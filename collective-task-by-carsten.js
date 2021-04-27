// # Learn by teaching?

// ## USAGE

// Fork this repository and once you are done, create a pull request of your work!

// ## INSTRUCTIONS

// Create a file based on your github username, for example "Req.js". Only edit that file, don't add any other files.
// Make sure that any code you add is formatted consistently and  very well (indentation levels are logical, for example).

// In that file, create 2 student tasks and solutions to each of the following concepts.

//     - How if-else statements work

// If Else #1
// Checks if a 2 remainder of a float number is larger than the 2 remainder of the same number but rounded (up or down).
// Display the boolean result in a sentence, i.e. "Remainder of <float> is larger than remainder of <rounded>."
// Start with -> let float = 3.14.

let float = 3.14;
let rounded = Math.round(float);
if (float % 2 > rounded % 2) {
  console.log(
    "Remainder of " + float + " is larger than remainder of " + rounded
  );
} else {
  console.log(
    "Remainder of " + float + " is less than remainder of " + rounded
  );
}

// If Else #2

// Check if colors mixed are fit to: Orange (mixed from Yellow and Red), Purple (mixed from Red and Blue), Green (mixed from Yellow and Blue).
// Display the result in full sentences, i.e. "Yellow mixed with Red is Orange."
// Other mixed colours displayed as "Unknown colour."

let colorYellow = "Yellow";
let colorRed = "Red";
let colorBlue = "Blue";

function colorMixer(color1, color2) {
  if (color1 == colorYellow && color2 == colorRed) {
    console.log(colorYellow + " mixed with " + colorRed + " is Orange");
  } else if (color1 == colorBlue && color2 == colorRed) {
    console.log(colorBlue + " mixed with " + colorRed + " is Purple");
  } else if (color1 == colorYellow && color2 == colorBlue) {
    console.log(colorYellow + " mixed with " + colorBlue + " is Green");
  } else {
    console.log("Unknown colour");
  }
}

colorMixer("Yellow", "Red");
colorMixer("Blue", "Red");
colorMixer("Yellow", "Blue");

//     - How switch statements work

// Switch #1
// Create a price finder function for the super market: Oranges cost EUR1.17 per kilo, Apples are EUR0.99 per kg, Bananas are expensive with EUR2.19 per kg and lemons are cheap with EUR0.67 / kg.
// Display the prices in short sentences, i.e. "Oranges: €<price> per kg".
// If input is any other fruit, display "<fruit> not available".
// Use switch statements.

let fruit;

function priceFinder(fruit) {
  switch (fruit) {
    case "Oranges":
      console.log("Oranges: €1.17 / kg");
      break;
    case "Apples":
      console.log("Apples: €0.99 / kg");
      break;
    case "Bananas":
      console.log("Today, Bananas are a little bit more expensive: €2.19 / kg");
      break;
    case "Lemons":
      console.log("Buy Lemons, because they're cheap today: €0.67 / kg");
      break;
    default:
      console.log(fruit + " not available");
  }
}

priceFinder("Avocado");

// Switch #2
// Check if incidents ars in conflict with Asimov's law for robots:
// 1. A robot may not injure a human being or, though inaction, allow a human being to come to harm.
// 2. A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.
// 3. A robot must protect its own existence as long a such protection does not conflict with the First or Second Laws.
// Incidents are: "Injuring of human being by a robot", "Uncontrolled robot as danger for human beings", "Other robot will injure human beings".

let incidentOne = "Injuring of human being by a robot";
let incidentTwo = "Uncontrolled robot as danger for human beings";
let incidentThree = "Other robot as danger for human beings";

function robotLawIncidents(incidents) {
  switch (incidents) {
    case incidentOne:
      console.log(
        incidentOne +
          "! Remark First Law: A robot may not injure a human being or, though inaction, allow a human being to come to harm."
      );
      break;
    case incidentTwo:
      console.log(
        incidentTwo +
          "! Remark Sescond Law: A robot must obey the orders given it by human beings except where such orders would conflict with the First Law."
      );
      break;
    case incidentThree:
      console.log(
        incidentThree +
          "! Remark Third Law: A robot must protect its own existence as long a such protection does not conflict with the First or Second Laws."
      );
      break;
    default:
      console.log("No robot law broken");
  }
}

robotLawIncidents(incidentThree);

//     - How loops work

// Loop #1
// Create a motivation engine to display 'Get one more step' for 5 times while displaying the current step number.

for (var i = 1; i <= 5; i++) {
  console.log(i + ". Get one more step!");
}

// Loop #2
// Create a countwdown engine displaying the backward counting numbers from 10 to: 0 = Ignition!

for (var b = 10; b >= 0; b--) {
  if (b == 0) {
    console.log("Ignition!");
  } else {
    console.log(b);
  }
}

//     - How functions work

// Function #1
// Create a function with 4 parameters and give them arguments, i.e. parameter #0 added with paramenter #1 is larger or less than paramter #3 multiplied  with parameter #4.
// Explain in short comments how the function works.

function compareSums(a, b, c, d) {
  let sum1 = a + b;
  let sum2 = c * d;
  if (sum1 > sum2) {
    console.log(a + " + " + b + " is larger than " + c + " * " + d);
  } else {
    console.log(a + " + " + b + " is less than or equal to " + c + " * " + d);
  }
}

compareSums(3, 4, 2, 2);

// Function #2
// Code the function above as a arrow functions.

const sumOne = (a, b, c, d) => a + b;
const sumTwo = (a, b, c, d) => c * d;
const compareSumSums = (sumOne, sumTwo) => {
  if (sumOne > sumTwo) {
    console.log(a + " + " + b + " is larger than " + c + " * " + d);
  } else {
    console.log(a + " + " + b + " is less than or equal to " + c + " * " + d);
  }
};

compareSumSums(2, 3, 2, 2);

//     - Solving problems with JavaScript (problems like we have had, such as counting sports scores or censoring words)

// Describe a solution using JavaScript to take an average of the latest soccer season.
// Soccer match finals are: 2:1; 3:3; 1:0; 1:1; 0:0.
// Explain how to achieve averages each of: won matches, lost matches, tie matches, shot goals, received goals.

soccerSeason = ["2 : 1", "3 : 3", "1 : 0", "1 : 1", "0 : 0"];
console.log("Number of matches in this season: " + soccerSeason.length);

let shotGoals;
let receivedGoals;
let sumShotGoals = 0;
let sumReceivedGoals = 0;
let wonMatches = 0;
let lostMatches = 0;
let tieMatches = 0;
for (var i = 0; i < 5; i++) {
  let matches = soccerSeason[i];
  console.log(matches);
  shotGoals = matches.slice(0, 1);
  console.log(shotGoals);
  sumShotGoals += parseInt(shotGoals);
  receivedGoals = matches.slice(4);
  console.log(receivedGoals);
  sumReceivedGoals += parseInt(receivedGoals);

  if (parseInt(shotGoals) > parseInt(receivedGoals)) {
    wonMatches += 1;
  } else if (parseInt(shotGoals) < parseInt(receivedGoals)) {
    lostMatches += 1;
  } else {
    tieMatches += 1;
  }
}
console.log("Sum of shot goals: " + sumShotGoals);
let averageShotGoals = sumShotGoals / soccerSeason.length;
console.log("Average of shot goals per match: " + averageShotGoals);
console.log("Sum ogf received goals: " + sumReceivedGoals);
let averageReceivedGoals = sumReceivedGoals / soccerSeason.length;
console.log("Average of received goals: " + averageReceivedGoals);
console.log("Won matches: " + wonMatches);
console.log("Lost matches: " + lostMatches);
console.log("Tie matches: " + tieMatches);

// For example (loops):

// ```
// // Task 5. Create a loop that prints out the message "Loopy!" 10 times.
// // Solution:
// for (let looper = 0; looper <= 10; looper++) { console.log("Loopy!"); }
// ```

// for (var i = 0; i <= 10; i++) {
//   console.log("Loopy");
// }
