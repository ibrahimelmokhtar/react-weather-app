// import * as Unicons from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';
import TopCities from './components/TopCities';
import UserInput from './components/UserInput';
import TemperatureDetails from './components/TemperatureDetails';
import * as weatherAPI from './apis/weatherAPI';

const App = () => {
	const [currentCity, setCurrentCity] = useState('');
	const [degreeUnit, setDegreeUnit] = useState('metric');
	const [weatherData, setWeatherData] = useState(null);

	// Fetch data for the captured city name
	useEffect(() => {
		const getWeatherData = async () => {
			if (currentCity) {
				try {
					const data = await weatherAPI.getWeatherData(currentCity, degreeUnit);
					setWeatherData(data);
					console.log(data);
				} catch (error) {
					setWeatherData(null);
				}
			}
		};

		getWeatherData();
	}, [currentCity, degreeUnit]);

	return (
		<div className='box-border flex min-h-screen flex-col items-center scroll-smooth bg-gradient-to-br from-cyan-500 to-sky-600 pt-4 text-white sm:px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-20'>
			{/* Display favorite cities */}
			<TopCities setCurrentCity={setCurrentCity} />

			{/* Display search bar */}
			<UserInput currentCity={currentCity} setCurrentCity={setCurrentCity} />

			{/* Display selected city details */}
			{currentCity && weatherData && (
				<TemperatureDetails
					currentCity={currentCity}
					weatherData={weatherData}
					setDegreeUnit={setDegreeUnit}
				/>
			)}
		</div>
	);
};

export default App;
