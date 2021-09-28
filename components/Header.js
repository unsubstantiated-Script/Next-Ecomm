const Header = () => {
	return (
		<div className='max-w-7xl mx-auto text-center'>
			<h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
				Beautiful digital design assets
			</h1>
			<p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
				Take your digital products to another level with our collection of UI
				kits, templates and icon sets. All our assets were carefully designed to
				work together beautifully. We have obsessed over every little detail,
				and we really believe it shows.
			</p>
			<div className='mt-5 max-w-md mx-auto flex justify-center md:mt-8'>
				<div className='rounded-md shadow'>
					<a
						href='#'
						className='w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 divide-x divide-gray-600 hover:bg-gray-700 md:text-lg'>
						<span className='pr-6'>Get the bundle</span>
						<span className='pl-6'>$199</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
