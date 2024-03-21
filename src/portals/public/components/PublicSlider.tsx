import Slider from "common/Slider";
import React from "react";
import { NavLink } from "react-router-dom";

function PublicSlider({ sliders }: { sliders: any }) {
	const reversePosition =
		sliders.id % 2 === 0
			? "flex-col lg:flex-row-reverse"
			: "flex-col lg:flex-row ";
	return (
		<article
			className={`h-full w-full max-w-screen-xl mx-auto flex ${reversePosition} items-start lg:items-center pt-4 mt-6 lg:mt-0 lg:gap-x-14 md:px-6 lg:px-0`}>
			<Slider>
				<div className="basis-[50%] lg:h-[572px] md:my-10 lg:mb-0  bg-no-repeat lg:w-full flex items-center justify-center lg:justify-start ">
					{sliders.image}
				</div>
			</Slider>
			<div className="lg:w-full mt-6 lg:mt-0 lg:basis-[50%]  flex flex-col  justify-start items-start  lg:block font-bold ">
				<Slider>
					<div>{sliders.header}</div>
				</Slider>
				<div className="my-4 lg:my-6">
					<h5 className="text-sm md:text-base font-bold text-gray text-start lg:text-start xlg:text-base leading-normal lg:w-[80%]">
						{sliders.preHeader}
					</h5>
				</div>

				<Slider>
					<div className="leading-6 mb-6 grid grid-cols-1 gap-y-4 md:gap-y-4">
						{sliders.list.map((d: { id: number; icon: any; desc: string }) => (
							<div key={d.id} className="inline-flex items-center gap-x-4">
								<img
									src={d.icon}
									className="w-8 h-8 md:h-10 md:w-10"
									alt="agendas"
									loading="lazy"
								/>
								<p className="text-xs font-normal md:text-base">{d.desc}</p>
							</div>
						))}
					</div>
				</Slider>
				{/* <NavLink
					to="/"
					className="px-3 py-2 mt-4 text-sm transition-all bg-primary border rounded-lg md:px-4 md:py-3 text-white border-primary-light hover:bg-primary-light hover:text-white">
					Sign up for free
				</NavLink> */}
			</div>
		</article>
	);
}

export default PublicSlider;
