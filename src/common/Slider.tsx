import React, { ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Slider({
	children,
	delay = 0.2,
}: {
	children: ReactNode;
	delay?: number;
}) {
	const ref = useRef(null);
	const isInview = useInView(ref, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInview) {
			controls.start("visible");
		}
	}, [isInview]);
	return (
		<motion.section
			ref={ref}
			variants={{
				hidden: { opacity: 0, translateX: 90 },
				visible: { opacity: 1, translateX: 0 },
			}}
			initial="hidden"
			animate={controls}
			transition={{
				type: "spring",
				duration: 0.2,
				damping: 8,
				delay,
				stiffness: 100,
			}}>
			{children}
		</motion.section>
	);
}
