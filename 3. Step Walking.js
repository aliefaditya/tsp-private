/**
 * Question
 * Suppose you want climb a staircase of N steps, and on each step you can take either 1 or 2 steps. How many distinct ways are there to climb the staircase? 
 * For example, if you wanted to climb 4 steps, you can take the following distinct number of steps:
 * 1) 1, 1, 1, 1
 * 2) 1, 1, 2
 * 3) 1, 2, 1
 * 4) 2, 1, 1
 * 5) 2, 2
 * 
 * So there are 5 distinct ways to climb 4 steps. We want to write a function, using recursion, that will produce the answer for any number of steps. 
 * ------------------------------------------
 * N = 3
 * Solution = (N - 1 steps) + (N - 2 steps)
 * Solution = (N = 2) + (N = 1)
 * Solution = (2) + (1)
 * Solution = 3

 * N = 4
 * Solution = (N - 1 steps) + (N - 2 steps)
 * Solution = (N = 3) + (N = 2)
 * Solution = (3) + (2)
 * Solution = 5
 */

function count_steps(steps){
    if (steps == 1) return 1;
    if (steps == 2) return 2;
    return count_steps(steps-1) + count_steps(steps-2);
}