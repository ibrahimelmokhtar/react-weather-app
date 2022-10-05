// import * as Unicons from '@iconscout/react-unicons';
import { useState } from 'react';
import TopCities from './components/TopCities';
import UserInput from './components/UserInput';

const App = () => {
	const [currentCity, setCurrentCity] = useState('');

	return (
		<div className='box-border flex min-h-screen flex-col items-center scroll-smooth bg-gradient-to-br from-cyan-500 to-sky-600 pt-4 sm:px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-20'>
			{/* Display favorite cities */}
			<TopCities setCurrentCity={setCurrentCity} />

			{/* Display search bar */}
			<UserInput currentCity={currentCity} setCurrentCity={setCurrentCity} />

			{/* Display selected city name */}
			{currentCity && (
				<div className='mt-8 text-center'>
					currently looking for weather in "
					{<span className='text-lg font-bold text-white'>{currentCity}</span>}"
				</div>
			)}
		</div>
	);
};

export default App;
