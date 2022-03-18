# Bowling Challenge
![Screenshot](https://i.imgur.com/UaIJECM.png)

This is a bowling scorecard to count and sum the scores of a bowling game for one
player, written in JavaScript and tested with Jasmine. An interactive interface
has been created using jQuery.

A bowling game consists of 10 frames in which the player tries to knock down the
10 pins. In every frame the player can roll one or two times. The actual number
depends on strikes and spares. The score of a frame is the number of knocked down
pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

**Strikes**<br>
The player has a strike if he knocks down all 10 pins with the first roll in a frame.
The frame ends immediately (since there are no pins left for a second roll).
The bonus for that frame is the number of pins knocked down by the next two rolls.
That would be the next frame, unless the player rolls another strike.

**Spares**<br>
The player has a spare if the knocks down all 10 pins with the two rolls of a frame.
The bonus for that frame is the number of pins knocked down by the next roll
(first roll of next frame).

**10th frame**<br>
If the player rolls a strike or spare in the 10th frame they can roll the additional
balls for the bonus. But they can never roll more than 3 balls in the 10th frame.
The additional rolls only count for the bonus not for the regular frame count.

**Gutter Game**<br>
A Gutter Game is when the player never hits a pin (20 zero scores).

**Perfect Game**<br>
A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes
for the bonus in the 10th frame). The Perfect Game scores 300 points.


## How to use
Clone the repo to your local machine, change into the directory, then:
```
$ open index.html
```
Input your roll scores for each frame then click 'Calculate score' which will
display your running scores with the final score at the bottom in red.

Click 'Start a new game' to reset the scorecard.


## Run the tests
```
$ open SpecRunner.html
```

## Technologies used
* CSS
* HTML
* Jasmine
* JavaScript
* jQuery
