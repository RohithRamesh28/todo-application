Hi, this is the frontend of the repo(which holds the backend of the project) named: https://github.com/RohithRamesh28/secure-notes-fullstack/tree/master After clonning and installing all the required packages and intructions done below, Please clone this repo mentioned above.
🎨 How to Run the Frontend (React JS)
Step 1: Clone and Enter the Project Folder
Alright, first up — clone this repo if you haven’t already:

git clone https://github.com/your-username/secure-notes-frontend.git

cd secure-notes-frontend

Step 2: Install Node Modules
Before anything else, make sure you’ve got Node.js and npm installed.
You can check by running:

node -v
npm -v

Once that’s sorted, install all the packages:

npm install
This will go through the package.json file and install everything needed to run the frontend of this secure-notes-app.

Step 3: Start the Frontend Server
Now the fun part — run the dev server:

npm start
This will launch the app on:

http://localhost:3000
If port 3000 is busy, React will ask if it can run on a different one — feel free to say yes.

🧠 Connect to the Backend
This frontend talks to a backend running on:


http://localhost:8080
So make sure your FastAPI server is running on that port, or go to the frontend code (usually in a file like api.js ) and update the base URL accordingly.

📁 Folder Structure (Quick Idea)
Just so you don’t get lost:

components/        --> All reusable components
pages/             --> Login, Register, Dashboard, etc.
App.js             --> Main app file
index.js           --> Entry point
Simple and clean — made to understand everything as you build 💻✨

❗Heads Up
This project is made using VSCode, so I recommend running it there.

If VSCode gives you any suggestions (like missing extensions or ESLint stuff), go ahead and install them.

Don’t forget to start the backend first so your login and notes can work properly.

And that’s it!

You now have the frontend of Secure Notes App up and running — beautifully talking to your backend 🚀
