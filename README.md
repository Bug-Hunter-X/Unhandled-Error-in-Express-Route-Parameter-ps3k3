# Express.js Route Parameter Error Handling

This repository demonstrates a common error in Express.js route handlers: the lack of error handling for invalid parameter values.  Specifically, this example shows a route that retrieves a user by ID, but fails to handle cases where the ID is invalid (e.g., not a number, not found in the database).

## The Bug
The `bug.js` file contains an Express.js route handler that retrieves a user based on an ID passed as a route parameter.  It lacks proper error handling, leading to potential crashes or unexpected behavior if an invalid ID is provided.

## The Solution
The `bugSolution.js` file demonstrates how to improve the route handler to gracefully handle invalid user IDs.  It includes error handling to check the validity of the ID and return appropriate error responses to the client.