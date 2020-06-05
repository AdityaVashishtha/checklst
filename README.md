# CheckLst-Tasks simplified
![Checklst task simplified](./readmeAssets/Logo.png)

## Introduction
Checklst is a simple task management application created with simplicity in mind. It is created as a part of Stack-Hack-1.0 hackathon. 


## Objective 
Main objective for creation of checklst is to provide simple yet elegant and mordern task management solution. It has been created considering user experience in mind.

## Features
1. Simple interface to add Task ✍🏻.
2. Assign label🔖 to task such as work, personal, shopping or others.
3. Track progress⏱ of task as Completed or In progress.
4. Filter🔑 task according to label.
5. Search👀 for specific tasks.
6. Love dark mode go Dark🧡.
7. Secure👩 task via loggin in with username and PIN.
8. Personalize your little interface⚙.
9. Responsive on every device.

## User Interface
A guide to use CheckLst
![Usage instruction for checklst](./readmeAssets/UI-Instruction.png)


## Screenshots
Login Screen
![Login screen](./readmeAssets/Login-SignupScreen.png)

Dashboard Empty
![Login screen](./readmeAssets/Dashboard-Empty.png)

Dashboard Full with Dark Mode
![Dashboard dark mode](./readmeAssets/Dashboard-Fullpng.png)

Tasks with Filter/Searching
![Tasks with Filter](./readmeAssets/Dashboard-Filterpng.png)
![Tasks with search](./readmeAssets/Dashboard-Dark-Mode-Search.png)

Responsiveness on mobile
![Responsiveness on mobile](./readmeAssets/Dashboard-Responsive.png)

## Setup Instruction

### Pre requisities
1. Install `MongoDb` and start that server with default settings.
2. Install `nodeJs` and `npm`.

### Download
1. Clone repository or download zip and extract it to a folder.
2. Open `terminal/cmd` on extracted folder.

### Client setup
1. `cd` into folder using `cd client`
2. Run `npm install` inside `client` folder.
3. Now run `npm run serve` to start server, it will start on `http://localhost:8080`
4. Go to browser to access it on `http://localhost:8080`

### Server Setup
1. `cd` into folder using `cd serve`
2. Run `npm install` inside `server` folder similar to client.
3. Go to `server\setup.js` and change `url` in `mongoose.connect` according to your installed instance as `mongodb://username:password@host:port/database`.
4. Now run `npm start` to start server, it will start on `http://localhost:3000`.

!! Great now you are ready for the show 😉 just open client app on browser and login there it will also register you during first  time.

Enjoy 🍻
 