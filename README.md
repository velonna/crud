# WebServer + RestServer

> Test API with users
  
## Get Start

You have to run ``` npm i ``` to install all the dependencies.
And then run ``` npm run dev ``` to start the server.

## Config

Remember to create your file with environment variables.
``` .env ```
For this I leave you an example.
``` .env.example ```

## Routes

| Endpoint | HTTP | Description |
| --- | --- | --- |
| `/api/users` | GET | Retrieve all the users |
| `/api/users/:id` | GET | Retrieve a specific user with `id` |
| `/api/users` | POST | Create a new user |
| `/api/users/:id` | PUT | Update a existing user |
| `/api/users/:id` | DELETE | Remove a user |

| `/api/producto` | GET | Retrieve all the producto |
| `/api/producto/:id` | GET | Retrieve a specific producto with `id` |
| `/api/producto` | POST | Create a new producto |
| `/api/producto/:id` | PUT | Update a existing producto |
| `/api/producto/:id` | DELETE | Remove a producto |