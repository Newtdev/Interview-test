import React from "react";

import Slider from "common/Slider";
import { NavLink } from "react-router-dom";
import Image3 from "assets/images/Image3.png";
import Image4 from "assets/images/Image4.png";

export const ImageCard = ({ image, header, desc, reverse }: any) => {
	return (
		<div className="flex flex-col ">
			<Slider delay={1}>
				<div
					className={`flex flex-col lg:flex-row  gap-x-3 ${
						reverse ? "flex-row-reverse" : "flex-row"
					}`}>
					<img src={image} alt={header} />
					<div className="flex flex-col justify-between  px-4 lg:px-0 h-full lg:max-w-[462px] mt-3">
						<h4 className="font-semibold lg:text-[32px] leading-[40px] bitter ">
							{header}
						</h4>
						<p className="font-normal lg:text-lg text-[#333333] text-left py-4">
							{desc}
						</p>
						<div className="mt-8 ">
							<NavLink
								to="/"
								className=" max-w-[198px] h-[56px] flex items-center justify-center md:w-[235px] text-center  px-3 py-2 mb-4 text-xs md:text-base transition-all bg-primary border font-semibold md:px-4 md:py-3 text-white border-primary hover:bg-primary hover:text-white bitter">
								Buy Now
							</NavLink>
						</div>
					</div>
				</div>
			</Slider>
		</div>
	);
};

function SectionTwo() {
	return (
		<section className="bg-primary-light">
			<article className="h-full max-w-screen-xl mx-auto lg:mt-0 px-7  ">
				<div className="w-full flex flex-col gap-y-2 pt-24 pb-10  max-w-[1027px] mx-auto ">
					<Slider>
						<h2 className="text-xl md:text-5xl text-left font-bold text-primary bitter ">
							Product Features
						</h2>
					</Slider>

					<Slider delay={2}>
						<p className="text-xs font-normal text-left text-[#202020] md:text-base lg:text-lg mx-auto ">
							Discover the Essence of Our Tea Collection
						</p>
					</Slider>
					<div className="grid grid-cols-1 mt-14 gap-6">
						<ImageCard
							image={Image3}
							header="Honey that took over 2 years to find."
							desc="Discover the liquid gold that embodies patience and persistence – our honey took over 2 years to find. We have tried over a 1000 different types of honey of different locations and finally, after 2 years of extensive search and going all the way from Japan to Spain, we discovered the perfect honey for the perfect flavored blend of tea."
						/>
						<div className="flex flex-col mt-16">
							<Slider delay={1}>
								<div className="flex flex-col lg:flex-row  gap-x-3 ">
									<img
										src={Image4}
										alt={"Blended by Japanese tea sommelier Yoko Toda."}
										className=" lg:hidden"
									/>
									<div className="flex flex-col justify-between px-4 lg:px-0 h-full lg:max-w-[462px] mt-3 ml-2">
										<h4 className="font-semibold lg:text-[32px] leading-[40px] ">
											Blended by Japanese tea sommelier Yoko Toda.
										</h4>
										<p className="font-normal lg:text-lg text-[#333333] text-left py-4">
											Crafted with precision and expertise, each blend bears the
											mark of Japanese tea sommelier Yoko Toda. Immerse yourself
											in the artistry of tea, perfected by a master for an
											unparalleled experience in every sip.
										</p>
										<div className="mt-8 ">
											<NavLink
												to="/"
												className=" max-w-[198px] h-[56px] flex items-center justify-center md:w-[235px] text-center  px-3 py-2 mb-4 text-xs md:text-base transition-all bg-primary border font-semibold md:px-4 md:py-3 text-white border-primary hover:bg-primary hover:text-white bitter">
												Buy Now
											</NavLink>
										</div>
									</div>
									<img
										src={Image4}
										alt={"Blended by Japanese tea sommelier Yoko Toda."}
										className="hidden lg:block"
									/>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}

export default SectionTwo;
