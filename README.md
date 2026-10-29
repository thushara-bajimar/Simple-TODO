# Simple TODO App

A small, browser-based task list built with plain HTML, CSS, and JavaScript. Add tasks and remove them when they are done—no frameworks, dependencies, or build step required.

## Features

- Add a task using the text field and **Add Task** button.
- Delete a task using its **Delete** button.
- Uses event delegation for deleting both the sample tasks and tasks added later.
- Runs locally in a modern web browser.

## Getting started

1. Download or clone this project.
2. Open `todo.html` in a web browser.
3. Type a task in the field and select **Add Task**. Select **Delete** to remove a task.

You can also open the project folder in Visual Studio Code and use the Live Server extension if you prefer to serve the page locally.

## Project files

- `todo.html` — page structure and initial example tasks.
- `todo.css` — stylesheet (currently empty; the page uses browser default styles).
- `todo.js` — task creation and deletion behavior.

## Notes

Tasks are kept only in the current page session. Refreshing or closing the page resets the list to the example tasks in the HTML. The app does not currently validate blank input or save tasks between visits.

## Technologies

HTML · CSS · Vanilla JavaScript
