import React, { useState } from 'react';
import {
	UilSearch,
	UilLocationPoint,
	UilExclamationTriangle,
} from '@iconscout/react-unicons';

const UserInput = ({ currentCity, setCurrentCity }) => {
	// Used to display error message when the city name is empty
	const [isCityEmpty, setIsCityEmpty] = useState(false);

	// Handle change within input field
	const handleChange = (event) => {
		// Modify error message for city name
		setIsCityEmpty(false);

		// Modify entered city name
		const searchCity = event.target.value
			.split(' ')
			.map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)} `)
			.join('')
			.trim();

		// Set current city:
		setCurrentCity(searchCity);
	};

	// Handle click on search icon
	const handleSearch = () => {
		if (currentCity) {
			// Modify error message for city name
			setIsCityEmpty(false);

			// Fetch data for the captured city name
			console.log(
				`Collect weather data about (${currentCity}) using Weather API`
			);

			// Clear input field
			setCurrentCity('');
		} else {
			// Modify error message for city name
			setIsCityEmpty(true);
		}
	};

	// Handle click on location icon
	const handleLocation = () => {
		// Fetch data for the current location
		console.log('Obtain current location using Geolocation API');
	};

	return (
		<div className='my-6 flex w-full flex-col items-center justify-center'>
			<div className='focus: flex items-center justify-center'>
				{/* User Input Field */}
				<input
					type='search'
					name='city'
					id='search-city'
					placeholder='Search By City Name ...'
					className='w-80 rounded border-2 py-1 px-2 capitalize shadow-xl placeholder:lowercase focus:outline-none'
					value={currentCity}
					onChange={handleChange}
				/>

				{/* Search Icon */}
				<button
					type='button'
					title='Search City'
					className='mx-4 cursor-pointer text-white transition-colors hover:text-gray-200'
					onClick={handleSearch}
				>
					<UilSearch size={25} />
				</button>

				{/* Current Location Icon */}
				<button
					type='button'
					title='Use Current Location'
					className='cursor-pointer text-white transition-colors hover:text-gray-200'
					onClick={handleLocation}
				>
					<UilLocationPoint size={25} />
				</button>
			</div>

			{/* Display appropriate message when city name is empty */}
			{isCityEmpty && (
				<div className='mt-4 flex items-center justify-center border-t-4 border-red-500 bg-red-100 py-2 px-4 text-lg text-red-700'>
					<UilExclamationTriangle size={25} className='mr-2' />
					<p>Error: You have to specify city name!</p>
				</div>
			)}
		</div>
	);
};

export default UserInput;
