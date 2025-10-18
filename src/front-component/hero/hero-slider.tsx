'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { ICMSBanner } from '@/store/features/cms';
import { Pagination } from 'swiper/modules';
import Hero1 from './hero-1';

export default function HeroSlider({ banners }: { banners: ICMSBanner[] }) {
	return (
		<>
			<div className="hero-section">
				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{banners?.map((banner) => (
						<SwiperSlide key={banner.id}>
							<Hero1 banner={banner} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
}
