# thehunter-call-of-the-companion

A webhelper for theHunter: Call of the Wild

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn deploy`

Creates a tar ball at the root folder called `build.tar.gz`.

1. Upload this as new release to git hub and copy the asset link.
2. SSH to server and run command `sh ~/cotw.release.sh 0.2.0` with the new release number as argument.

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### SSL

Setup cerificates with `certbot certonly --webroot -w /var/www/cotw.studiolus.com/public_html/ -d cotw.studiolus.com`

Renew certificates with `certbot renew`

https://pimylifeup.com/raspberry-pi-ssl-lets-encrypt/

https://certbot.eff.org/lets-encrypt/pip-nginx
