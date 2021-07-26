let name = prompt("What's up, can you let me know your name?");
console.log(name);
let userscore = 0;
alert(" Hello " + name + " welcome to Colin's guessing game");

let colin = prompt("Is my name spelled with two L's? y/n?").toLowerCase();
  if (colin === "no" || colin === "n"){
    alert("Thats correct!")
    userscore += 2;
  } else {
    alert("Incorrect!")
  }

  let myAge = prompt("Am I 23 years old? y/n?").toLowerCase();
   if (myAge === "no" || myAge === "n"){
     alert("That's correct!")
     userscore += 2;
   } else {
     alert("Close.. but no cigar " + name)
   }

   let midName = prompt("Is my middle name spelled Lewis? y/n?").toLowerCase();
    if (midName === "no" || midName === "n"){
      alert("Nice job " + name)
      userscore += 2;
    } else {
      alert("WOMP WOMP! Correct answer is Louis")
    }

    let twin = prompt("Am I a twin? y/n?").toLowerCase();
     if (twin === "yes" || twin === "y"){
       alert("Dang you're on a roll!")
       userscore += 2;
     } else {
       alert("Better luck next time " + name)
     }

     let birthPlace = prompt("Was I born in Memphis? y/n?").toLowerCase();
      if (birthPlace === "yes" || birthPlace === "y"){
        alert("YESSIR 901 SHELBY DRIVE LOOK ALIVE")
        userscore += 2;
      } else {
        alert("Sowwy.. but thats wrong")
      }

      alert("Thank you so much for playing, good day! " + name)

      let guessNumber = "Guess a number 1-10";
      let attempts = 4;
      let answer = 7;
      let response = null;

      while(response !== answer) {

        if(!attempts){
          alert("No more tries...");
          break;
       }

      response = parseInt(prompt(guessNumber));
      attempts -= 1;
       if (response === answer){
         alert("Perfect");
         userscore += 2;
       }

       if (response < answer){
         alert("Too low.. you get 4 tries " + name);
       }

       if (response > answer){
         alert("Too high.. you get 4 tries");
       }

    }

      let guessAnOption = "Guess a pet that I've had";
      let answers = ["fish", "dog"];
      response = null;
      attempts = 6;

      hasAttempts: while (attempts) {

        response = prompt(guessAnOption + " ..you got " + attempts + " attempts").toLowerCase();
        attempts -= 1;

        for (let i = 0; i < answers.length; i++) {
          if (response === answers[i]) {
            alert("Good job " + name + " You've made it to the end!");
            userscore += 2;
            break hasAttempts;
          }
        }

        alert("OOF.. thats not it");
      }

      if (!attempts){
        alert("Gosh darn no more tries.. better luck next time");
      }

      alert("Awesome guessing " + name + ". You've scored " + userscore + " out of 14 points");