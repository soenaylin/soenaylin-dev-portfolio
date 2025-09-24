"use client";

import Image from "next/image";
import { heroIcons, heroIconsWhite, heroDiscription } from "@/assets";
import { useApp } from "@/app/page";
import { motion } from "framer-motion";

export default function () {
	const { darkTheme, setDarkTheme } = useApp();
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
			id="home"
			className="relative">
			<div className="h-full w-full min-h-svh relative grid grid-cols-2 gap-8 px-[19%] place-items-center max-[1516px]:px-[12%] max-[1195px]:px-[3%] max-[1195px]:h-full max-[1195px]:grid-cols-1 max-[1195px]:gap-[16px]">
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.4 }}
					className="max-[1195px]:pt-[115px]">
					<h1 className="text-[40px] opacity-80 font-bold mb-[24px] max-[1340px]:text-[25px] max-[1340px]:mb-[20px] dark:text-white transition-colors">
						Soe Nay Lin
					</h1>
					<h1 className="text-[40px] opacity-80 font-bold mb-[36px] max-[1340px]:text-[25px] max-[1340px]:mb-[20px] dark:text-white transition-colors">
						Junior Web Developer
					</h1>
					<p className="text-lg opacity-85 leading-[1.9] mb-[40px] max-[1340px]:text-[15px] dark:text-gray-200 transition-colors">
						{heroDiscription}
					</p>
					<a
						href="/SoeNayLin's_CV.pdf"
						download=""
						className="inline-block border border-[#7d5537] py-[12px] px-[30px] leading-[1.4] text-[14px] rounded-[30px] uppercase  dark:text-gray-200 transition-colors">
						{darkTheme ? (
							<Image
								src={"/download-line-white.svg"}
								alt="download icon"
								width={15}
								height={15}
								className="inline-block mr-[5px]"
							/>
						) : (
							<Image
								src={"/download-line.svg"}
								alt="download icon"
								width={15}
								height={15}
								className="inline-block mr-[5px]"
							/>
						)}
						Download CV
					</a>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.4 }}
					className="pl-[48%] opacity-95 flex relative pb-[55px] max-[1195px]:text-center max-[1195px]:pl-[20%] max-[507px]:pl-[5%] max-[434px]:pl-0">
					<Image
						src={"/hero-img.svg"}
						alt="hero image"
						width={700}
						height={700}
						priority={true}
						className="h-auto max-w-[460px] z-5 max-[1340px]:w-[400px] max-[415px]:w-[300px]"
					/>
					<Image
						src={"/hero-img2.svg"}
						alt="hero image"
						width={400}
						height={400}
						priority={true}
						className="h-auto max-w-[325px] absolute ml-[20px] top-[104px] max-[1340px]:w-[280px] max-[415px]:w-[205px] dark:opacity-[90%]"
					/>
				</motion.div>
			</div>
			<div className="max-[1195px]:hidden">
				<ul className="absolute top-1/2 px-[9%] -translate-y-1/2 max-[1535px]:px-[3%]">
					{(darkTheme ? heroIconsWhite : heroIcons).map(
						(item, index) => (
							<motion.li
								custom={index}
								variants={variants}
								initial="hidden"
								whileInView="visible"
								whileHover={{ scale: 1.1 }}
								viewport={{ margin: "50px", once: true }}
								key={index}
								className="my-[26px] text-[24px]">
								<a
									href={item.link}
									target="_blank">
									<Image
										src={item.icon}
										alt="social icon"
										width={24}
										height={24}
									/>
								</a>
							</motion.li>
						)
					)}
				</ul>
			</div>
		</div>
	);
}
