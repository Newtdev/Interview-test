import React from "react";
import Slider from "common/Slider";
import { NavLink } from "react-router-dom";
import Image5 from "assets/images/Image5.png";
import Image6 from "assets/images/Image6.png";
import { ImageCard } from "portals/public/general/SectionTwo";

export default function SectionFour() {
	return (
		<section className="bg-white">
			<article className="h-full max-w-screen-xl mx-auto lg:mt-0 px-7  ">
				<div className="w-full flex justify-center flex-col gap-y-2 pt-24 pb-24 items-center max-w-[1027px] mx-auto">
					<Slider>
						<h2 className="text-xl md:text-5xl mx-auto text-center font-bold text-primary bitter">
							Get the best from our Tea
						</h2>
					</Slider>

					<Slider delay={2}>
						<p className="text-xs font-normal text-center text-[#202020] md:text-base lg:text-lg mx-auto">
							Style to your own taste.
						</p>
					</Slider>
					<div
						className="grid grid-cols-1 mt-6 md:mt-14 gap-6 w-full
					">
						<div className="flex flex-col md:mt-16 ">
							<Slider delay={1}>
								<div className="flex flex-col lg:flex-row  gap-x-3 ">
									<img
										src={Image5}
										alt={"Blended by Japanese tea sommelier Yoko Toda."}
										// className="shadow"
									/>
									<div className="flex flex-col justify-between  h-full px-4 lg:px-0 lg:max-w-[462px] mt-4 ml-2">
										<h4 className="font-semibold lg:text-[32px] leading-[24px] bitter">
											With Milk
										</h4>
										<p className="font-normal lg:text-lg text-[#333333] text-left py-4">
											Savor the perfect union of tradition and comfort by
											enjoying our tea with milk. Elevate your tea-drinking
											experience as the rich, robust flavors intertwine with the
											creamy embrace of milk, creating a symphony of taste that
											lingers in every delightful sip.
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

						<div className="flex flex-col mt-16">
							<Slider delay={1}>
								<div className="flex flex-col lg:flex-row  gap-x-3 ">
									<img
										src={Image6}
										alt={"Blended by Japanese tea sommelier Yoko Toda."}
										className="lg:hidden"
										// className="shadow"
									/>
									<div className="flex flex-col justify-between px-4 lg:px-0 h-full lg:max-w-[462px] mt-3 ml-2">
										<h4 className="font-semibold lg:text-[32px] leading-[24px] bitter">
											With Ice
										</h4>
										<p className="font-normal lg:text-lg text-[#333333] text-left py-4">
											Embrace the refreshing symphony of flavors as you take a
											cool journey through our teas enjoyed with ice. Immerse
											yourself in the invigorating fusion of iced tea, where
											each sip unfolds a delightful dance of chilled
											sophistication and exceptional taste.
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
										src={Image6}
										alt={"Blended by Japanese tea sommelier Yoko Toda."}
										className="hidden lg:block"
										// className="shadow"
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
