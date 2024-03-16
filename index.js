import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "ENTER FIRST NUMBER ", type: "number", name: "firstNumber" },
    { message: "ENTER SECOND NUMBER", type: "number", name: "secondNumber" },
    {
        message: "SELECT ONE OF THE OPERATORS TO PERFORM ACTIONS",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("PLEASE SELECT VALID OPERATOR");
}
