# Ticker Technical Test


## AUTHOR:  Julius Olatokunbo

## REASON:  Ticker Technical Test - Welcome to Arachnid Robotics

## HISTORY: 
## JO - Tuesday 4th January 2022 - Initial Version (1.0)
## JO - Tueaday 4th January 2022 - Added (-v) flag to Command line arguments to facilitate TicerRobot1() or TickerRobot2() functionality

## Usage

- `npm start -- --instructions="<input>"` (where `<input>` is the input string)


## -v 

- Adding the optional v flag `--v=2` will run TickerRobot2 software




### Assumptions

- Instructions that navigate the robot into NEGATIVE coordinate axis will result in no movement, i.e. the X-Axis and Y-Axis are assumed INFINITE 
- any movement into NEGATIVE coordinates from (0,0) will result in NO MOVEMENT 

- F / B Commands affect the Y Axis +/-1
- L / R Commands affect the X Axis -/+1


  Part 2
  Any B = BACKWARD command is ignored, i.e. in the t2.ts SWITCH statement we ignore 'B' commands.
  
  
### Ticker Technical Test
Please acknowledge receipt of this email
Please provide a link to a public Git repo containing your solution
Commit to the same repo at least at the completion of each part.
Feel free to document any assumptions you’ve made if the requirements are not clear (intentionally or otherwise – we’re not expecting questions during the test, so do your best and make assumptions as necessary).
We’d like to see solution in either JavaScript or preferably TypeScript
We’d like to see unit tests demonstrating correctness of your solution
Please email to advise when the last commit per part is done, and we’ll email you the next part.
There are 3 parts in total – we’d expect most candidates to complete parts 1 and 2, and part 3 as a stretch goal.
We’d advise spending no more than 2 hours total – hopefully it’s a fun puzzle to demonstrate how you tend to approach problems.
 



********************

## VERSION 1 - Ticker Robot 1

### Part 1 - Welcome to Arachnid Robotics, delivering you Robot Spiders(TM) for all your robotic spider needs

 

I know you've only just landed here, but here's the Mk1 Prototype. Management are really excited about this one, and they've got lots of tricks up their sleeves for the Mk2 and the Mk3 which the guys in the big white coats in the science labs are busy working on as we speak. 

 

So, I understand you're the new software guy? Perfect. We need a first version of the navigation and locomotion code written. 

 

To start off with, we want to be able to remotely control the spiders movements with some simple text commands. It won't be interactive, we're only able to send a single message to tell the robot spider where to go at the minute.

 

The mk1 robot can move forwards, backwards and side to side. The control system will send the instructions in a single string, for example:

 

F = FORWARDS

B = BACKWARDS

L = LEFT

R = RIGHT

 

FRRRFFFFRFRFFFRFFLRLFFFFLRFF

 

This unit doesn't have any sensor tech yet (sigh. they're really cheaping out with this Mk1 ...), so at the moment the robot will just go where you tell it. 

 

The test chamber is set up with a flat surface and you need to tell the Robot where it is to begin with - (0,0) is at the bottom left of the grid (x,y) co-ordinates

 

I need the Robot Control Interface to accept two parameters - where it is (x,y) and the command sequence (FFFFFLLLLRRRFFFFBRRRBLLL). 

 

Given these two the robot should be able to report where it is at the end.

 

Get that done, and then maybe the mk2 will be ready!

 

Commit your code to a git repo and then we'll get it loaded up into the Mk1 Prototype in the test chamber and tell it where to go!

 

Here's some test data: 

 

0,0,FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF = ?

3,6,FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF = ?

0,7,RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR =?


******************


## VERSION 2 - Ticker Robot 2

### Part 2 - Welcome to Arachnid Robotics, delivering you Robot Spiders(TM) for all your robotic spider needs

The mk2 has just arrived on my desk. Those robot nerds in white coats sure love cranking out these prototypes.

 

This robot has a few more bells and whistles, and this one is actually being prepped for a real life mission in the field!

 

So, management thought the robot scuttling from side to side was too "crab like" for a spider (sigh. marketing), so they 

want us to change the nav code to support the new rotation servo underneath the robot. 

 

A L or R command will now rotate the robot 90 degrees to the left or right, so now the F (Forwards) command will go in the direction the robot is facing. 

Management also thought the robot going backwards blindly was a bad idea after we lost that one into the fire pit, so now we need to turn it around and go in the direction we're facing if we need to head back the way we came.

 

The most exciting feature of the mk2 though is it's ability to GO UP WALLS :| It has sucker pads to stick to glass, and the first client for the mk2 wants to do glass inspections on high rise buildings.

So, same deal, we're going to provide the robot with a starting position on the glass, oriented from bottom, left (0,0) but we need to STOP the robot falling off the side of the building. 

 

So, the robot should ignore a command asking it to go into negative space. No more dead robots. RIP Kevin.

 

We still need to support the 500 mk1's we've got roaming around the place, so we'll need a strategy to cope with that somehow.



## Run the test cases

- `npm test` will execute the tests
