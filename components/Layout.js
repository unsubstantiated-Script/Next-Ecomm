import Meta from "./Meta";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className='max-w-7xl mx-auto  px-4 sm:px-6  lg:px-8'>
			<Meta />
			<Nav />
			<div>
				<main>{children}</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
