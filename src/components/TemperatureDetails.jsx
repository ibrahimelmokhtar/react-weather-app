import React, { useState } from 'react';
import Forecast from './Forecast';
import WeatherDetail from './WeatherDetail';
import WeatherDateTime from './WeatherDateTime';

const TemperatureDetails = ({ weatherData, setDegreeUnit }) => {
	const [isCelsius, setIsCelsius] = useState(true);

	const handleDegree = (event) => {
		if (event.target.id === 'celsius') {
			setIsCelsius(true);
			setDegreeUnit('metric');
		} else {
			setIsCelsius(false);
			setDegreeUnit('imperial');
		}
	};

	return (
		<div className='w-full max-w-3xl px-6 text-center'>
			{/* Date and time */}
			<div className='flex flex-wrap items-center justify-center text-base font-light'>
				<WeatherDateTime
					timestamp={weatherData.dt}
					timezone={weatherData.timezone}
				/>
			</div>

			{/* City name */}
			<h2 className='my-3 text-3xl font-semibold capitalize'>{`${weatherData.name}, ${weatherData.country}`}</h2>

			{/* Weather details */}
			<div className='flex flex-col items-center justify-center'>
				{/* Weather description */}
				<h3 className='text-xl font-medium capitalize text-orange-600'>
					{weatherData.description}
				</h3>

				<div className='my-3 flex flex-wrap items-center justify-between text-center'>
					{/* Weather Icon Image  */}
					<img
						src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
						alt='Weather Icon'
						className='w-24'
					/>

					{/* Weather Temperature */}
					<div className='flex items-center justify-between p-3 text-lg capitalize'>
						<span className='text-5xl'>
							{Math.round(weatherData.temp)}&deg;
						</span>
						<div className='p-2 font-light'>
							<span
								id='celsius'
								className={`cursor-pointer ${
									isCelsius ? 'text-2xl font-normal' : 'text-gray-300'
								} `}
								onClick={handleDegree}
							>
								&deg;C
							</span>
							<span className='mx-2'>|</span>
							<span
								id='fahrenheit'
								className={`cursor-pointer ${
									isCelsius ? 'text-gray-300' : 'text-2xl font-normal'
								} `}
								onClick={handleDegree}
							>
								&deg;F
							</span>
						</div>
					</div>

					{/* Weather extra info: Part 1 */}
					<div className='flex flex-col items-start'>
						<WeatherDetail
							iconName='UilTemperature'
							title='real feel'
							value={Math.round(weatherData.feels_like)}
							type='degree'
						/>
						<WeatherDetail
							iconName='UilTear'
							title='humidity'
							value={Math.round(weatherData.humidity)}
							type='percentage'
						/>
						<WeatherDetail
							iconName='UilWind'
							title='wind'
							value={Math.round(weatherData.speed)}
							type='speed'
							isCelsius={isCelsius}
						/>
					</div>
				</div>

				{/* Weather extra info: Part 2 */}
				<div className='flex flex-wrap items-center justify-between'>
					<WeatherDetail
						iconName='UilSun'
						title='rise'
						value={{ dt: weatherData.sunrise, timezone: weatherData.timezone }}
						type='time'
					/>
					<WeatherDetail
						iconName='UilSunset'
						title='set'
						value={{ dt: weatherData.sunset, timezone: weatherData.timezone }}
						type='time'
					/>
					<WeatherDetail
						iconName='UilArrowUp'
						title='high'
						value={Math.round(weatherData.temp_max)}
						type='degree'
					/>
					<WeatherDetail
						iconName='UilArrowDown'
						title='low'
						value={Math.round(weatherData.temp_min)}
						type='degree'
					/>
				</div>
			</div>

			{/* Hourly forecast details */}
			<Forecast
				title='hourly'
				forecastData={weatherData.hourly}
				timezone={weatherData.timezone}
			/>

			{/* Daily forecast details */}
			<Forecast
				title='daily'
				forecastData={weatherData.daily}
				timezone={weatherData.timezone}
			/>
		</div>
	);
};

export default TemperatureDetails;
