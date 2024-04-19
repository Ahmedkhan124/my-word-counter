#! /usr/bin/env node

import inquirer from "inquirer"

console.log('\nwelcome to my word counter:-\n');


const answer: {
    sentence: string
} = await inquirer.prompt(
    [
        {
         name: "sentence",
         type: "input",
         message: "Enter your sentence to count the words:",
         },   
        
    ]
);

const words = answer.sentence.trim().split(" ");

console.log(words);

console.log(`your sentence words count is: ${words.length}`);

console.log("\nThanks for using my word counter");
