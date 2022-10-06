import React, { useState } from 'react';
import WeatherDetail from './WeatherDetail';

const TemperatureDetails = ({ currentCity }) => {
	const [isCelsius, setIsCelsius] = useState(true);

	const handleDegree = (event) => {
		let degreeUnit = '';
		if (event.target.id === 'celsius') {
			setIsCelsius(true);
			degreeUnit = 'metric';
		} else {
			setIsCelsius(false);
			degreeUnit = 'imperial';
		}

		console.log(`Obtain ${degreeUnit} temperature`);
	};

	return (
		<div className='w-full max-w-3xl px-6 text-center'>
			{/* Date and time */}
			<div className='flex items-center justify-center text-lg font-light'>
				<p className='mr-10'>Thursday, 6 October 2022</p>
				<p>Local Time: 12:45 AM</p>
			</div>

			{/* City name */}
			<h2 className='my-3 text-3xl font-semibold capitalize'>{currentCity}</h2>

			{/* Weather details */}
			<div className='flex flex-col items-center justify-center'>
				{/* Weather description */}
				<h3 className='text-xl font-medium capitalize text-indigo-600'>Cold</h3>

				<div className='mt-3 flex w-full items-center justify-between'>
					{/* Weather Icon Image  */}
					<img
						src={'https://openweathermap.org/img/wn/01d@2x.png'}
						alt='Weather Icon'
						className='w-24'
					/>

					{/* Weather Temperature */}
					<div className='flex items-center justify-center text-lg capitalize'>
						<span className='mr-4 text-5xl'>31&deg;</span>
						<div>
							<span
								id='celsius'
								className={`cursor-pointer ${
									isCelsius ? 'text-2xl' : 'text-gray-300'
								} `}
								onClick={handleDegree}
							>
								&deg;C
							</span>
							<span className='mx-2'>|</span>
							<span
								id='fahrenheit'
								className={`cursor-pointer ${
									isCelsius ? 'text-gray-300' : 'text-2xl'
								} `}
								onClick={handleDegree}
							>
								&deg;F
							</span>
						</div>
					</div>

					{/* Weather extra info: Part 1 */}
					<div className='my-4 flex flex-col items-start'>
						<WeatherDetail
							iconName='UilTemperature'
							title='real feel'
							value={'33'}
							type='degree'
						/>
						<WeatherDetail
							iconName='UilTear'
							title='humidity'
							value={'65%'}
							type='percentage'
						/>
						<WeatherDetail
							iconName='UilWind'
							title='wind'
							value={'11 km/h'}
							type='speed'
						/>
					</div>
				</div>
				{/* Weather extra info: Part 2 */}
				<div className='flex items-center justify-between'>
					<WeatherDetail
						iconName='UilSun'
						title='rise'
						value={'04:50 AM'}
						type='time'
					/>
					<WeatherDetail
						iconName='UilSunset'
						title='set'
						value={'07:09 PM'}
						type='time'
					/>
					<WeatherDetail
						iconName='UilArrowUp'
						title='high'
						value={'35'}
						type='degree'
					/>
					<WeatherDetail
						iconName='UilArrowDown'
						title='low'
						value={'19'}
						type='degree'
					/>
				</div>
			</div>
		</div>
	);
};

export default TemperatureDetails;
