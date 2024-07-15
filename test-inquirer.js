// test-inquirer
const inquirer = require('inquirer');

inquirer.createPromptModule()([
  {
    type: 'input',
    name: 'test',
    message: 'Is inquirer working?'
  }
]).then(answers => {
  console.log('Your answer:', answers.test);
});


