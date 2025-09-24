"use client";

import Heading from "./sub/Heading";
import { contactEmail, contactPhone, contactAddress } from "@/assets";
import { motion } from "framer-motion";

export default function Contact() {
	return (
		<div className="px-[19%] pt-[200px] pb-[200px] max-[1516px]:px-[12%] max-[1195px]:px-[3%] max-[1195px]:h-full">
			<Heading text="Get In Touch" />
			<div className="flex max-[1113px]:flex-col-reverse max-[1113px]:gap-[100px] max-[1113px]:items-center">
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.4 }}
					viewport={{ once: true }}>
					<form className="flex flex-col gap-y-[17px] px-[20px] max-[431px]:px-0">
						<div className="max-[696px]:flex max-[696px]:flex-col max-[696px]:gap-[20px]">
							<input
								type="text"
								placeholder="name"
								className="w-[280px] max-[696px]:w-full max-[1296px]:w-[240px] border mr-[20px] max-[450px]:mr-0 rounded-full h-[43px] border-[#7D5537]/50 px-[20px] py-[8px] placeholder:text-[18px] placeholder:tracking-[7%] placeholder:leading-[27px] placeholder:opacity-[70%] focus:outline-none focus:text-gray-500 focus-visible:text-gray-500 focus-within:text-gray-500 not-focus-within:text-gray-500"
							/>
							<input
								type="email"
								placeholder="email"
								className="w-[280px] max-[696px]:w-full max-[1296]:w-[240px] border mr-[20px] max-[450px]:mr-0 rounded-full h-[43px] border-[#7D5537]/50 px-[20px] py-[8px] placeholder:text-[18px] placeholder:tracking-[7%] placeholder:leading-[27px] placeholder:opacity-[70%] focus:outline-none focus:text-gray-500 focus-visible:text-gray-500 focus-within:text-gray-500 not-focus-within:text-gray-500"
							/>
						</div>
						<input
							type="text"
							placeholder="subject"
							className="w-[580px] max-[696px]:w-full max-[1296px]:w-[500px] border mr-[20px] max-[450px]:mr-0 rounded-full h-[43px] border-[#7D5537]/50 px-[20px] py-[8px] placeholder:text-[18px] placeholder:tracking-[7%] placeholder:leading-[27px] placeholder:opacity-[70%] focus:outline-none focus:text-gray-500 focus-visible:text-gray-500 focus-within:text-gray-500 not-focus-within:text-gray-500"
						/>
						<textarea
							placeholder="write me . . ."
							className="w-[580px] max-[696px]:w-full max-[1296px]:w-[500px] h-[185px] border mr-[20px] max-[450px]:mr-0 rounded-[20px] border-[#7D5537]/50 px-[20px] py-[8px] placeholder:text-[18px] placeholder:tracking-[7%] placeholder:leading-[27px] placeholder:opacity-[70%] resize-none focus:outline-none focus:text-gray-500 focus-visible:text-gray-500 focus-within:text-gray-500 not-focus-within:text-gray-500"></textarea>

						<button
							type="submit"
							className="w-max border border-[#7d5537]/50 py-[8px] px-[30px] leading-[1.4] text-[16px] rounded-[30px] uppercase mr-[20px] opacity-[70%] cursor-pointer">
							Send
						</button>
					</form>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.4 }}
					viewport={{ once: true }}
					className="flex flex-col items-center justify-center  gap-y-[40px] pl-[90px] pb-[40px] max-[1233px]:pl-0">
					<p className="self-start text-[20px] opacity-[80%]">
						{contactEmail}
					</p>
					<p className="self-start text-[20px] opacity-[80%]">
						{contactPhone}
					</p>
					<p className="self-start text-[20px] opacity-[80%]">
						{contactAddress}
					</p>
				</motion.div>
			</div>
		</div>
	);
}
