import React, { ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Appear({ children }: { children: ReactNode }) {
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
				hidden: { opacity: 0 },
				visible: { opacity: 1 },
			}}
			initial="hidden"
			animate={controls}
			transition={{
				type: "spring",
				duration: 1,
				damping: 8,
				delay: 0,
				stiffness: 100,
			}}>
			{children}
		</motion.section>
	);
}
