// import React, { useState, useMemo } from "react";
// import KrextLogo from "assets/images/krext_logo.png";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { MdOutlineMenu } from "react-icons/md";
// import { RoutePaths } from "constants/RouteConstants";

// function PublicHeader() {
// 	const [toggle, setToggle] = useState(false);
// 	const navigate = useNavigate();

// 	const handleToggle = () => setToggle((prevState) => !prevState);

// 	const showMobileMenu = !toggle ? "hidden lg:flex" : "flex";
// 	const navHederLinks = useMemo(
// 		() => [
// 			{ id: 1, name: "Solutions", link: RoutePaths.SOLUTIONS },
// 			{ id: 2, name: "Resources", link: RoutePaths.RESOURCES },
// 			{ id: 2, name: "Pricing", link: RoutePaths.PRICING },
// 			{ id: 3, name: "Why Krext ?", link: RoutePaths.COMPANY },
// 		],
// 		[]
// 	);

// 	return (
// 		<header>
// 			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-lg fixed top-0 left-0 w-screen z-50">
// 				<div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
// 					<div className="flex items-center gap-x-10">
// 						<NavLink
// 							className=""
// 							to={RoutePaths.HOME}
// 							onClick={() => {
// 								if (toggle) {
// 									handleToggle();
// 								}
// 							}}>
// 							<img
// 								src={KrextLogo}
// 								className="md:h-[56px] md:w-[110px]"
// 								alt="Krext logo"
// 							/>
// 						</NavLink>

// 						<div
// 							className={`hidden transition-opacity ease-in-out justify-between items-center md:flex md:w-auto`}>
// 							<ul className="flex mt-4 md:gap-[24px] text-[#00041D] font-normal flex-row lg:space-x-6 lg:mt-0 ">
// 								{navHederLinks.map((d, idx) => {
// 									return (
// 										<>
// 											<button
// 												key={d.id}
// 												className={`duration-200 ease-in delay-100 hover:border-b-2 hover:border-b-primary ${
// 													idx === 1 ? "hover:relative group" : ""
// 												}`}>
// 												<span
// 													className="block py-2 pl-3 pr-4 text-black rounded cursor-pointer bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
// 													onClick={() => {
// 														if (idx !== 1) {
// 															navigate(d.link);
// 															handleToggle();
// 														}
// 													}}>
// 													{d.name}
// 												</span>
// 												{idx === 1 && (
// 													<div className="absolute left-0 hidden h-auto group-hover:block dropdown-menu ">
// 														<ul className="top-0 left-0 w-48 px-2 py-8 mt-8 bg-white shadow-md rounded-xl">
// 															<li className="items-start content-start justify-start p-2 font-semibold list-none bg-blue-500 hover:text-primary-dark justify-items-start">
// 																<a href={RoutePaths.BLOG}>
// 																	<span className="p-4">Blog</span>
// 																</a>
// 															</li>
// 															<li className="items-start content-start justify-start p-2 font-semibold list-none bg-blue-500 hover:text-primary-dark justify-items-start">
// 																<a href={RoutePaths.BLOG}>
// 																	<span className="p-4">Release Note</span>
// 																</a>
// 															</li>

// 															<li className="py-1">
// 																<a
// 																	href="http://"
// 																	className="block text-base font-bold text-purple-500 uppercase cursor-pointer hover:text-purple-700">
// 																	Item
// 																</a>
// 															</li>
// 														</ul>
// 													</div>
// 												)}
// 												{idx === 3 && (
// 													<div className="absolute left-0 hidden h-auto group-hover:block dropdown-menu ">
// 														<ul className="top-0 left-0 w-48 px-2 py-8 mt-8 bg-white shadow-md rounded-xl">
// 															<li className="items-start content-start justify-start p-2 font-semibold list-none bg-blue-500 hover:text-primary-dark justify-items-start">
// 																<a href={RoutePaths.BLOG}>
// 																	<span className="p-4">FAQ</span>
// 																</a>
// 															</li>
// 															<li className="items-start content-start justify-start p-2 font-semibold list-none bg-blue-500 hover:text-primary-dark justify-items-start">
// 																<a href={RoutePaths.BLOG}>
// 																	<span className="p-4">Use Cases</span>
// 																</a>
// 															</li>
// 														</ul>
// 													</div>
// 												)}
// 											</button>
// 										</>
// 									);
// 								})}

// 								<NavLink
// 									to="/"
// 									className="flex md:hidden px-[12px] py-[8px] text-sm mb-4 ml-2 mt-6 bg-primary text-white rounded-lg hover:bg-primary-light transition-all">
// 									30 days free access
// 								</NavLink>
// 							</ul>
// 						</div>
// 					</div>
// 					<div className="flex items-center lg:order-2">
// 						<div className="flex items-center gap-6">
// 							<NavLink
// 								className="text-sm text-primary md:text-md"
// 								to={RoutePaths.SIGN_IN}
// 								target="_blank">
// 								Sign in
// 							</NavLink>
// 							<NavLink
// 								to={RoutePaths.SIGN_UP}
// 								target="_blank"
// 								className="hidden md:flex px-[16px] py-[12px] bg-primary text-white rounded-lg hover:bg-primary-light transition-all">
// 								30 days free access
// 							</NavLink>
// 						</div>

