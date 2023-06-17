# ToDoList
WK 11 Practical 
# WK_11_Practical


# Purpose of API
# API handles backend functionality for a basic todo list
# Handles POST, PUT, GET, and DELETE requests
# POST requests are for creating a new list
# PUT requests are for updating or editing a list (it 'puts' in data)
# The first GET request provides the lists the user or users generated
# The other GET request is for accessing one specific todo list


# ROUTES
# router.get('/', toDoController.listToDo);
# router.post('/', toDoController.createToDo);
# router.get('/:id', toDoController.getToDo);
# router.put('/:id', toDoController.updateToDo)
# router.delete('/:id', toDoController.deleteToDo)


# Technologies Used
# JavaScript, mongoDB, mongodb-memory-server, dotenv, jest, supertest, mongoose, morgan, artillery.
# VS Code, GitHub


# json body:
# {
# "titlte": "string",
# "description": "stiring",
# "completed": "boolean"
# }


# To run
# npm run dev to open server and use Postman
# POST request. use /todos as root route;
# use json format above to create new list
# Click send
# Copy id. ONLY take integers and letters. No quotes.
# Paste after '/todos/' in url bar.
# Change POST to PUT
# Click send
# Sign in to MongoDB || Go to Database under "DEPLOYMENT" on left || Find "Browse Collections" in middle of screen and click || find database name "todos" || confirm PUT request went through
# npm run test to test endpoints and confirm they work in VS Code Terminal


# Load Testing;
# Several issues came up when attempting to install and run artillery; most common error message comes up as follows:
# timothycole@Timothys-MacBook-Pro wk11_practical % npm i artillery -D
# npm ERR! code ENOTEMPTY
# npm ERR! syscall rename
# npm ERR! path /Users/timothycole/software_homework/unit_2/wk11_practical/node_modules/app-module-path
# npm ERR! dest /Users/timothycole/software_homework/unit_2/wk11_practical/node_modules/app-module-path-SkCUI1Us
# npm ERR! errno -66
# npm ERR! ENOTEMPTY: directory not empty, rename '/Users/timothycole/software_homework/unit_2/wk11_practical/node_modules/app-module-path' -> '/Users/timothycole/software_homework/unit_2/wk11_practical/node_modules/.app-module-path-SkCUI1Us'
