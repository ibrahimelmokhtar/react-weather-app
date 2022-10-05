import React from 'react';

const TopCities = ({ setCurrentCity }) => {
	const cities = ['Egypt', 'Riyadh', 'Abu Dhabi', 'London', 'Madrid', 'Oslo'];

	const handleClick = (event) => {
		setCurrentCity(event.target.innerText);
	};

	return (
		<div className='flex w-full items-center justify-center pb-2'>
			<ul className='flex flex-wrap items-center justify-center'>
				{cities.map((city, index) => (
					<li
						key={index + 1}
						className='mr-3 mt-2 cursor-pointer rounded border-2 bg-gray-500 py-1 px-2 text-lg font-medium capitalize text-white transition-colors duration-500 last:mr-0 hover:bg-gray-700'
						title={`Search For ${city}`}
						onClick={handleClick}
					>
						{city}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TopCities;
