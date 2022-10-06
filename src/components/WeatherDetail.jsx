import React from 'react';
import {
	UilArrowUp,
	UilArrowDown,
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from '@iconscout/react-unicons';

const WeatherDetail = ({ iconName, title, value, type }) => {
	const iconSize = 24;

	return (
		<div className='my-1 mx-2 flex items-center justify-center text-sm font-light'>
			{/* Set desired icon */}
			{iconName === 'UilTemperature' && <UilTemperature size={iconSize} />}
			{iconName === 'UilTear' && <UilTear size={iconSize} />}
			{iconName === 'UilWind' && <UilWind size={iconSize} />}
			{iconName === 'UilSun' && <UilSun size={iconSize} />}
			{iconName === 'UilSunset' && <UilSunset size={iconSize} />}
			{iconName === 'UilArrowUp' && <UilArrowUp size={iconSize} />}
			{iconName === 'UilArrowDown' && <UilArrowDown size={iconSize} />}

			{/* Detail title */}
			<span className='mx-1 capitalize'>{title}:</span>

			{/* Detail value */}
			{type === 'degree' && <span className='font-medium'>{value}&deg;</span>}
			{type !== 'degree' && <span className='font-medium'>{value}</span>}
		</div>
	);
};

export default WeatherDetail;
