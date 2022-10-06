import React from 'react';

const Forecast = ({ title, forecastData }) => {
	return (
		<div className='my-6 text-start'>
			{/* Section title */}
			<h3 className='text-lg font-medium uppercase'>{`${title} Forecast`}</h3>
			<hr className='my-2 ' />

			{/* Forecast data */}
			<ul className='flex items-center justify-between'>
				{forecastData.map((data, index) => (
					<li
						key={index + 1}
						className='flex flex-col items-center justify-start font-light'
					>
						{/* Weather Time */}
						<p>{index + 12}:00</p>

						{/* Weather Image */}
						<img
							src={'https://openweathermap.org/img/wn/01d@2x.png'}
							alt='Weather Icon'
							className='w-14'
						/>

						{/* Weather Temperature */}
						<p className='font-medium'>18&deg;</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Forecast;
