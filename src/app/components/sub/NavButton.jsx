"use client";

import { useApp } from "@/app/page";

export default function NavButton() {
	const { showDrawer, setShowDrawer } = useApp();

	return (
		<div
			onClick={() => setShowDrawer(!showDrawer)}
			className="cursor-pointer hidden max-[756px]:block">
			<div
				className={`w-[30px] h-[2px] bg-[#000] dark:bg-gray-200 transition-colors mb-[5px] ${
					showDrawer &&
					"rotate-45 translate-y-[7px] -translate-x-[1px]"
				} transition-transform duration-400`}></div>
			<div
				className={`w-[30px] h-[2px] bg-[#000] dark:bg-gray-200 transition-colors mb-[5px] ${
					showDrawer && "opacity-0"
				} transition-opacity duration-400`}></div>
			<div
				className={`w-[30px] h-[2px] bg-[#000] dark:bg-gray-200 transition-colors mb-[5px] ${
					showDrawer &&
					"-rotate-45 -translate-y-[7px] -translate-x-[1px]"
				} transition-transform duration-400`}></div>
		</div>
	);
}
