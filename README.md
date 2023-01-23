# Alternatives
Solo MVP Enhanced
A simple web app that allows you to visualize how much you food you can eat in exchange for a fast food.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
<img width="1440" alt="Screenshot 2023-01-14 at 13 13 41" src="https://user-images.githubusercontent.com/96904689/213948136-bb763674-c9b3-4642-bf26-dd49b35b505f.png">

## General info
This project is my first ever solo full-stack web application.
This project is something that will continuously evolve in the future. 
I hope you enjoy🍋


## Technologies
This project was created using:
* React
* TypeScript
* Node
* Express
* MongoDB
* FireBase/FireStore (Users Authentication)

## Setup
To setup this project, use the following steps to have make it ready locally:
Start off by running the server.
```
$ git clone 
```
** server-code
```
$ cd alternatives-server
$ npm install
$ npm run dev
```
After starting the back-end code, start the client-side code with: 

** front-end code
```
$ cd ..
$ cd alternatives-client
$ npm install
$ cd my-app
$ npm run build
```

After downloading all necessary dependencies, start the project by running the following commands:
```
$cd ..(if you are still in the client level)
$npm run concurrent
```

## Features
* Do HTTP requests to a third party api and attain information about nutritious foods.
* POST request to Postgres database to store data about the user selected items.
* GET request to Postgres to attain unhealthy food for calorie comparison.

### To Do:
* Get access to the api that includes more information about unhealthy food.
* Brush up on the UI design
* Fix bugs regarding update and delete(currently not included in the code base.)

# Sources
* The initial setup for this project was coded using @Jaymontojo.
* The api used for this app is from https://www.fruityvice.com/.


