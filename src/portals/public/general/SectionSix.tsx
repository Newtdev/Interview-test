import React from "react";

import Slider from "common/Slider";
import { NavLink } from "react-router-dom";

const QuestionComp = ({ num, header, desc }: any) => {
	return (
		<div className="flex gap-x-10">
			<h2 className="lg:text-[32px] font-bold text-primary leading-[40px] bitter">
				{num}
			</h2>
			<div className="flex flex-col gap-y-2">
				<h4 className="lg:text-lg font-semibold leading-[32px] text-[#333333]">
					{header}
				</h4>
				<p className="lg:text-lg font-semibold leading-[32px] text-[#666666]">
					{desc}
				</p>
			</div>
		</div>
	);
};

function SectionSix() {
	return (
		<section className="bg-white">
			<article className="h-full max-w-screen-xl mx-auto lg:mt-0 px-7  ">
				<div className="w-full flex flex-col gap-y-2 pt-24 pb-10 md:pl-[4.5rem] ">
					<Slider>
						<h2 className="text-xl md:text-5xl text-center font-bold text-primary bitter ">
							Frequently Asked Questions
						</h2>
					</Slider>

					<Slider delay={1}>
						<p className="text-xs font-normal text-center text-[#202020] md:text-base lg:text-lg mx-auto max-w-[688px] ">
							Dive into the details! Here are answers to some commonly asked
							questions. If you don't find what you're looking for, feel free to
							reach out to us – we're here to help!
						</p>
					</Slider>
					<div className="grid grid-cols-1  mt-10 gap-6 content-center  max-w-[569px] mx-auto ">
						<QuestionComp
							num={"01"}
							header="Can children drink it?"
							desc="No. Do not give to children under 1 year old."
						/>
						<hr className="border-[#fef8f6]" />
						<QuestionComp
							num={"02"}
							header="Are there staples attached to the tea bag?"
							desc="There are no staples nor any metals attached. So, please drink it with peace of mind."
						/>
						<hr className="border-[#FEF8F6]" />
						<QuestionComp
							num={"03"}
							header="Is there an expiration date?"
							desc="The expiration date is 2 years after the date of manufacture."
						/>
					</div>
					<div className="mt-12 ">
						<NavLink
							to="/"
							className=" max-w-[198px] h-[56px] flex items-center justify-center md:w-[235px] text-center mx-auto px-3 py-2 mb-4 text-xs md:text-base transition-all bg-primary border font-semibold md:px-4 md:py-3 text-white border-primary hover:bg-primary hover:text-white bitter">
							Buy Now
						</NavLink>
					</div>
				</div>
			</article>
		</section>
	);
}

export default SectionSix;
