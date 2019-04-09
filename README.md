# Cells-Rule-45

Andrew

Allie

Juan

Run Instructions: Open cell45.html in a web browser. Tested in Firefox.

Description: This program calculates generations of cells described by Wolfram ECA rule 150.

Architecture: This program uses Javascript to draw on canvases and logic.  It also uses HTML
to allow for animation of the Turing Machine.

Javascript Function:

1. A 2D array of 41 by 20 is created. 

2. 20 generations are processed according to rule 150 then stored in the 1D array "cells".

3. Turing machine traverses through the array, a second canvas is used to show the state.

4. Squares are created, colored, and added to the graph based on value in "cells".
