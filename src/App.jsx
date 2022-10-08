// import * as Unicons from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';
import TopCities from './components/TopCities';
import UserInput from './components/UserInput';
import TemperatureDetails from './components/TemperatureDetails';
import * as weatherAPI from './apis/weatherAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const [userInput, setUserInput] = useState('');
	const [currentCity, setCurrentCity] = useState('');
	const [degreeUnit, setDegreeUnit] = useState('metric');
	const [weatherData, setWeatherData] = useState(null);

	/**
	 * @description Capitalize first letter of specific word
	 * @param {String} word
	 * @returns {String} Capitalized word
	 */
	const capitalizeWord = (word) =>
		`${word.charAt(0).toUpperCase()}${word.slice(1)}`;

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
						? toast.success(`Found data for ${capitalizeWord(currentCity)}`)
						: toast.error(`Can NOT find ${capitalizeWord(currentCity)}`);

					// Update state
					setWeatherData(data);
				} catch (error) {
					toast.error(`Can NOT find ${capitalizeWord(currentCity)}`);
					setWeatherData(null);
				}
			}
		};

		getWeatherData();
	}, [currentCity, degreeUnit]);

	return (
		<div className='box-border flex min-h-screen flex-col items-center scroll-smooth bg-gradient-to-br from-cyan-500 to-sky-600 pt-4 text-white sm:px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-20'>
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
