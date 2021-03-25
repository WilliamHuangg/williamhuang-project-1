//Global Constants
// const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Global Variables
// var pattern = [2,2,4,3,2,1,2,4];
var pattern = []
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var strikes = 0;

function startGame(){
  //initialize game variables
  strikes = 0;
  random();
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
// const freqMap = {
//   1: 200,
//   2: 300,
//   3: 400,
//   4: 500,
//   5: 345,
//higher number = higher pitch
// }
// function playTone(btn,len){ 
//   o.frequency.value = freqMap[btn]
//   g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
//   tonePlaying = true
//   setTimeout(function(){
//     stopTone()
//   },len)
// }
// function startTone(btn){
//   if(!tonePlaying){
//     o.frequency.value = freqMap[btn]
//     g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
//     tonePlaying = true
//   }
// }
// function stopTone(){
//     g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
//     tonePlaying = false
// }

//Page Initialization
// Init Sound Synthesizer
// var context = new AudioContext()
// var o = context.createOscillator()
// var g = context.createGain()
// g.connect(context.destination)
// g.gain.setValueAtTime(0,context.currentTime)
// o.connect(g)
// o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// function playSingleClue(btn){
//   if(gamePlaying){
//     lightButton(btn);
//     playTone(btn,clueHoldTime);
//     setTimeout(clearButton,clueHoldTime,btn)
//   }
// }

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playSOUND(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn)
  }
}

function playClueSequence(){
  guessCounter = 0
  let delay = nextClueWaitTime;
  for(let i=0;i<=progress;i++){
    console.log("Playing single clue: "+pattern[i]+" in "+delay+" ms")
    console.log(progress)
    setTimeout(playSingleClue,delay,pattern[i])
    delay += clueHoldTime - 45*progress
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You Lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won!")
}

function guess(btn){
  console.log("user guessed: "+btn)
  if(!gamePlaying){
    return;
  }
  //game logic here
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length -1){
        winGame();
      }
      else{
        progress += 1;
        playClueSequence();
      }
    }
    else{
      guessCounter += 1;
    }
  }
  else{
    if (strikes ==2){
      loseGame();
    }
    else{    
      strikes += 1;
      alert("Warning! You now have "+strikes+" strike. 3 Strikes and you lose!")
      console.log("there are", strikes,"strikes");
    }

  }
  
}

function random(){
  for (let begin = 0; begin < 8; begin++)
  pattern.push((Math.floor(Math.random() * 5)+1));
  console.log(pattern)
}

function playSOUND(btn,len){
  tonePlaying = true  
  document.getElementById("audio"+btn).play()
  setTimeout(function(){
  audiofunctionSTOP(btn)
  },len)
}

function audiofunctionPLAY(btn){
  if(!tonePlaying){
  document.getElementById("audio"+btn).play()
  setTimeout(function(){
  // audiofunctionSTOP()
    tonePlaying = true
  })
}
// creates audio loop  
  document.getElementById("audio"+btn).addEventListener('ended', function(){
    this.currentTime = 0;
    this.play();
}, false);
}

function audiofunctionSTOP(btn){
  document.getElementById("audio"+btn).pause();
  this.currentTime = 1;
  tonePlaying = false
}