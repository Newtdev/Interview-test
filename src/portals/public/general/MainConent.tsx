import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "common/Slider";

function MainConent() {
	return (
		<section className="w-screen h-[640px] md:h-[720px] mt-20 md:bg-cover bg-cover bg-center bg-no-repeat bg-mobileBackground md:bg-DashboardBg ">
			<article className="flex flex-col items-start justify-center h-full max-w-screen-xl mx-auto lg:flex-row lg:items-center lg:justify-between lg:mt-0 md:px-6 xl:px-2 ">
				<div className="w-full lg:mt-0 h-full  flex flex-col  justify-center items-center font-bold mx-auto lg:mx-0 ">
					<Slider delay={0.3}>
						<div>
							<h1 className="text-lg md:text-[40px] text-white xl:text-[72px] text-center font-normal  lg:leading-[88px] oswald ">
								The ultimate aroma and taste,
							</h1>
							<h1 className="text-lg md:text-[40px] text-white xl:text-[72px] text-center font-normal leading-loose lg:leading-[88px] oswald">
								for blissful <span className="text-[#DBCA00]">relaxation</span>.
							</h1>
						</div>
					</Slider>

					<Slider delay={0.5}>
						<div className="mt-2 lg:px-6 md:px-0 leading-6 md:w-[656px]">
							<p className="text-base font-normal text-center text-white  md:text-base leading-normal ">
								Elevate your tea experience and discover the perfect balance of
								tranquility and taste, sip by sip. Welcome to a journey where
								every cup is a celebration of serenity and indulgence.
							</p>
						</div>
					</Slider>
					<Slider delay={1}>
						<div className="mt-8 flex gap-x-3  w-full  max-w-[198px]">
							<NavLink
								to="/"
								className=" w-[198px] h-[56px] flex items-center justify-center md:w-[235px] text-center  px-3 py-2 mb-4 text-xs md:text-base transition-all bg-primary border font-semibold md:px-4 md:py-3 text-white border-primary hover:bg-primary hover:text-white bitter">
								Buy Now
							</NavLink>
						</div>
					</Slider>
				</div>

				{/* <div className="hidden md:block w-[80%] ml-10 lg:ml-0  lg:w-full mx-auto lg:mx-0 mt-8 lg:basis-[60%] bg-DashboardBg bg-center bg-contain lg:bg-contain  md:h-[80%] bg-no-repeat " />
				<Slider delay={1.2}>
					<div className="my-6 md:hidden ">
						<img
							src={BackgroundImage}
							alt="backgroundImage"
							className="h-[90%] w-[90%] mx-auto object-contain mr-10"
							loading="eager"
						/>
					</div>
				</Slider> */}
			</article>
		</section>
	);
}

export default MainConent;
