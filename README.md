# Electron and React Template

reference project for using [React](https://reactjs.org/) in an [Electron](https://electronjs.org/) application, made using [Create React App](https://github.com/facebook/create-react-app) and [electron-builder](https://www.electron.build/)

------------------

## Available Scripts

In the project directory, you can run:

### `npm start`

Launches a dev instance of the app with **electron**.

### `npm run build`

Builds the **react** app for production and then builds & packages everything as an **electron** app for distribution/installation.

Edit the build configuration in `package.json` (see the [electron-builder docs on build configuration](https://www.electron.build/configuration/configuration#configuration))

### `npm run start-react`

Runs *ONLY* the **react** app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

(can specify a port for testing by changing it in the script and in `public/electron.js`)

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build-react`

Builds *ONLY* the **react** app for production to the `build` folder.