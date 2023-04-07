import { useEffect, useState } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";

require("./AboutMe.css");

const AboutMe = () => {
	const [ref, { entry }] = useIntersectionObserver({ threshold: 0.06 });
	const isVisible = entry && entry.isIntersecting;
	const [inView, setInView] = useState("");

	useEffect(() => {
		if (isVisible) {
			setInView("fade-in");
		}
	}, [isVisible]);

	return (
		<section ref={ref} id="about-me" className={`padding-helper ${inView}`}>
			<img
				src="images/me.png"
				alt="Picture of Alyssa Sitto. She has straight bright red hair and is wearing a black shirt."
			></img>
			<div>
				<h2>About Me</h2>
				<p>
					In late 2021, my coding journey began when I stumbled upon some
					YouTube videos. As someone who is always eager to try new things, I
					decided to give coding a try, and I quickly fell in love with it. The
					ability to create something out of nothing was truly mesmerizing. I
					soon realized that I didn't just want to code as a hobby, but as a
					career. Since then, I have been dedicated to building my skills and
					expanding my knowledge in the field of web development. With each
					passing day, I am constantly learning and discovering new things that
					make me excited about what the future holds.
				</p>
			</div>
		</section>
	);
};

export default AboutMe;
