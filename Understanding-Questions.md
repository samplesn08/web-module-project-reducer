# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onclick event fires, triggering the dispatch, which calls our addOne function.
* addOne triggers and returns the value '{type: ADD_ONE}' which is applied to our 1 button
* the ADD_ONE type makes the button increment the total by 1
...

* TotalDisplay shows the total plus 1.
