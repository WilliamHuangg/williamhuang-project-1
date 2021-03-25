# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **WILLIAM HUANG**

Time spent: **10** hours spent in total

Link to project: (https://glitch.com/edit/#!/obtainable-languid-crafter2021)

## Required Functionality

The following **required** functionality is complete:

* [Y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Y] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Y] Game buttons each light up and play a sound when clicked. 
* [Y] Computer plays back sequence of clues including sound and visual cue for each button
* [Y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Y] User wins the game after guessing a complete pattern
* [Y] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [Y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Y] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Y] More than 4 functional game buttons
* [Y] Playback speeds up on each turn
* [Y] Computer picks a different pattern each time the game is played
* [Y] Player only loses after 3 mistakes (instead of on the first mistake)
* [Y] Game button appearance change goes beyond color (e.g. add an image)
* [Y] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![]()
http://g.recordit.co/cM7DKKylYx.gif
http://g.recordit.co/uCaMFlXA3n.gif


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[ Throughout this project, I struggled when implementing the optional features. I used resources such as google, w3schools and stackoverflow to answer specific questions I had.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[ One of the biggest challenges I encountered was implementing my own audio into the program. Initially, I uploaded my audio files and created separate buttons to experiment if the audio would play. After I was able to confirm the audio works through the test buttons, I noticed I was only able to hear the audio for one instance, and that it was my mission to make the audio loop. I searched on google terms such as “how to make HTML audio file loop” and found a post on stackoverflow which was of much help to me. I was able to analyze the post and understood what I was missing from my own code. I had to add a line of code within the audio button function in JavaScript in order for my audio to repeat after ending. There was another instance I hit a wall when attempting to transfer the audio to the game buttons. My audio would play when the game was not active; when the game was active, I was only able to hear the beeps and boops from audio code that was provided. When I encountered this problem, my first idea was to look on google and see if other people had the same issue I did in the past. This was not successful as my loop attempt as I was not able to find any guidance. I looked back at my code and compared the given audio code with my own audio function to find out what was different. I studied the original audio code to fully understand how it works and how it calls or is called on by other functions. With my semi-working audio function, I replicated the original audio function by including the elements of “tonePlaying” and “setTimeout.” After doing this, the audio would still only play the beeps/boops when starting the game. I then went back to the startGame function and reread through all my code like a diagram. I was able to find out that my problem was not switching the function in “playSingleClue” to my new audio function as it kept calling on the original audio function. After switching the functions, I was able to hear my own audio when starting the game. ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[ After completing my submission, I am still curious on how to format the webpage uniquely. Currently the buttons and text are all formatted through css using terms such as ‘center.’ I want to know if there was a way to separate the buttons without using terms such as center. An example would be like if I wanted the buttons to be stacked as a staircase, how would I implement this? Additionally, I wanted to know how webpages are able to keep certain words or content on the page even though I am scrolling down the page. Some websites such as facebook, twitter or shopping websites have the feature where on the left or right side, the content is fixed and the centered screen changes as you browse. I am curious to learn how different websites are able to achieve this.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[ If I had a few more hours to work on this project, I would definitely add more features to the game. One of the features I had in mind was asking the user to input how many turns they wanted in order for them to win. I would have done this by creating an input box to allow the user to enter any number within the range of 1 to 10. Then their input would be used in the math.random function to create an array the length the user wanted. Another idea I had in mind was having a button to play a melody without starting the game. The melody button would also utilize the math.random function and play the audio files without needing for the user to guess.  ]



## License

    Copyright [WILLIAM HUANG]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.