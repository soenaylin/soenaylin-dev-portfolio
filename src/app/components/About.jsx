"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import { motion } from "framer-motion";

import { aboutText } from "@/assets";

export default function About() {
	return (
		<div className="px-[19%] pt-[90px] pb-[200px] max-[1516px]:px-[12%] max-[1195px]:px-[3%] max-[1195px]:h-full">
			<Heading text="About Me" />
			<div className="grid grid-cols-2 items-center gap-[0px] max-[939px]:grid-cols-1 max-[939px]:gap-[80px]">
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.4 }}
					viewport={{ once: true }}
					className="pl-[7%] max-[939px]:flex max-[939px]:justify-center max-[939px]:pl-0">
					<Image
						src={"/about-img.jpg"}
						alt="About Me"
						width={500}
						height={500}
						className="max-w-[370px] w-full max-[431px]:w-[320px] max-[394px]:w-[300px] max-[376px]:w-[270px] rounded-[30px] shadow-2xl"
					/>
				</motion.div>

				<div className="max-[1601px]:pl-[50px] max-[1516px]:pl-0">
					<motion.p
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.4 }}
						viewport={{ once: true }}
						className="text-[18px] leading-[1.9] mb-[40px] opacity-85">
						{aboutText}
					</motion.p>
					<motion.a
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.4 }}
						viewport={{ once: true }}
						href="#"
						className="inline-block border border-[#7d5537] py-[12px] px-[30px] leading-[1.4] text-[14px] rounded-[30px] uppercase">
						<Image
							src={"/download-line.svg"}
							alt="download icon"
							width={15}
							height={15}
							className="inline-block mr-[5px]"
						/>
						Download CV
					</motion.a>
				</div>
			</div>
		</div>
	);
}
