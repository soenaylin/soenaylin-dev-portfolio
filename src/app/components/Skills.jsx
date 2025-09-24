"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import { skillsData } from "@/assets";
import { motion } from "framer-motion";

export default function Skills() {
	const variants = {
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.3 + i * 0.07,
			},
		}),
		hidden: {
			opacity: 0,
			y: 30,
		},
	};

	return (
		<div
			id="skills"
			className="px-[19%] max-[1516px]:px-[12%] max-[1195px]:px-[3%] min-h-screen flex flex-col items-center justify-center gap-y-20">
			<Heading text="Skills" />
			<div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10">
				{skillsData.map((item, i) => (
					<motion.div
						custom={i}
						variants={variants}
						initial="hidden"
						whileInView="visible"
						whileHover={{ scale: 1.1 }}
						viewport={{ margin: "50px", once: true }}
						key={i}
						className="flex items-center justify-center gap-x-3 border border-red-300 rounded-xl px-5 py-2 bg-zinc-200 dark:bg-gray-300 transition-colors shadow-2xl">
						<Image
							src={item.icon}
							alt="Skills Image"
							width={100}
							height={100}
							className="h-auto w-[40px]"
						/>
						<p>{item.name}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
}
