import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

require("./Skills.css");

function Skills() {
	return (
		<div className="skills-container">
			<h1>Skills</h1>

			<div>
				<Swiper
					slidesPerView={2}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="outer-container up">
							<h2 className="header-name up">React</h2>
							<div className="hexagon up">
								<img src="images/react-logo.png" className="logo"></img>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="outer-container down">
							<h2 className="header-name down">NodeJS</h2>
							<div className="hexagon down">
								<img src="images/nodejs-logo.png" className="logo"></img>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="outer-container up">
							<h2 className="header-name up">MongoDB</h2>
							<div className="hexagon up">
								<img
									src="images/mongodb-logo.png"
									className="logo logo-helper-larger"
								></img>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="outer-container down">
							<h2 className="header-name down">HTML5</h2>
							<div className="hexagon">
								<img src="images/html-logo.png" className="logo"></img>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="outer-container up">
							<h2 className="header-name up">CSS</h2>
							<div className="hexagon">
								<img src="images/css-logo.png" className="logo"></img>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="outer-container down">
							<h2 className="header-name down header-helper">Javascript</h2>
							<div className="hexagon">
								<img
									src="images/js-logo.png"
									className="logo logo-helper-smaller"
								></img>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default Skills;
