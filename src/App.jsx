// import * as Unicons from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';
import TimeAndLocation from './components/TimeAndLocation';
import TopCities from './components/TopCities';
import UserInput from './components/UserInput';

const App = () => {
	const [currentCity, setCurrentCity] = useState('');

	// Fetch data for the captured city name
	useEffect(() => {
		const getWeatherData = () => {
			if (currentCity) {
				console.log(
					`Collect weather data about (${currentCity}) using Weather API`
				);
			}
		};

		getWeatherData();
	}, [currentCity]);

	return (
		<div className='box-border flex min-h-screen flex-col items-center scroll-smooth bg-gradient-to-br from-cyan-500 to-sky-600 pt-4 text-white sm:px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-20'>
			{/* Display favorite cities */}
			<TopCities setCurrentCity={setCurrentCity} />

			{/* Display search bar */}
			<UserInput currentCity={currentCity} setCurrentCity={setCurrentCity} />

			{/* Display selected city name */}
			{currentCity && <TimeAndLocation currentCity={currentCity} />}
		</div>
	);
};

export default App;
