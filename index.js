#! /usr/bin/env node
//shabang
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "select one of the operators to perdorm operations",
        type: "list",
        name: "Operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
//condition statement
if (answer.Operators === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operators === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operators === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operators === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("select a valid operator");
}
