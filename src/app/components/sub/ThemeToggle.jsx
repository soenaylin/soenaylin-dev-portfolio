"use client";

import { useEffect, useState, useRef } from "react";
import { moonIcon, sunIcon } from "@/assets";
import { useApp } from "@/app/page";
import { reactLocalStorage } from "reactjs-localstorage";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ThemeToggle({ children }) {
	const { darkTheme, setDarkTheme } = useApp();
	const mainRef = useRef(null);

	const addDarkTheme = () => {
		mainRef.current.classList.add("dark");
		setDarkTheme(true);
	};

	const removeDarkTheme = () => {
		mainRef.current.classList.remove("dark");
		setDarkTheme(false);
	};

	useEffect(() => {
		const darkTheme = reactLocalStorage.get("darkTheme");
		const darkThemeParsed =
			darkTheme !== undefined && JSON.parse(darkTheme);

		const systemTheme =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;

		if (darkTheme === undefined) {
			systemTheme ? addDarkTheme() : removeDarkTheme();
		} else {
			darkThemeParsed ? addDarkTheme() : removeDarkTheme();
		}

		console.log(darkTheme, systemTheme, darkThemeParsed);
	});

	return (
		<main ref={mainRef}>
			<div className="bg-[#f2f4f3] dark:bg-zinc-800">
				<div>
					<button
						onClick={() => {
							if (!darkTheme) {
								addDarkTheme();
								reactLocalStorage.set("darkTheme", true);
							} else {
								removeDarkTheme();
								reactLocalStorage.set("darkTheme", false);
							}
						}}
						className="w-[36px] h-[36px] rounded-full fixed right-[30px] bottom-[40px] z-50">
						<motion.span
							animate={{ scale: darkTheme ? 1 : 0 }}
							className="flex items-center justify-center absolute">
							<Image
								src={sunIcon}
								alt="moon"
								width={36}
								height={36}
								className="w-[36px] h-[36px]"
							/>
						</motion.span>
						<motion.span
							animate={{ scale: darkTheme ? 0 : 1 }}
							className="flex items-center justify-center absolute">
							<Image
								src={moonIcon}
								alt="moon"
								width={36}
								height={36}
								className="w-[36px] h-[36px]"
							/>
						</motion.span>
					</button>
					{children}
				</div>
			</div>
		</main>
	);
}
