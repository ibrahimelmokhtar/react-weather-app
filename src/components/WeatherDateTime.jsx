import React from 'react';
import { DateTime } from 'luxon';

const WeatherDateTime = ({
	timestamp,
	timezone,
	format = `cccc, dd LLL yyyy' | Local time: 'hh:mm a`,
}) => {
	return (
		<div className='capitalize'>
			{DateTime.fromSeconds(timestamp).setZone(timezone).toFormat(format)}
		</div>
	);
};

export default WeatherDateTime;
