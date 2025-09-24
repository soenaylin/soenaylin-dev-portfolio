"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import { arrowLeftIcon, experienceData } from "@/assets";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Education() {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 95%", "end end"],
	});

	const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

	return (
		<div className="relative pt-20 pb-[250px] px-[19%] max-[1516px]:px-[12%] max-[1195px]:px-[3%]">
			<Heading text={"Education"} />
			<div className="max-[863px]:flex max-[863px]:flex-col max-[863px]:items-center max-[863px]:gap-[100px]">
				<Image
					src={"/edu-img.svg"}
					alt={"Education Image"}
					width={297}
					height={237}
					className="absolute top-14 right-[23%] max-[1669px]:right-[20%] max-[1366px]:right-[16%] max-[1277px]:right-[12%] max-[1150px]:right-[5%]  max-[863px]:static opacity-95"
				/>
				<div
					ref={containerRef}
					className="relative w-full h-full flex flex-col items-center justify-center gap-y-10 max-[1150px]:gap-y-20 py-10">
					{experienceData.map((data, i) => (
						<div
							key={`id-${i}`}
							className={`w-[600px] max-[1400px]:w-[480px] max-[639px]:w-full px-12 max-[639px]:px-0 relative ${
								i % 2 === 0
									? "-left-[300px] max-[1400px]:-left-[240px] max-[1150px]:-left-0"
									: "left-[300px] max-[1400px]:left-[240px] max-[1150px]:left-0"
							}`}>
							<motion.div
								initial={{
									opacity: 0,
									x: i % 2 === 0 ? -80 : 80,
								}}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.7,
									type: "spring",
									stiffness: 50,
								}}
								className="relative flex flex-col gap-y-3 border border-red-300 rounded-md bg-white dark:bg-gray-300 transition-colors p-4 tracking-wide z-20 max-[639px]:text-sm shadow-2xl">
								<h1 className="text-xl max-[639px]:text-lg font-light text-gray-700">
									{data.title}
								</h1>
								<p className="text-gray-800">
									<span className="block font-light">
										Education:
									</span>
									<span className="block pl-2 font-extralight">
										{data.education}
									</span>
								</p>
								<div className="text-gray-800">
									<span className="font-light">
										Experience:
									</span>
									<ul className="pl-2">
										{data.experience.map((exp, j) => (
											<li
												key={j}
												className="my-1 font-extralight">
												{exp}
											</li>
										))}
									</ul>
								</div>
								<span
									className={`absolute top-20 text-red-300 -translate-y-1/2 max-[1150px]:hidden w-[24px] h-[24px] block ${
										i % 2 === 0
											? "left-full"
											: "right-full rotate-180"
									}`}>
									{arrowLeftIcon}
								</span>
							</motion.div>
							<div
								className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center -translate-y-1/2 z-10 bg-white dark:bg-gray-300 transition-colors text-red-400 font-light shadow-2xl ${
									i % 2 === 0
										? "left-full -translate-x-1/2 max-[1150px]:left-1/2"
										: "right-full translate-x-1/2 max-[1150px]:right-1/2"
								}`}>
								{i < 1 ? "2019" : i === 1 ? "2022" : "2023"}
							</div>
						</div>
					))}

					<motion.div
						initial={{ scaleY: 0 }}
						style={{ scaleY: scrollY }}
						className={`absolute w-1 h-full bg-gray-300 rounded-full origin-top`}></motion.div>
				</div>
			</div>
		</div>
	);
}
