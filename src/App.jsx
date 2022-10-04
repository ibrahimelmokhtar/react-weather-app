import * as Unicons from '@iconscout/react-unicons';

const App = () => {
	return (
		<div className='box-border flex flex-col items-center justify-center p-16'>
			<h1 className='text-3xl font-bold text-blue-600'>Hello, world!</h1>
			<h1 className='my-10 text-xl italic text-red-600'>
				Tailwind and Unicons are setup correctly ...
			</h1>
			<Unicons.UilReact size='140' color='#61DAFB' />
		</div>
	);
};

export default App;
