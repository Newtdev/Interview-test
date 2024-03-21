import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "common/Slider";
import Liskimi from "assets/images/Laskimi.png";

function SectionOne() {
	return (
		<section
			className="
		
			">
			<article className="h-full lg:h-[80vh] max-w-screen-xl md:mt-[170px] mx-auto  pb-24 md:pb-6 ">
				<div className="lg:mt-0 flex flex-col lg:flex-row  justify-between  max-w-[1027px] mx-auto">
					<div className="lg:basis-[50%] mt-16 md:mt-0 w-full lg:max-w-[499px] px-4 md:px-6 lg:px-0 space-y-4 ">
						<Slider delay={0.2}>
							<h2 className="text-[48px] lg:text-[64px] lg:text-center xl:text-start font-bold bitter text-primary">
								About Brand
							</h2>
						</Slider>
						<div className="flex flex-col gap-y-3  md:pt-4">
							<Slider delay={0.3}>
								<p className="text-base lg:text-justify font-normal leading-[32px] text-[#333333] md:text-lg">
									Lakshimi started with a tea class that the representative,
									Yoko Toda, started at home. In 2005, “Lakshimi Tea Shop”
									opened in Kitano, Kobe.
								</p>
							</Slider>
							<Slider delay={0.4}>
								<p className="text-base lg:text-justify font-normal leading-[32px] text-[#333333] md:text-lg">
									In 2008, we started to blend our own original tea. Initially,
									we started with only a few blends, but as we learned about the
									tastes and preferences of our customers, we gradually
									increased the number of original blends.
								</p>
							</Slider>
							<Slider delay={0.5}>
								<p className="text-base lg:text-justify font-normal leading-[32px] text-[#333333] md:text-lg">
									In 2011, we developed our popular product, “Premium Honey
									Tea”. This tea was well-received by customers who enjoyed its
									sweet yet low-calorie content, making it a mainstay in our
									store.
								</p>
							</Slider>
						</div>

						<div className="pt-7 flex gap-x-3">
							<NavLink
								to="/"
								className="hidden md:block md:w-[235px] text-center px-3 py-2 mb-4 text-xs md:text-base transition-all bg-primary border font-semibold md:px-4 md:py-3 text-white border-primary hover:bg-primary hover:text-white bitter">
								Buy Now
							</NavLink>
						</div>
					</div>

					<Slider delay={0.01}>
						<div className="xl:basis-[50%] flex flex-col md:flex-row justify-between items-center">
							<img
								src={Liskimi}
								className="px-4 w-[80%] md:mt-16 h-[80%] mx-auto lg:mx-0  lg:mb-0 lg:w-[460.57px] lg:h-[449px] object-contain"
								alt="Lakshimi"
								// height={20}
								// width={20}
								loading="lazy"
							/>
						</div>
					</Slider>
				</div>
			</article>
		</section>
	);
}

export default SectionOne;
