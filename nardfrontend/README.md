# NardBackEnd

Team
Nakiyyah Price /n
Adam Williams /n
Ricardo PenaMcKnight /n
Dean Grey /n

Proposal

PokéBattle Arena
Project Overview
The application, now called "PokéBattle Arena", allows users to engage in simulated Pokémon battles against the computer. The system will simulate real-time battles by considering each Pokémon's stats, moves, effects, and types, similar to how battles work in Pokémon games.
User Stories
The user will land on a page displaying two pokemon slots (user pokemon and opponent pokemon)
The user will be able to select their pokemon and their opponent pokemon randomly, from a list or by search.
A button will allow the user to initiate a battle once both pokemon have been selected.
If one or both pokemon have not been selected prior to clicking the button to initiate a battle then both pokemon will be chosen randomly.
An animation will play between pages during loading time.
The user will be redirected to the battle page which will display both pokemon on opposite sides of the screen as well as their names and health with a message log indicating what is taking place in the battle and allowing the user to select between moves during a selection phase.
Once the battle begins, the player will be prompted to choose between one of four moves which their pokemon will use for the turn during the combat phase.
Once the selection is made, speed will determine which pokemon will act first in combat.
A message will appear on screen during the combat phase indicating what move each pokemon is attempting to enact on its turn and whether or not it has succeeded or failed.
Moves that cause damage will cause a health near the pokemon’s name to decrease as appropriate.
Once health for either pokemon has reached zero the battle will end and the screen will display the name of the victorious monster.
The battle record will record the results of the battle and display them on a leaderboard page.
Once the battle is over the user will be redirected back from the battle page to the selection page.

MVP Goals
Pokemon selection
Custom movesets
Battle Simulation
Leaderboard
Battle Music

Stretch Goals
Expand to larger pokemon team (6)
User/Account Registration/Login/Management
Implement Items
Web Sockets for online multiplayer
Animated Moves
Custom Pokemon / Fakemon
Custom Moves
Battle Replays and Sharing
Team Battles
Custom Rules
Tournaments

Tech Stack
C#
Entity Framework Core (ORM)
SQL Server
Azure Cloud Server
ASP.NET Core (Web API Framework)
xUnit/Moq
Azure App Service (for application hosting)
React

Outside API
We will use the PokeAPI which will allow us to fetch Pokemon and Move data.

ERD

Wireframe
https://excalidraw.com/#json=kpz5nRY_Wv0GpT5h6J2mS,ptjazr5d8ZIYr_Ie5VkXCg

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
