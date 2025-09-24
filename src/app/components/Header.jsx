"use client";

import Image from "next/image";
import { navTexts } from "@/assets";
import NavButton from "./sub/NavButton";
import { useApp } from "@/app/page";
import { motion } from "framer-motion";

export default function Header() {
	const { showDrawer, setShowDrawer, darkTheme } = useApp();
	return (
		<motion.div
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: 0.4 }}
			className={`fixed bg-transparent backdrop-blur-[25px] right-0 top-0 z-40 w-full flex items-center justify-between py-[33px] px-[9%]  max-[1535px]:py-[15px] max-[1535px]:px-[3%]`}>
			<a href="#home">
				{darkTheme ? (
					<Image
						src={"/snl-white-logo.png"}
						alt="snl white logo"
						width={90.44}
						height={56.61}
						className="w-[64px] h-auto"
					/>
				) : (
					<Image
						src={"/snl-black-logo.png"}
						alt="snl black logo"
						width={90.44}
						height={56.61}
						className="w-[64px] h-auto"
					/>
				)}
			</a>

			{/* max-[756px]:hidden */}
			<ul
				className={`flex items-center max-[756px]:absolute max-[756px]:top-[100%] max-[756px]:-right-[100%] ${
					showDrawer && "max-[756px]:right-0"
				} max-[756px]:w-[300px] max-[756px]:min-h-[400px] max-[756px]:flex max-[756px]:flex-col max-[756px]:bg-[#800e13] max-[756px]:text-white max-[756px]:justify-center transition-all duration-700`}>
				{navTexts.map((text, index) => (
					<li
						key={index}
						onClick={() => setShowDrawer(false)}
						className="ml-[60px] font-light border-b-2 border-transparent hover:border-current duration-300 max-[756px]:ml-0 max-[756px]:mb-[24px] dark:text-gray-200 transition-colors">
						<a href={text.link}>{text.name}</a>
					</li>
				))}
				{/* <li className="ml-[60px]">
					<Image
						src={darkModeIcon}
						width={24}
						height={24}
						className="w-[24px] pb-[5px]"
						alt="night mode icon"
					/>
				</li> */}
			</ul>

			<NavButton />
		</motion.div>
	);
}
