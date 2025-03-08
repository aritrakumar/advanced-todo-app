# Advanced React To-Do Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Redux State Management](#redux-state-management)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is an **Advanced React To-Do Application** built with **React.js, Redux, React Router, and OpenWeather API**. It allows users to:

- Add, delete, and view tasks.
- View live weather data.
- Handle authentication using Redux.
- Persist tasks using local storage.

## Features

- ✅ **Redux for State Management**
- ✅ **React Router for Navigation**
- ✅ **Weather API Integration**
- ✅ **Fully Responsive Design**
- ✅ **Authentication (Mocked)**
- ✅ **Local Storage for Persistence**
- ✅ **Deployed on Netlify/Vercel**

## Project Structure

```
advanced-todo-app/
│── public/
│   ├── index.html
│── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskList.js
│   │   ├── WeatherDisplay.js
│   │   ├── Navbar.js
│   │   ├── Login.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Tasks.js
│   │   ├── LoginPage.js
│   │
│   ├── redux/
│   │   ├── store.js
│   │   ├── taskReducer.js
│   │   ├── authReducer.js
│   │   ├── taskActions.js
│   │   ├── authActions.js
│   │   ├── actionTypes.js
│   │
│   ├── utils/
│   │   ├── api.js
│   │
│   ├── styles/
│   │   ├── global.css
│   │
│   ├── App.js
│   ├── index.js
│   ├── .env
│   ├── README.md
│
│── package.json
│── .gitignore
│── .eslintrc.json
│── .prettierrc
```

## Installation and Setup

1. Clone this repository:

```sh
    git clone https://github.com/your-username/advanced-todo-app.git
    cd advanced-todo-app
```

2. Install dependencies:

```sh
    npm install
```

3. Set up your **.env** file:

```env
    REACT_APP_WEATHER_API_KEY=YOUR_WEATHER_API_KEY
```

> Replace `YOUR_WEATHER_API_KEY` with your actual API key from [OpenWeather](https://openweathermap.org/api).

4. Start the development server:

```sh
    npm start
```

## Usage

- **Login:** Click the `Login` button to simulate authentication.
- **Add Tasks:** Enter a task and press `Add Task`.
- **Delete Tasks:** Click `Delete` next to a task to remove it.
- **View Weather:** The app fetches and displays real-time weather data.

## Redux State Management

This project uses **Redux Thunk** for managing state:

- `taskReducer.js` → Handles **tasks** (add/delete)
- `authReducer.js` → Handles **authentication** (login/logout)
- `store.js` → Combines reducers and applies **Redux Thunk** middleware

## API Integration

This project integrates the **OpenWeather API** to fetch weather data.

- **API Call in `api.js`**

```js
export const fetchWeather = async (city) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );
  return response.data;
};
```

## Contributing

Feel free to fork this repository and submit a pull request!

## License

This project is licensed under the **MIT License**.
