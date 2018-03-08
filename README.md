# Pixel Art Maker :art:

❗️**my NOTE**: color picker `<input type="color">` not working in Safari, in Chrome, Firefox it's fine.

## Project Rubric
Review the Pixel Art Maker project [rubric](https://review.udacity.com/#!/rubrics/641/view) carefully, and refer to it often while you build the project. If you want additional feedback, post in the course forums or Slack.

## Development Strategy
Before writing any code, try loading up `index.html` from the starter project to see how things look! Notice that the `design.js` file is implemented in the `<body>` tag in the `index.html` file. Your goal is to build out the `design.js` file to achieve all the interactive elements on the page!

Now, open up `design.js`. As you start writing your code, keep these three tasks in mind:

1. **Define your variables** by selecting the DOM elements that the user will interact with. This is where your jQuery skills can come into play! For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.
2. **Add event listeners** to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.
3. **Set the size of the cross stitch canvas** as an N by M grid with the `makeGrid()` function. Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. Each cell should have an event listener that sets the background color of the cell to the selected color.

Now test it! When you're done, you should be able to create a canvas of any size, choose a color using the color picker, and click on the canvas's table cells to set their color.

*****

:point_right: [Project Specification/Rubric](https://review.udacity.com/#!/rubrics/641/view)

:point_right:[View Online](https://jtrfs.github.io/pixel-art-maker/)

****
![](https://github.com/jtrfs/pixel-art-maker/blob/master/pixel-art-maker.png)

