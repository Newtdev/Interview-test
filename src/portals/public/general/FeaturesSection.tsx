import React from "react";

import Slider from "common/Slider";
import { NavLink } from "react-router-dom";
import ImageOne from "assets/images/ImageOne.png";
import ImageTwo from "assets/images/ImageTwo.png";

const ImageCard = ({ image, header, desc }: any) => {
	return (
		<div className="flex flex-col lg:max-w-[520px] ">
			<Slider delay={1}>
				<img
					src={image}
					alt="Premium Honey Tea"
					className="w-full object-contain"
				/>
				<h4 className="font-semibold lg:text-[32px] leading-[40px] py-4 bitter">
					{header}
				</h4>
				<p className="font-normal lg:text-lg text-[#333333] text-left">
					{desc}
				</p>
			</Slider>
			<Slider delay={1.5}>
				<div className="mt-8 ">
					<NavLink
						to="/"
						className=" max-w-[198px] h-[56px] flex items-center justify-center md:w-[235px] text-center px-3 py-2 mb-4 text-xs md:text-base transition-all bg-primary border font-semibold md:px-4 md:py-3 text-white border-primary hover:bg-primary hover:text-white bitter">
						Buy Now
					</NavLink>
				</div>
			</Slider>
		</div>
	);
};

function FeaturesSection() {
	return (
		<section className="bg-primary-light">
			<article className="h-full max-w-screen-xl mx-auto lg:mt-0 px-7  ">
				<div className="w-full flex justify-center flex-col gap-y-2 pt-24 pb-10 items-center max-w-[1027px] mx-auto">
					<Slider>
						<h2 className="text-xl md:text-5xl mx-auto text-center font-bold text-primary bitter">
							Selected Products
						</h2>
					</Slider>

					<Slider delay={2}>
						<p className="text-xs font-normal text-center text-[#202020] md:text-base lg:text-lg mx-auto">
							Indulge in Our Exceptional Tea Collection.
						</p>
					</Slider>
					<div className="grid  lg:grid-cols-2 mt-14 gap-6">
						<ImageCard
							image={ImageOne}
							header="Premium Honey Tea"
							desc="As a product delivered by a tea sommelier from a tea specialty shop, we have maximized the flavor of the tea leaves. We blend powdered multi-floral honey from Spain into the tea. The sweetness of the honey is so strong that there is no need to use sugar. Just one sip brings a feeling of happiness, a rich flavor. It’s a delicious tea, whether hot or iced, straight or as a milk tea."
						/>
						<ImageCard
							image={ImageTwo}
							header="Premium Honey Lemon Tea"
							desc="Indulge in the harmonious blend of nature's finest ingredients with Lakshimi Premium Honey Lemon Tea. Crafted with meticulous care, this exquisite infusion combines the sweetness of pure honey, the zest of sun-kissed lemons, and the premium quality tea leaves to create a tea experience like no other. Elevate your tea ritual with Lakshimi Premium Honey Lemon Tea, where every sip is a celebration of taste and tranquility."
						/>
					</div>
				</div>
			</article>
		</section>
	);
}

export default FeaturesSection;
