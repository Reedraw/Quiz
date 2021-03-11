kahoot-clone-nodejs
===

# Deployment Notes:
1. Create Azure Resource Group
1. Within the Resource Group create Subscription Plan
1. Run this command from current folder: `az webapp create --resource-group <resource-group-name> --plan <service-plan-name> --name <application-name> --multicontainer-config-type compose --multicontainer-config-file docker-compose.yml`

## INSTRUCTIONS

### Running with Docker
1. Run `docker-compose up`
1. Open browser on `http://localhost:3000`

### Running manually
1. Install MongoDB: `sudo apt install mongodb -y`
1. Start MongoDB: `sudo service mongodb start`
1. Update file **server/server.js** changing MongoDB url from `mongodb://mongodb:27017` to `mongodb://localhost:27017/`
1. Install project dependencies: `node install`
1. Start server: `node server/server.js`
1. Open browser on `http://localhost:3000`

## Description
This project is a kahoot clone that uses nodejs and mongodb

Multiple games can be ongoing at one time and works with many players per game

## Screenshots
![Player Join](Screenshots/join.png)
![Host Lobby](Screenshots/hostJoin.png)
![Player](Screenshots/player.png)
![Question Results](Screenshots/questionResults.png)
![Host Question](Screenshots/hostQuestion.png)
![Player Results](Screenshots/incorrect.png)
