"use client";
import { createContext, useContext, useState, useRef, useEffect } from "react";

const AppContext = createContext();

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/sub/ThemeToggle";

export function useApp() {
	return useContext(AppContext);
}

export default function Home() {
	const [id, setId] = useState(0);
	const compsRef = useRef(null);
	const [showDrawer, setShowDrawer] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const isIntersecting = entry.isIntersecting;
					if (isIntersecting) {
						setId(entry.target.id);
					}
				});
			},
			{ threshold: 0.8 }
		);

		const compsArr = Array.from(compsRef.current.children);
		compsArr.forEach((comp) => observer.observe(comp));
	}, []);

	return (
		<AppContext.Provider
			value={{
				showDrawer,
				setShowDrawer,
			}}>
			<ThemeToggle>
				<Header />
				<div ref={compsRef}>
					<Hero />
					<About />
					<Education />
					<Skills />
					<Projects />
					<Contact />
					<Footer />
				</div>
			</ThemeToggle>
		</AppContext.Provider>
	);
}
