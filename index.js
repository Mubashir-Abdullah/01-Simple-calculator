#! /usr/bin/env node
import inquirer from "inquirer";
const aswer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second  number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//console.log(aswer);
//conditional statement 
if (aswer.operator === "Addition") {
    console.log(aswer.firstnumber + aswer.secondnumber);
}
else if (aswer.operator === "Subtraction") {
    console.log(aswer.firstnumber - aswer.secondnumber);
}
else if (aswer.operator === "Multiplication") {
    console.log(aswer.firstnumber * aswer.secondnumber);
}
else if (aswer.operator === "Division") {
    console.log(aswer.firstnumber / aswer.secondnumber);
}
else {
    console.log("plese select valid operator ");
}
