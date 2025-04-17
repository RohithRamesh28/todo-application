# todo-application (Frontend)

Hi, this is the **frontend** of the repo (which holds the **backend** of the project) named: [secure-notes-fullstack](https://github.com/RohithRamesh28/secure-notes-fullstack)

After cloning and installing all the required packages as per the instructions below, please make sure to also clone and run the backend repo linked above.

---

## 🎨 How to Run the Frontend (React JS)

### Step 1: Clone and Enter the Project Folder

If you haven’t already, clone this repo:

```bash
git clone https://github.com/RohithRamesh28/todo-application.git
cd todo-application
```

### Step 2: Install Node Modules

Before proceeding, make sure you’ve got Node.js and npm installed. To verify:

```bash
node -v
npm -v
```

Once confirmed, install all the required packages:

```bash
npm install
```

This will install everything listed in `package.json` to get the frontend up and running.

### Step 3: Start the Frontend Server

Run the development server using:

```bash
npm start
```

This will launch the app at:

```
http://localhost:3000
```

If port 3000 is already in use, React will prompt you to use another port — go ahead and allow it.

---

## 🧠 Connect to the Backend

This frontend communicates with the backend hosted at:

```
http://localhost:8080
```

Make sure your FastAPI backend server is running on that port.

If needed, update the base URL in your frontend code (usually in a file like `api.js`) to match the backend address.

---

## 📁 Folder Structure (Quick Glance)

```
components/        --> All reusable components
pages/             --> Login, Register, Dashboard, etc.
App.js             --> Main app file
index.js           --> Entry point
```

Simple and clean — structured to help you understand each part as you build.

---

## ❗ Heads Up

This project was built using **VSCode**, and it’s recommended to run it there.

If VSCode gives you any suggestions (e.g., missing extensions or ESLint setup), feel free to install them.

Make sure to start the backend first so that features like login and notes sync correctly.

---

And that’s it! 🎉

You now have the frontend of the **Secure Notes App** up and running, fully connected with your backend 🚀
