# Day 17 - 20 

the third maze challenge

# create maze by doing a random walk

The Aldous-Broder Algorithm

The Aldous-Broder algorithm is an algorithm for generating *uniform spanning trees of a graph*. 
Uniform Spanning Tree means "a maze generated in such a way that it was randomly selected 
from a list of every possible maze to be generated." 

A maze generation algorithm that generates a uniform spanning tree is the only maze generation 
algorithm that could, theoretically, generate every maze possible. Hopefully, that makes a 
little more sense. They're probabilistically superior to most other maze generation algorithms, 
but that property makes these algorithms much more inefficient than the standard ones.

It starts by picking a random cell in the maze. Then, it jumps to a random neighbor of that cell. 
If that cell has not yet been visited, it connects it to the previous cell and marks it as 
visited. Then, it jumps to another random neighbor and does the same thing, continuously 
jumping randomly until all cells have been visited, at which point the algorithm terminates. 
This could take a very long time..


implement TODOs in [maze_05](maze_05.js)

push stable interim states to github