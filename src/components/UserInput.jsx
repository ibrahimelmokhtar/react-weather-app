import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { getCityNameFromCoords } from '../apis/weatherAPI';
import { toast } from 'react-toastify';

const UserInput = ({ userInput, setUserInput, setCurrentCity }) => {
	// Handle change within input field
	const handleChange = (event) => {
		// Modify error message for city name
		setUserInput(event.target.value);

		// Clear current city:
		if (event.target.value === '') {
			setCurrentCity('');
		}
	};

	// Handle "Enter" key press
	const handleKeyDown = (event) => {
		if (event.keyCode === 13) {
			handleSearch();
		}
	};

	// Handle click on search icon
	const handleSearch = () => {
		// Display appropriate warning
		if (!userInput) {
			toast.warn('You need to specify city name.');
		}

		// Set current city
		userInput ? setCurrentCity(userInput) : setCurrentCity('');
	};

	// Handle click on location icon
	const handleLocation = () => {
		// Handle geolocation success
		const success = (position) => {
			const { latitude: lat, longitude: lon } = position.coords;
			toast.success('Using current location!');
			getCityNameFromCoords(lat, lon).then((cityName) => {
				setUserInput(cityName);
				setCurrentCity(cityName);
			});
		};

		// Handle geolocation errors
		const error = (error) => {
			switch (error.code) {
				case error.PERMISSION_DENIED:
					toast.error('You must give me permission!');
					break;
				case error.POSITION_UNAVAILABLE:
					toast.error('Position returned an internal error!');
					break;
				case error.TIMEOUT:
					toast.error('Permission was NOT obtained in allowed time!');
					break;
				default:
					break;
			}
		};

		// Fetch data for the current location
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			toast.error('Geolocation is NOT supported by your device!');
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
					value={userInput}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
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
		</div>
	);
};

export default UserInput;
