import Slider from "common/Slider";
import { NavLink } from "react-router-dom";

function SectionThree() {
	return (
		<section className=" lg:h-[640px] bg-footerImage md:bg-shinnyImage bg-cover bg-no-repeat ">
			<article className="h-full max-w-screen-xl xl:pt-24 mx-auto xl:mt-0 ">
				<div className="w-full py-[50px] flex flex-col md:rounded-[70px] max-w-[1027px]  mx-auto px-6 lg:px-0 ">
					<div className="flex flex-col gap-y-3 max-w-[647px]">
						<Slider>
							<h2 className="text-lg md:text-2xl lg:text-[48px] lg:leading-normal font-bold md:font-bold text-left leading-normal lg:font-medium oswald text-white">
								Indulge in the Extraordinary.
							</h2>
							<h2 className="text-lg md:text-2xl lg:text-[48px] lg:leading-normal font-bold md:font-bold text-left leading-normal lg:font-medium oswald text-white">
								<span className="text-[#DBCA00]">Elevate Your Sip</span>,
								Elevate Your Life.
							</h2>
						</Slider>
						<Slider>
							<div className="text-sm md:text-base lg:text-lg text-left text-white">
								<p>
									Ready to embark on a journey of unparalleled taste and
									tranquility? Choose Lakshimi Japanese Tea where every cup is a
									celebration of flavor, wellness, and pure indulgence.
								</p>
							</div>
						</Slider>
						<Slider>
							<div className="mt-6 ">
								<NavLink
									to="/"
									className=" max-w-[198px] h-[56px] flex items-center justify-center md:w-[235px] text-center  px-3 py-2 mb-4 text-xs md:text-base transition-all bg-primary border font-semibold md:px-4 md:py-3 text-white border-primary hover:bg-primary hover:text-white bitter">
									Buy Products
								</NavLink>
							</div>
						</Slider>
					</div>
				</div>
			</article>
		</section>
	);
}

export default SectionThree;
