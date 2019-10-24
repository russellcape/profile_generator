const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  console.log(`Hello: ${answer1}`);
  rl.question("What's an activity you like doing? ", (answer2) => {
    console.log(`You said: ${answer2}`);
    rl.question("What do you listen to while doing that? ", (answer3) => {
      console.log(`You listen to: ${answer3}`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        console.log(`${answer4} is your favourtie meal!`);
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          console.log(`${answer5} is your favourtie thing to eat during ${answer4}!`);
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            console.log(`Your favourite sport is: ${answer6}!`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`You said: ${answer7}!`);
              rl.close();
            })
          })
        })
      })
    })
  })
})