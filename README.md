This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Live Site

https://gif-search-engine.netlify.com/

## Prerequisites

After cloning the repo, run `npm install` in the project directory.<br>
In order for the api to work, you need to use GIPHY's public beta API key since I have my private key stored in an environment variable.<br>

Visit https://rapidapi.com/giphy/api/giphy/details and copy the public beta key.

Go into `src/utils/apiSearch.js` and change `const API_KEY = process.env.REACT_APP_API_KEY;` to `const API_KEY = [public beta key]`

## Available Scripts

Now, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
