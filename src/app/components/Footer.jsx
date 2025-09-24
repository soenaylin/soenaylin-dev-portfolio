"use client";

import Image from "next/image";
import { heroIcons } from "@/assets";

export default function Footer() {
	return (
		<div className="flex py-[20px] items-center justify-between w-full h-[93px] bg-[#D9D9D9]/20 px-[19%] max-[1516px]:px-[12%] max-[1195px]:px-[3%] max-[660px]:flex-col max-[660px]:h-auto">
			<div className="max-[660px]:mb-[50px]">
				<a href="#">
					<Image
						src={"/snl-black-logo.png"}
						alt="snl black logo"
						width={90.44}
						height={56.61}
						className="w-[64px] h-auto"
					/>
				</a>
			</div>
			<p className="text-[14px] text-[#888888] max-[660px]:mb-[25px]">
				Copyright © 2025 Soe Nay Lin. All rights reserved.
			</p>
			<div className="">
				<ul className="flex gap-[20px]">
					{heroIcons.map((item, index) => (
						<li
							key={index}
							className="my-[26px] text-[24px]">
							<a href="#">
								<Image
									src={item.icon}
									alt="social icon"
									width={24}
									height={24}
									className="opacity-[65%]"
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
