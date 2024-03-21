import React from "react";
import SectionSix from "./SectionSix";
import SectionFive from "./SectionFive";
import PublicHeader from "../components/PublicHeader";
import Slider from "common/Slider";

export default function Calculator() {
	return (
		<section>
			<article className="max-w-screen-xl mx-auto mt-[5.1rem]">
				<Slider>
					<div className="mt-10 lg:mt-0 md:h-[30vh] lg:h-[40vh] w-full flex flex-col justify-center items-center font-bold mx-auto lg:mx-0">
						<h1 className="text-lg md:text-[40px] text-deepblack font-[900] lg:text-start xlg:text-[60px] leading-normal">
							Meeting calculator
						</h1>

						<div className="mt-8 px-6 lg:px-10 leading-6 lg:w-[70%]">
							<p className="text-sm font-normal text-center text-gray lg:text-base lg:leading-normal">
								Unlock the Power of Time Management: Introducing Our Meeting
								Calculator! Revolutionize the way you schedule meetings with our
								intuitive tool. Say goodbye to guesswork and hello to streamline
								productivity Take control of your agenda and make every minute
								count. Experience the future of efficient meetings today!
							</p>
						</div>
					</div>
				</Slider>
			</article>
			<SectionFive />
			<SectionSix />
		</section>
	);
}
