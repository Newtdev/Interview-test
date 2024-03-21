import React from "react";
import AccordionComp from "../components/Accordion";
import { useFormik } from "formik";
import { getTextFieldFormikProps } from "utils/utils";
import Slider from "common/Slider";

export default function FAQ() {
	const formik = useFormik({
		initialValues: {},
		onSubmit: () => {},
	});
	return (
		<section>
			<article className="max-w-screen-xl mx-auto mt-[5.1rem]">
				<div className="mt-24 lg:mt-0 md:h-[30vh] w-full flex flex-col justify-center items-center font-bold mx-auto lg:mx-0">
					<Slider>
						<h1 className="text-lg md:text-[40px] text-deepblack font-[900] lg:text-start xlg:text-[60px] leading-normal">
							Frequently asked questions
						</h1>
					</Slider>
					<div className="mt-8 px-6  lg:px-10 leading-6  lg:w-[70%]">
						<Slider delay={0.2}>
							<p className="text-sm font-normal text-center text-gray lg:text-base lg:leading-normal">
								Your Burning Questions, Answered with Ease, we're committed to
								providing you with the information you need, right at your
								fingertips.
							</p>
						</Slider>
					</div>
				</div>
				<div className="flex items-center flex-col gap-y-24 lg:flex-row lg:gap-x-24 h-full mt-10 md:mt-0 mb-10 lg:mb-0 lg:h-[90vh] px-2 md:px-10 lg:px-0">
					<div className="lg:basis-1/2">
						<Slider>
							<AccordionComp />
						</Slider>
					</div>

					<form
						className="w-full lg:basis-1/2 space-y-6 p-6  rounded-lg shadow-lg"
						onSubmit={formik.handleSubmit}>
						<Slider>
							<div className="my-6">
								<h2 className="font-bold text-2xl">Ask your question</h2>
							</div>
							<div
								className={`border h-10 md:h-14 mt-4 outline-none flex items-center rounded-lg w-full bg-inherit  border-gray-dark`}>
								<input
									className={`outline-none h-full bg-inherit text-sm rounded placeholder:text-sm w-full p-3 `}
									placeholder="Name"
								/>
							</div>
							<div
								className={`border h-10 md:h-14 mt-4 outline-none flex items-center rounded-lg w-full bg-inherit  border-gray-dark`}>
								<input
									className={`outline-none h-full bg-inherit text-sm rounded placeholder:text-sm w-full p-3 `}
									placeholder="Email"
								/>
							</div>

							<div>
								<textarea
									rows={10}
									className={`border w-full rounded-lg border-gray-dark p-3 mt-6`}
									placeholder="Question"></textarea>
							</div>

							<button
								type="submit"
								className="w-full px-2 py-3 mt-6 text-sm text-white transition-all rounded-lg md:px-4 md:py-3  md:text-lg bg-primary hover:bg-primary-light">
								Send
							</button>
						</Slider>
					</form>
					{/* </div> */}
				</div>
			</article>
		</section>
	);
}
