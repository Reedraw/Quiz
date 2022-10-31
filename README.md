kahoot-clone-nodejs
===

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

