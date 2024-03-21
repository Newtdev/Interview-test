import React from "react";
import Slider from "common/Slider";
import Logo from "assets/svg/Logo.svg";
import Twitter from "assets/svg/Twitter.svg";
import Instagram from "assets/svg/Instagram.svg";
import LinkedIn from "assets/svg/LinkedIn.svg";
import Facebook from "assets/svg/Facebook.svg";

function Footer() {
	return (
		<footer className="bg-white text-white h-[160px] md:h-[200px] border-t border-[#FFE8CC] rounded-t-full">
			<section className="h-full max-w-screen-xl  mx-auto lg:mt-0 md:px-6 lg:px-10 ">
				<article className="flex flex-col justify-center ">
					<div className="basis-full  flex flex-col justify-center py-10 items-center  gap-y-2 gap-x-4 ">
						<Slider>
							<img src={Logo} alt="logo" className="w-16 h-16 mb-4" />
						</Slider>
						<h3 className="font-medium text-sm text-[#4D4D4D]">Follow Us</h3>
						<div className="basis-full  flex items-center  gap-y-2 gap-x-4 ">
							<Slider>
								<div className="flex items-center gap-x-6">
									<a href="/">
										<img src={Twitter} alt="twitter" />
									</a>
									<a href="/">
										<img src={Instagram} alt="instagram" />
									</a>
									<a href="/">
										<img src={LinkedIn} alt="linkedin" />
									</a>
									<a href="/">
										<img src={Facebook} alt="facebook" />
									</a>
								</div>
							</Slider>
						</div>
					</div>
				</article>
			</section>
		</footer>
	);
}

export default Footer;
