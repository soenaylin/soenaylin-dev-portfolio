"use client";

import { motion } from "framer-motion";

export default function Heading({ text }) {
	return (
		<motion.h1
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.7, delay: 0.4 }}
			viewport={{ once: true }}
			className="text-[40px] opacity-80 font-semibold mb-[160px] self-start max-[800px]:mb-[120px] max-[500px]:text-[30px] max-[500px]:mb-[80px] dark:text-gray-200 transition-colors">
			{text}
		</motion.h1>
	);
}