// 						<button
// 							data-collapse-toggle="toggle"
// 							type="button"
// 							className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-transparent"
// 							aria-controls="toggle"
// 							onClick={handleToggle}>
// 							<MdOutlineMenu className="text-2xl cursor-pointer" />
// 						</button>
// 					</div>
// 				</div>
// 			</nav>
// 		</header>
// 	);
// }

// export default PublicHeader;

import React, { useState, useMemo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { RoutePaths } from "constants/RouteConstants";
import KrextLogo from "assets/images/KrextLogo.png";
import Logo from "assets/svg/Logo.svg";

function PublicHeader() {
	const [toggle, setToggle] = useState(false);
	const navigate = useNavigate();

	const handleToggle = () => setToggle((prevState) => !prevState);

	const showMobileMenu = !toggle ? "hidden xl:flex" : "flex";
	const navHederLinks = useMemo(
		() => [
			{ id: 1, name: "Home", link: "/" },
			{ id: 2, name: "About", link: "/" },
			{ id: 3, name: "Product", link: "/" },
			{ id: 4, name: "Features", link: "/" },
			{ id: 5, name: "Award", link: "/" },

			{ id: 7, name: "FAQ", link: "/" },
		],
		[]
	);
	return (
		<header>
			<nav className="bg-white h-[80px] border-gray-200 lg:px-6 py-2.5 shadow-lg fixed top-0 left-0 w-screen z-50">
				<div className="flex bg-white items-center justify-between max-w-screen-xl mx-auto">
					<button
						data-collapse-toggle="toggle"
						type="button"
						className="justify-self-start inline-flex items-center p-2 ml-1 text-sm rounded-lg xl:hidden hover:bg-transparent"
						aria-controls="toggle"
						onClick={handleToggle}>
						<MdOutlineMenu className="text-2xl cursor-pointer" />
					</button>
					<div className="flex items-center justify-center w-full lg:hidden">
						<NavLink className="" to={RoutePaths.HOME}>
							<img
								src={Logo}
								className="object-contain md:h-[58px] md:w-[58px] mx-auto "
								alt="Krext logo"
							/>
						</NavLink>
					</div>
				</div>
				<div
					className={`${showMobileMenu} bg-white mt-3 px-4 py-2 lg:py-0  h-fit transition-opacity ease-in-out justify-between items-center w-full xl:flex xl:w-full  xl:order-1`}
					onClick={() => setToggle((prevState) => !prevState)}>
					<ul className="flex  w-full flex-col mt-4 md:gap-[24px] text-[#00041D] font-normal xl:flex-row xl:justify-between xl:items-end xl:space-x-1 xl:mt-0 ">
						<div className=" lg:hidden gap-x-10">
							{navHederLinks.map((d, idx) => (
								<li key={d.id}>
									<Link
										to={d.link}
										className="block  py-2 text-[14px] text-[#333333] xl:bg-transparent xl:p-0"
										// onClick={() => navigate(d.link)}
									>
										{d.name}
									</Link>
								</li>
							))}
						</div>
						<div className="hidden lg:flex gap-x-10 pb-2">
							{navHederLinks.slice(0, 3).map((d, idx) => (
								<li key={d.id}>
									<Link
										to={d.link}
										className="block  py-2 text-[14px] text-[#333333] xl:bg-transparent xl:p-0"
										// onClick={() => navigate(d.link)}
									>
										{d.name}
									</Link>
								</li>
							))}
						</div>
						<NavLink className="" to={RoutePaths.HOME}>
							<img
								src={Logo}
								className="object-contain md:h-[58px] md:w-[58px] hidden md:block pb-2"
								alt="Krext logo"
							/>
						</NavLink>
						<div className="hidden lg:flex gap-x-10 pb-2">
							{navHederLinks.slice(-3).map((d, idx) => (
								<li key={d.id}>
									<Link
										to={d.link}
										className="block  py-2 text-[14px] text-[#333333] xl:bg-transparent xl:p-0"
										// onClick={() => navigate(d.link)}
									>
										{d.name}
									</Link>
								</li>
							))}
						</div>
						{/* <NavLink
								to="/"
								className="flex md:hidden px-[12px] py-[8px] text-sm mb-4 ml-2 mt-6 bg-primary text-white rounded-lg hover:bg-primary-light transition-all">
								30 days free access
							</NavLink> */}
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default PublicHeader;
