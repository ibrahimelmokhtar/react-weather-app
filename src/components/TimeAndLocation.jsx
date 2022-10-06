import React from 'react';

const TimeAndLocation = ({ currentCity }) => {
	return (
		<div className='mt-8 text-center'>
			<div className='flex items-center justify-center text-lg font-light'>
				<p className='mr-10'>Thursday, 6 October 2022</p>
				<p>Local Time: 12:45 AM</p>
			</div>
			<h2 className='text-3xl font-semibold capitalize'>{currentCity}</h2>
		</div>
	);
};

export default TimeAndLocation;
