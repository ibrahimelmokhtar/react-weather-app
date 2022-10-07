import React, { useState } from 'react';
import {
	UilSearch,
	UilLocationPoint,
	UilExclamationTriangle,
} from '@iconscout/react-unicons';
import { getCityNameFromCoords } from '../apis/weatherAPI';

const UserInput = ({ currentCity, setCurrentCity }) => {
	// Used to display error message when the city name is empty
	const [isCityEmpty, setIsCityEmpty] = useState(false);

	// Handle change within input field
	const handleChange = (event) => {
		// Modify error message for city name
		setIsCityEmpty(false);

		// Set current city:
		setCurrentCity(event.target.value);
	};

	// Handle click on search icon
	const handleSearch = () => {
		if (currentCity) {
			// Modify error message for city name
			setIsCityEmpty(false);
		} else {
			// Modify error message for city name
			setIsCityEmpty(true);
		}
	};

	// Handle click on location icon
	const handleLocation = () => {
		const success = (position) => {
			const { latitude: lat, longitude: lon } = position.coords;
			getCityNameFromCoords(lat, lon).then((cityName) => {
				setCurrentCity(cityName);
			});

			// setCurrentCity(cityName);
		};

		// Fetch data for the current location
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success);
		} else {
			console.log('Can NOT access geolocation');
		}
	};

	return (
		<div className='mt-3 mb-6 flex flex-col flex-wrap items-center justify-center'>
			<div className='flex flex-wrap items-center justify-center'>
				{/* User Input Field */}
				<input
					type='search'
					name='city'
					id='search-city'
					placeholder='Search By City Name ...'
					className='w-72 rounded border-2 py-1 px-2 capitalize text-black shadow-xl placeholder:lowercase focus:outline-none'
					value={currentCity}
					onChange={handleChange}
				/>

				{/* Search Icon */}
				<button
					type='button'
					title='Search City'
					className='mx-2 cursor-pointer p-2 text-white transition-colors hover:text-gray-200'
					onClick={handleSearch}
				>
					<UilSearch size={25} />
				</button>

				{/* Current Location Icon */}
				<button
					type='button'
					title='Use Current Location'
					className='cursor-pointer p-2 text-white transition-colors hover:text-gray-200'
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
