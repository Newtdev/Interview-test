import React from "react";

import Slider from "common/Slider";
import { NavLink } from "react-router-dom";
import Image7 from "assets/images/Image7.png";
import Image8 from "assets/images/Image8.png";

const ImageCard = ({ image, header, desc }: any) => {
	return (
		<div className="flex flex-col max-w-[520px]">
			<Slider delay={1}>
				<img
					src={image}
					alt="Premium Honey Tea"
					className="w-full object-contain"
				/>
				<h4 className="font-semibold lg:text-[20px] leading-[32px] py-4 text-center bitter">
					{header}
				</h4>
			</Slider>
			<Slider delay={1.5}>
				<div className="mt-5 mx-auto">
					<NavLink
						to="/"
						className=" max-w-[198px] h-[56px] flex items-center justify-center md:w-[235px] text-center mx-auto px-3 py-2 mb-4 text-xs md:text-base transition-all bg-primary border font-semibold md:px-4 md:py-3 text-white border-primary hover:bg-primary hover:text-white bitter">
						Buy Now
					</NavLink>
				</div>
			</Slider>
		</div>
	);
};

function SectionFive() {
	return (
		<section className="bg-primary-light">
			<article className="h-full max-w-screen-xl mx-auto lg:mt-0 px-7  ">
				<div className="w-full flex flex-col gap-y-2 pt-24 pb-24 md:pl-[4.5rem] ">
					<Slider>
						<h2 className="text-xl md:text-5xl text-left font-bold text-primary bitter ">
							Awards & Recognition
						</h2>
					</Slider>

					<Slider delay={2}>
						<p className="text-xs font-normal text-left text-[#202020] md:text-base lg:text-lg mx-auto ">
							Our work speaks for us.
						</p>
					</Slider>
					<div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-6 md:gap-y-10 lg:gap-6">
						<ImageCard
							image={Image7}
							header="Top sales in tea category in Japanese EC site."
							desc="Discover the liquid gold that embodies patience and persistence – our honey took over 2 years to find. We have tried over a 1000 different types of honey of different locations and finally, after 2 years of extensive search and going all the way from Japan to Spain, we discovered the perfect honey for the perfect flavored blend of tea."
						/>
						<ImageCard
							image={Image8}
							header="Top sales in tea category in department stores."
							desc="Discover the liquid gold that embodies patience and persistence – our honey took over 2 years to find. We have tried over a 1000 different types of honey of different locations and finally, after 2 years of extensive search and going all the way from Japan to Spain, we discovered the perfect honey for the perfect flavored blend of tea."
						/>
					</div>
				</div>
			</article>
		</section>
	);
}

export default SectionFive;
