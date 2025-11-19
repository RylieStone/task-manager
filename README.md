## Available Scripts

In the project directory, you can run:

### `npm dev`
starts the frontend side of the application

### `npm server`
starts the backend side of the application

### `npm migrate`
updates the database to the latest version

### `npm rollback`
will rollback the database wiping all data before updating it to the latest version

### `npm start`
starts both the frontend and the backend of the application

### `npm test`
npm test runs the jest tests in test.js to ensure functionality of the code given

## API ENDPOINTS
The API follows standard CRUD practices involving a create, retrieve, update, and delete functionality accross 4 endpoints
### post /tasks
will create a task with a given name, creation time, and boolean ultilizing a { title, status, created } format

### get /tasks
will retrieve all the tasks listed in the database for use on the frontend client side

### patch /tasks/:id
will update the task making it either complete or incomplete depending on which is required by the user using the given Id and the status of the task

### delete /tasks/:id
with the id of the task itll delete the task from the database