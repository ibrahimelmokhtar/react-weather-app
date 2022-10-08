# Weather Journal App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Weather Journal App](#weather-journal-app)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
    - [`npm install`](#npm-install)
    - [`npm start`](#npm-start)
  - [Available Routes](#available-routes)
    - [`Home` Page](#home-page)
  - [Backend Server](#backend-server)
    - [`Get City Name`](#get-city-name)
    - [`Get Weather Data`](#get-weather-data)
  - [Installed NPM Packages](#installed-npm-packages)
    - [Production Packages](#production-packages)
    - [Development Packages](#development-packages)
  - [Useful Resources](#useful-resources)
  - [Credits & Assets](#credits--assets)

## Installation

[(Back to top)](#table-of-contents)

To use this project locally, you need to follow the commands below:

1. Clone the repository into your local machine:

   ```bash
   git clone https://github.com/ibrahimelmokhtar/react-weather-app.git
   ```

2. Redirect inside the cloned repository:

   ```bash
   cd react-weather-app/
   ```

3. Install the required packages:

   ```bash
   npm install
   ```

4. Copy `example.env` file into `.env` file.
5. Fill the created `.env` file with corresponding/appropriate information.
6. Start local server:

   ```bash
   npm start
   ```

7. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

[(Back to top)](#table-of-contents)

In the project directory, you can run:

### `npm install`

Installs the project's dependencies to start working with the code.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Available Routes

[(Back to top)](#table-of-contents)

### `Home` Page

Searches for weather at specific city name then Displays the obtained weather information.

## Backend Server

[(Back to top)](#table-of-contents)

All API calls are made using [OpenWeatherMap API](https://openweathermap.org/api), as follows:

### `Get City Name`

- Get city name from geo-location (longitude, latitude) information.
- Method Signature:

  ```javascript
  getCityNameFromCoords(lat, lon);
  ```

- Arguments:
  - `lat`: `Number` Latitude coordinate of desired city.
  - `lon`: `Number` Longitude coordinate of desired city.

- Returns:
  - `cityName`: `String` Desired city name.

### `Get Weather Data`

- Get weather data for specific city name using specific measurement unit (metric, or imperial).
- Method Signature:

  ```javascript
  getWeatherData(currentCity, degreeUnit);
  ```

- Arguments:
  - `currentCity`: `String` City name to search for.
  - `degreeUnit`: `String` desired measurement unit.

- Returns:
  - `fullWeatherData`: `Object` Obtained weather data after filtering desired information.

## Installed NPM Packages

[(Back to top)](#table-of-contents)

These packages are required to run this project smoothly without any errors.

### Production Packages

These packages can be found in the `"dependencies"` object inside the `package.json` file.

- [@iconscout/react-unicons](https://www.npmjs.com/package/@iconscout/react-unicons) - 1100+ vector icons as easy to use React Components.
- [luxon](https://www.npmjs.com/package/luxon) - Immutable date wrapper.
- [react-toastify](https://www.npmjs.com/package/react-toastify) - React notification made easy.

### Development Packages

These packages can be found in the `"devDependencies"` object inside the `package.json` file.

- [prettier](https://www.npmjs.com/package/prettier) - Prettier is an opinionated code formatter.
- [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss) - A Prettier plugin for sorting Tailwind CSS classes.
- [tailwindcss](https://www.npmjs.com/package/tailwindcss) - A utility-first CSS framework for rapidly building custom user interfaces.
- [autoprefixer](https://www.npmjs.com/package/autoprefixer) - Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website.
- [postcss](https://www.npmjs.com/package/postcss) - Tool for transforming styles with JS plugins.

## Useful Resources

[(Back to top)](#table-of-contents)

- [Documentation: OpenWeatherMap API - Current Weather Data](https://openweathermap.org/current)
- [Documentation: OpenWeatherMap API - One Call API 1.0](https://openweathermap.org/api/one-call-api)
- [Documentation: OpenWeatherMap API - Weather Conditions](https://openweathermap.org/weather-conditions)
- [Documentation: Getting Started with Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Documentation: Using React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- [Website: IconScout - Importing Icons](https://iconscout.com/unicons/explore/line)
- [Website: Weather Icons - Alternative Option](https://erikflowers.github.io/weather-icons/)

## Credits & Assets

[(Back to top)](#table-of-contents)

- Images are from [Unsplash](https://unsplash.com/)
- Fonts are from [Google Fonts](https://fonts.google.com/)
