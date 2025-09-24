"use client";

import { useEffect, useState, useRef } from "react";
import { moonIcon, sunIcon } from "@/assets";
import Image from "next/image";

export default function ThemeToggle({ children }) {
	const [darkTheme, setDarkTheme] = useState(false);
	const mainRef = useRef(null);

	const addDarkTheme = () => {
		mainRef.current.classList.add("dark");
		setDarkTheme(true);
	};

	const removeDarkTheme = () => {
		mainRef.current.classList.remove("dark");
		setDarkTheme(false);
	};

	return (
		<main>
			<div className="bg-[#f2f4f3] dark:bg-zinc-800">
				<div>
					<button className="bg-[#800e13] w-[36px] h-[36px] rounded-full fixed right-[30px] bottom-[25px]">
						<span className="flex items-center justify-center">
							<Image
								src={moonIcon}
								alt="moon"
								width={20}
								height={20}
							/>
						</span>
					</button>
					{children}
				</div>
			</div>
		</main>
	);
}
