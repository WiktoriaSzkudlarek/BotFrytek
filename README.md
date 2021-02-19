# Bot Frytek
Simple bot for discord server. <br />
His main function is showing upcoming events from Google Calendar.

## Getting started
First of all, you'll need [Node.js](https://nodejs.org/en/download/) and have to [create an discord app](https://discord.com/developers/applications). Next [turn on Google Calendar API](https://developers.google.com/calendar/quickstart/nodejs) (Step 1) and throw token file to the bot folder.

## What should you change in:
- index.js
  - Channel ID (line 65)
  - Bot token (line 69)
- config.json
  - Bot token (line 3)
- callendar.js: 
  - callendarID (line 82)

## Deployment
Go to the repository folder and:
```
#install dependencies  
npm install
#run the app
npm start
```
