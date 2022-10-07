import React from 'react';
import WeatherDateTime from './WeatherDateTime';

const Forecast = ({ title, forecastData, timezone }) => {
	// Control the length of forecast items
	const SIZE = 5;

	return (
		<div className='my-3 text-start'>
			{/* Section title */}
			<h3 className='text-lg font-medium uppercase'>{`${title} Forecast`}</h3>
			<hr className='my-2 ' />

			{/* Forecast data */}
			<ul className='flex flex-wrap items-center justify-between'>
				{forecastData
					.filter((_, index) => index < SIZE)
					.map((data, index) => {
						const forecastTemp =
							data.temp instanceof Object ? data.temp.day : data.temp;

						const timestamp = data.dt;
						const format = title === 'daily' ? 'ccc' : 'hh:mm a';

						return (
							<li
								key={index + 1}
								className='flex flex-col items-center justify-start p-3 font-light'
							>
								{/* Weather Date and Time */}
								<WeatherDateTime
									timestamp={timestamp}
									timezone={timezone}
									format={format}
								/>

								{/* Weather Image */}
								<img
									src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
									alt='Weather Icon'
									className='w-14'
								/>

								{/* Weather Temperature */}
								<p className='font-medium'>{Math.round(forecastTemp)}&deg;</p>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Forecast;
