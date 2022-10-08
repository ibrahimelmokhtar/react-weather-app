// import * as Unicons from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';
import TopCities from './components/TopCities';
import UserInput from './components/UserInput';
import TemperatureDetails from './components/TemperatureDetails';
import * as weatherAPI from './apis/weatherAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DateTime } from 'luxon';

import clearSkyDayBgImage from './images/clear-sky-day.jpg';
import clearSkyNightBgImage from './images/clear-sky-night.jpg';
import cloudsDayBgImage from './images/clouds-day.jpg';
import cloudsNightBgImage from './images/clouds-night.jpg';
import mistDayBgImage from './images/mist-day.jpg';
import mistNightBgImage from './images/mist-night.jpg';
import rainDayBgImage from './images/rain-day.jpg';
import rainNightBgImage from './images/rain-night.jpg';
import snowDayBgImage from './images/snow-day.jpg';
import snowNightBgImage from './images/snow-night.jpg';
import thunderStormBgImage from './images/thunderstorm.jpg';

const App = () => {
	const BLUE_BACKGROUND = 'bg-gradient-to-br from-cyan-500 to-sky-600';
	// const ORANGE_BACKGROUND = 'bg-gradient-to-br from-yellow-500 to-orange-600';

	const [userInput, setUserInput] = useState('');
	const [currentCity, setCurrentCity] = useState('');
	const [degreeUnit, setDegreeUnit] = useState('metric');
	const [weatherData, setWeatherData] = useState(null);
	const [bgImage, setBgImage] = useState(BLUE_BACKGROUND);

	/**
	 * @description Capitalize first letter of specific word
	 * @param {String} word
	 * @returns {String} Capitalized word
	 */
	const capitalizeWord = (word) => {
		return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
	};

	/**
	 * @description Determine weather description
	 * @param {String} description
	 * @returns {String} Formatted weather description
	 */
	const getDescription = ({ description: dataDescription }) => {
		let description = '';
		if (dataDescription.includes('clear')) {
			description = 'clear-sky-';
		} else if (dataDescription.includes('clouds')) {
			description = 'clouds-';
		} else if (dataDescription.includes('rain')) {
			description = 'rain-';
		} else if (dataDescription.includes('thunder')) {
			description = 'thunderstorm-';
		} else if (dataDescription.includes('snow')) {
			description = 'snow-';
		} else if (dataDescription.includes('mist')) {
			description = 'mist-';
		}

		return description;
	};

	/**
	 * @description Determine local time (AM or PM)
	 * @param {Number} td
	 * @param {String} timezone
	 * @returns {String} Formatted weather local time
	 */
	const getLocalTime = ({ dt: timestamp, timezone }) => {
		const time = DateTime.fromSeconds(timestamp)
			.setZone(timezone)
			.toFormat('a');

		return time === 'AM' ? 'day' : 'night';
	};

	/**
	 * @description Obtain background image based on image title
	 * @param {Object} data
	 * @returns {String} Specific background image
	 */
	const updateBackgroundImage = (data) => {
		let image = BLUE_BACKGROUND;
		if (data) {
			const imageTitle = `${getDescription(data)}${getLocalTime(data)}`;
			switch (imageTitle) {
				case 'clear-sky-day':
					image = `url(${clearSkyDayBgImage})`;
					break;
				case 'clear-sky-night':
					image = `url(${clearSkyNightBgImage})`;
					break;
				case 'clouds-day':
					image = `url(${cloudsDayBgImage})`;
					break;
				case 'clouds-night':
					image = `url(${cloudsNightBgImage})`;
					break;
				case 'mist-day':
					image = `url(${mistDayBgImage})`;
					break;
				case 'mist-night':
					image = `url(${mistNightBgImage})`;
					break;
				case 'rain-day':
					image = `url(${rainDayBgImage})`;
					break;
				case 'rain-night':
					image = `url(${rainNightBgImage})`;
					break;
				case 'snow-day':
					image = `url(${snowDayBgImage})`;
					break;
				case 'snow-night':
					image = `url(${snowNightBgImage})`;
					break;
				case 'thunderstorm':
					image = `url(${thunderStormBgImage})`;
					break;
				default:
					image = BLUE_BACKGROUND;
					break;
			}
		}

		return image;
	};

	// Fetch data for the captured city name
	useEffect(() => {
		const getWeatherData = async () => {
			if (currentCity) {
				try {
					// Display info toast
					toast.info(
						`Fetching data for (${capitalizeWord(
							currentCity
						)}) using ${degreeUnit} units`
					);

					// Fetch data
					const data = await weatherAPI.getWeatherData(currentCity, degreeUnit);

					// Display appropriate message
					data
						? toast.success(`Found data for (${capitalizeWord(currentCity)})`)
						: toast.error(`Can NOT find (${capitalizeWord(currentCity)})`);

					// Update state
					setWeatherData(data);
				} catch (error) {
					toast.error(`Can NOT find (${capitalizeWord(currentCity)})`);
					setWeatherData(null);
				}
			} else {
				setWeatherData(null);
			}
		};

		getWeatherData();
	}, [currentCity, degreeUnit]);

	useEffect(() => {
		// Update background image:
		const image = updateBackgroundImage(weatherData);
		setBgImage(image);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [weatherData]);

	return (
		<div
			className={`box-border flex min-h-screen flex-col items-center scroll-smooth bg-gray-500 ${bgImage} bg-cover bg-center bg-no-repeat pt-4 text-white bg-blend-multiply sm:px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-20`}
			style={{
				backgroundImage: bgImage.includes('.jpg') ? bgImage : '',
			}}
		>
			{/* Display favorite cities */}
			<TopCities setUserInput={setUserInput} setCurrentCity={setCurrentCity} />

			{/* Display search bar */}
			<UserInput
				userInput={userInput}
				setUserInput={setUserInput}
				setCurrentCity={setCurrentCity}
			/>

			{/* Display selected city details */}
			{currentCity && weatherData && (
				<TemperatureDetails
					currentCity={currentCity}
					weatherData={weatherData}
					setDegreeUnit={setDegreeUnit}
				/>
			)}

			{/* Toast Messages */}
			<ToastContainer
				position='top-right'
				autoClose={2500}
				newestOnTop
				pauseOnHover
			/>
		</div>
	);
};

export default App;
