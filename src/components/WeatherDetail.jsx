import React from 'react';
import WeatherDateTime from './WeatherDateTime';
import {
	UilArrowUp,
	UilArrowDown,
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from '@iconscout/react-unicons';

const WeatherDetail = ({ iconName, title, value, type, isCelsius }) => {
	const ICON_SIZE = 24;

	let unit = '';
	switch (type) {
		case 'degree':
			unit = '\u00B0';
			break;
		case 'percentage':
			unit = '\u0025';
			break;
		case 'speed':
			unit = isCelsius ? ' m/s' : ' mph';
			break;
		default:
			unit = '';
			break;
	}

	return (
		<div className='flex items-center justify-center py-1 px-2 text-sm font-light'>
			{/* Set desired icon */}
			{iconName === 'UilTemperature' && <UilTemperature size={ICON_SIZE} />}
			{iconName === 'UilTear' && <UilTear size={ICON_SIZE} />}
			{iconName === 'UilWind' && <UilWind size={ICON_SIZE} />}
			{iconName === 'UilSun' && <UilSun size={ICON_SIZE} />}
			{iconName === 'UilSunset' && <UilSunset size={ICON_SIZE} />}
			{iconName === 'UilArrowUp' && <UilArrowUp size={ICON_SIZE} />}
			{iconName === 'UilArrowDown' && <UilArrowDown size={ICON_SIZE} />}

			{/* Detail title */}
			<span className='mx-1 capitalize'>{title}:</span>

			{/* Detail value */}
			{type !== 'time' && (
				<span className='font-medium'>{`${value}${unit}`}</span>
			)}
			{type === 'time' && (
				<span className='font-medium'>
					<WeatherDateTime
						timestamp={value.dt}
						timezone={value.timezone}
						format='hh:mm a'
					/>
				</span>
			)}
		</div>
	);
};

export default WeatherDetail;
