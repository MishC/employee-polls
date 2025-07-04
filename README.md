# Employee poll

A delicate webapp written in React with states stored in Redux store. Employees can add a poll (a question) with answers A or B. For each question, you can see details like who posed that question and who answered it. That employee with the biggest sum of questions asked + questions answered is the winner on the leaderboard.

### See live

[https://delicate-otter-cd5c3f.netlify.app/](https://delicate-otter-cd5c3f.netlify.app/)

Here you can see passwords and ids which you can use for login employee-polls/src/backend/_DATA.js

F.e. name: `sarahedo` password: `password123`


Please read the full task describtion in [here](https://github.com/MishC/employee-polls/tree/main/src#readme)


### What must be updated

1. Test files with Jest to catch possible errors.

2. To set up SQLite database to store questions and answers in backend. Now "fake database" where all data exist permanently are in the file employee-polls/src/backend/_DATA.js


### How to run a program

 1. Git clone [https://github.com/MishC/employee-polls.git](https://github.com/MishC/employee-polls.git)  and change directory to the project
 2. `npm install`
 3. `npm run dev` or `npm start`

!--  Explanation what CRA set up  -->    
    
##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

##### `npm test`

There are some jest files there initially. Must be updated.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

