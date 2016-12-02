# Node.js Starter Overview

The Node.js Starter demonstrates a simple, reusable Node.js web application based on the Express framework.

## Run the app locally

1. [Install Node.js][]
2. Download and extract the starter code from the Bluemix UI
3. cd into the app directory
4. Run `npm install` to install the app's dependencies
5. Run `npm start` to start the app
6. Access the running app in a browser at http://localhost:6001


## Pushing to bluemix
1. Connect to Bluemix `bluemix api https://api.ng.bluemix.net`
2. Log in to Bluemix. `bluemix login -u samiam239@live.com -o "CSC 4444 LSU" -s "Ants" -sso`
3. cf push "AntColongy"
4. Access the app via `AntColony.mybluemix.net`
[Install Node.js]: https://nodejs.org/en/download/
