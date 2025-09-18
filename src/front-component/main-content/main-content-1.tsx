import React from 'react';
import { Blog1 } from '../blog';
import { Choose1 } from '../choose';
import { Cta1 } from '../cta';
import { Department1 } from '../department';
import { Enroll1 } from '../enroll';
import { Events1 } from '../events';
import { Gallery1 } from '../gallery';
import { Partner1 } from '../partner';
import { Testimonial1 } from '../testimonial';

const MainContent1: React.FC = () => {
	return (
		<main className="main">
			{/* Choose Area */}
			<Choose1 />

			{/* Gallery Area */}
			<Gallery1 />

			{/* CTA Area */}
			<Cta1 />

			{/* Events Area */}
			<Events1 />

			{/* Enroll Area */}
			<Enroll1 />

			{/* Department Area */}
			<Department1 />

			{/* Testimonial Area */}
			<Testimonial1 />

			{/* Blog Area */}
			<Blog1 />

			{/* Partner Area */}
			<Partner1 />
		</main>
	);
};

export default MainContent1;
