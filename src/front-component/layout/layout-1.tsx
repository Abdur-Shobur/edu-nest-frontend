import { Footer1 } from '../footer';
import { Header1 } from '../header';
import { Scroll1 } from '../scroll';

const Layout1 = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header1 />
			<main className="main">{children}</main>
			<Footer1 />
			<Scroll1 />
		</>
	);
};

export default Layout1;
