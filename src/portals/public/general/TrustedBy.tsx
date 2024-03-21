import React, { ReactNode } from "react";
import MGDIcon from "assets/svg/MDG.svg";
import PanasonicIcon from "assets/svg/Panasonic.svg";
import YahooIcon from "assets/svg/Yahoo.svg";
import Appicon from "assets/svg/Apple.svg";
import AtlessanIcon from "assets/svg/AtlessanLogo.svg";
import GoogleMeet from "assets/svg/GoogleMeet.svg";
import { useRef } from "react";
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
	children: ReactNode;
	baseVelocity: number;
}

export default function TrustedBy() {
	const Logos = [
		MGDIcon,
		PanasonicIcon,
		YahooIcon,
		Appicon,
		AtlessanIcon,
		GoogleMeet,
	];

	function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
		const baseX = useMotionValue(0);
		const { scrollY } = useScroll();
		const scrollVelocity = useVelocity(scrollY);
		const smoothVelocity = useSpring(scrollVelocity, {
			damping: 50,
			stiffness: 400,
		});
		const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
			clamp: false,
		});

		/**
		 * This is a magic wrapping for the length of the text - you
		 * have to replace for wrapping that works for you or dynamically
		 * calculate
		 */
		const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

		const directionFactor = useRef<number>(1);
		useAnimationFrame((t, delta) => {
			let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

			/**
			 * This is what changes the direction of the scroll once we
			 * switch scrolling directions.
			 */
			if (velocityFactor.get() < 0) {
				directionFactor.current = -1;
			} else if (velocityFactor.get() > 0) {
				directionFactor.current = 1;
			}

			moveBy += directionFactor.current * moveBy * velocityFactor.get();

			baseX.set(baseX.get() + moveBy);
		});

		/**
		 * The number of times to repeat the child text should be dynamically calculated
		 * based on the size of the text and viewport. Likewise, the x motion value is
		 * currently wrapped between -20 and -45% - this 25% is derived from the fact
		 * we have four children (100% / 4). This would also want deriving from the
		 * dynamically generated number of children.
		 */
		return (
			<div className="parallax">
				<motion.div className="scroller" style={{ x }}>
					{children}
				</motion.div>
			</div>
		);
	}
	return (
		<section className=" w-screen mb-10 py-10">
			<article className="flex flex-col items-start h-full max-w-screen-xl mx-auto lg:flex-row lg:items-center lg:justify-between lg:mt-0 md:px-6 ">
				<div className="mx-auto">
					<h1 className="font-bold md:text-2xl text-center text-gray-dark">
						Trusted By:
					</h1>
					<div className="hidden lg:flex items-center gap-x-2 mt-6 ">
						{Logos.map((logo, i) => (
							<div className="py-2.5 px-5 shadow-lg rounded-sm">
								<img src={logo} key={i + 1} loading="lazy" alt="companies" />
							</div>
						))}
					</div>
					<div className="flex lg:hidden">
						<ParallaxText baseVelocity={-5}>
							<div className="flex items-center gap-x-10 mt-6">
								{Logos.map((logo, i) => (
									// <div className=" w-24 h-24 p-3 ">
									<img
										src={logo}
										key={i + 1}
										loading="lazy"
										className="w-24 h-24 object-contain"
										alt="companies"
									/>
									// </div>n
								))}
							</div>
						</ParallaxText>
					</div>
				</div>
			</article>
		</section>
	);
}

// export default function TrustedBy() {
// 	return (
// 		<section>
// 			<ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
// 			<ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
// 		</section>
// 	);
// }
