"use client";

import { useState, useRef, useEffect } from "react";
import Heading from "./sub/Heading";
import Project from "./sub/Project";
import { projectsButton, projectsData } from "@/assets";
import { motion, animate } from "framer-motion";

export default function Projects() {
	const [tech, setTech] = useState("All");
	const [index, setIndex] = useState(0);
	const prevIndex = useRef(0);
	const buttonsRef = useRef([]);

	const handleClick = () => {
		animate(buttonsRef.current[prevIndex.current], {
			opacity: 0.5,
			scale: 1,
		});
		animate(buttonsRef.current[index], {
			opacity: 1,
			scale: 1.2,
		});
	};

	useEffect(() => {
		handleClick();
		prevIndex.current = index;
	}, [index]);

	return (
		<div
			id="portfolio"
			className="min-h-screen py-20 px-[19%] max-[1516px]:px-[12%] max-[1195px]:px-[3%]">
			<Heading text={"Projects"} />
			<div className="flex flex-wrap items-center justify-between gap-4 py-10">
				{projectsButton.map((item, index) => (
					<motion.button
						initial={{
							opacity: index === 0 ? 1 : 0.5,
							scale: index === 0 ? 1.2 : 1,
						}}
						ref={(el) => buttonsRef.current.push(el)}
						onClick={() => {
							setTech(item);
							setIndex(index);
						}}
						key={index}
						className="border border-red-300 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-900 dark:text-gray-200 transition-colors shadow-2xl">
						{item}
					</motion.button>
				))}
			</div>
			<div className="flex flex-wrap items-center justify-center gap-5">
				{projectsData
					.filter((project) => {
						return project.tech.some((item) =>
							tech === "All" ? true : item === tech
						);
					})
					.map((data, i) => (
						<motion.div
							key={`id-${i}`}
							layout>
							<Project
								data={data}
								index={i}
							/>
						</motion.div>
					))}
			</div>
		</div>
	);
}
