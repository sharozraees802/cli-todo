import inquirer from "inquirer";
import gradient from 'gradient-string';
import figlet from "figlet";
const WelcomeScreen = () => {
    console.log(gradient('cyan', 'pink').multiline(figlet.textSync(`LastCode \n\ TODO CLI  !\n`), { interpolation: 'hsv' }) + '\n');
};
WelcomeScreen();
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "do you want to add more todo? ",
            default: false
        },
    ]);
    const { TODO, addmore } = answers;
    console.log("🚀 ~ file: index.ts:28 ~ answers", answers);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("🚀 ~ Your Todo List:");
    todos.forEach(element => {
        console.log("🚀 ~ file: index.ts:43 ~ element", element);
    });
}
else {
    console.log("No Todos Found");
}
