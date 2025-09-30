//navbar
export const navTexts = [
	{
		name: "Home",
		link: "#home",
	},
	{
		name: "About",
		link: "#about",
	},
	{
		name: "Skills",
		link: "#skills",
	},
	{
		name: "Portfolio",
		link: "#portfolio",
	},
	{
		name: "Contact",
		link: "#contact",
	},
];

export const darkModeIcon = "/icons/night-mode.png";

//hero
export const heroIcons = [
	{
		icon: "/icons/facebook.png",
		link: "https://www.facebook.com/soenay.lin.9083/",
	},
	{
		icon: "/icons/linkedin.png",
		link: "https://www.linkedin.com/in/soe-nay-lin-97b19128b/",
	},
	{
		icon: "/icons/github-icon.png",
		link: "https://github.com/soenaylin?tab=repositories",
	},
];

export const heroIconsWhite = [
	{
		icon: "/icons/facebook-white.png",
		link: "https://www.facebook.com/soenay.lin.9083/",
	},
	{
		icon: "/icons/linkedin-white.png",
		link: "https://www.linkedin.com/in/soe-nay-lin-97b19128b/",
	},
	{
		icon: "/icons/github-icon-white.png",
		link: "https://github.com/soenaylin?tab=repositories",
	},
];

export const downloadIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor">
		<path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path>
	</svg>
);

export const heroDiscription =
	"Hi, I'm Soe Nay Lin. I am a Junior Web Developer specialized in React.";

//about
export const aboutText =
	" I am currently a junior web developer specilize in ReactJs. Strongly interested in Web Development and App Development. I like to learn new technologies and exploring others programming fields. I also like to collaborate with others teams and sharing opinions each other to improve skills and expend our tech field.";

//experience
export const experienceData = [
	{
		year: 1,
		title: "Bachelor’s Degree in History (EYU)",
		education: "Bachelor’s Degree in History: 4 - year program",
		experience: ["I have ceased my university attendance as of 2019."],
	},
	{
		year: 2,
		title: "Programming Basic Course (Fairway)",
		education:
			"Focus on basic concept of programming, by learning Java Programming. Introduce to Command Line Interface. Object - Oriented Programming, Database Programming (SQL).",
		experience: [
			"Basic HTML/CSS/Javascript: Learn through tutorials and course.",
			"Personal Projects: Create simple personal websites or blogs.",
		],
	},
	{
		year: 3,
		title: "Professional UI/UX Design Course (Fairway)",
		education:
			"Professional certification in UI/UX Design: Enroll in a 4 months program covering Web and App UI/UX design principles.",
		experience: [
			"Group and Personal Projects: Take on small group and personal projects to build a portfolio.",
		],
	},
	{
		year: 4,
		title: "Professional Web Developer Course (Fairway)",
		education:
			"Professional certification in Web Development: Focus on specialized areas like PHP and frameworks (Laravel).",
		experience: [
			"Group Projects: Take on some group projects, in which included feactures like register user account, login and uploading profile informations and then, if you are admin row user, you can administrate about user accounts.",
		],
	},
	{
		year: 5,
		title: "Rockstar Developer Course (Fairway)",
		education:
			"Professional certification in Web Development: Focus on specialized area like front-end framework (React) and back-end technologies (Express.js, Node.js).",
		experience: [
			"Group and Personal Projects: Take on group and personal projects, in which social media web client projects (React, Vite), social media mobile client app project (ReactNative, Expo),social media backend api project (Express, Prisma, JWT), movie directory project (React, Next, Radix-UI).",
		],
	},
];

export const arrowLeftIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor">
		<path d="M16 12L10 18V6L16 12Z"></path>
	</svg>
);

//skills
export const skillsData = [
	{
		name: "HTML",
		icon: "/skills/html.png",
	},
	{
		name: "CSS",
		icon: "/skills/css.png",
	},
	{
		name: "JavaScript",
		icon: "/skills/js.png",
	},
	{
		name: "TailwindCSS",
		icon: "/skills/tailwind.png",
	},
	{
		name: "Vite",
		icon: "/skills/vite.png",
	},
	{
		name: "ReactJS",
		icon: "/skills/react.png",
	},
	{
		name: "TypeScript",
		icon: "/skills/ts.png",
	},
	{
		name: "NextJS",
		icon: "/skills/nextjs.png",
	},
	{
		name: "NodeJS",
		icon: "/skills/nodejs.png",
	},
	{
		name: "MongoDB",
		icon: "/skills/mongodb.png",
	},
	{
		name: "Github",
		icon: "/skills/github.png",
	},
	{
		name: "SQLite",
		icon: "/skills/sqlite.svg",
	},
	{
		name: "Redux",
		icon: "/skills/redux.svg",
	},
	{
		name: "React Native",
		icon: "/skills/react-native.svg",
	},
	{
		name: "Expo",
		icon: "/skills/expo.svg",
	},
	{
		name: "Framer Motion",
		icon: "/skills/framer.png",
	},
	{
		name: "Prisma",
		icon: "/skills/prisma.svg",
	},
	{
		name: "Figma",
		icon: "/skills/figma.png",
	},
];

export const projectsButton = [
	"All",
	"HTML",
	"CSS",
	"JavaScript",
	"TailwindCSS",
	"ReactJS",
	"TypeScript",
	"NextJS",
	"Framer Motion",
	"Figma",
	"Radix-UI",
	"Vite",
	"MUI",
];

export const projectsData = [
	{
		name: "Movie Directory Website",
		desc: "The movie directory website is a web application that allows users to browse, search, and discover movies. It provides information about various movies.",
		url: "/projects/image-1.jpg",
		tech: ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "Radix-UI"],
	},
	{
		name: "Social Media Web",
		desc: "A social media web client which is provides a user-friendly interface for users to connect with friends, share content, and engage with the platform's features.",
		url: "/projects/image-2.jpg",
		tech: ["HTML", "CSS", "JavaScript", "ReactJS", "Vite", "MUI"],
	},
	{
		name: "Todo List Web App",
		desc: "A simple and intuitive todo list web application that helps users organize their tasks, set priorities, and track their progress efficiently.",
		url: "/projects/image-3.jpg",
		tech: ["HTML", "CSS", "JavaScript", "ReactJS", "Vite", "MUI"],
	},
	{
		name: "Social Media Web",
		desc: "A social media web client which is provides a user-friendly interface for users to connect with friends, share content, and engage with the platform's features.",
		url: "/projects/image-4.jpg",
		tech: ["HTML", "CSS", "JavaScript", "ReactJS", "Vite", "MUI"],
	},
	// {
	// 	name: "ByteBoosters.io",
	// 	desc: "A tech startup specializing in software development, offering innovative solutions and services for businesses looking to enhance their digital presence.",
	// 	url: "/projects/image-5.jpg",
	// 	tech: ["Figma", "ReactJS", "TailwindCSS", "CSS"],
	// },
	// {
	// 	name: "GreenLeafGardens.biz",
	// 	desc: "An online store and community hub for gardening enthusiasts, featuring a wide range of plants, gardening tools, and expert advice.",
	// 	url: "/projects/image-6.jpg",
	// 	tech: ["ReactJS", "TailwindCSS", , "CSS", "FramerMotion"],
	// },
	// {
	// 	name: "PixelPerfectDesigns.info",
	// 	desc: "A graphic design portfolio showcasing the work of a freelance designer, including branding, web design, and illustration projects.",
	// 	url: "/projects/image-7.jpg",
	// 	tech: ["NextJS", "FramerMotion"],
	// },
	// {
	// 	name: "HarmonyHealthHub.com",
	// 	desc: " A wellness website focused on holistic health, offering articles on nutrition, fitness, mental health, and alternative therapies.",
	// 	url: "/projects/image-8.jpg",
	// 	tech: ["NextJS", "ReactJS", "FramerMotion"],
	// },
	// {
	// 	name: "StellarSkiesAstronomy.org",
	// 	desc: "An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.",
	// 	url: "/projects/image-9.jpg",
	// 	tech: ["ReactJS", "JavaScript", "ThreeJS"],
	// },
	// {
	// 	name: "UrbanEatsDelights.com",
	// 	desc: "An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.",
	// 	url: "/projects/image-10.jpg",
	// 	tech: ["NextJS", "ThreeJS"],
	// },
];

// contact

export const contactEmail = "soenaylin.g@gmail.com";
export const contactPhone = "+95 976 739 091 6";
export const contactAddress =
	"Zingama Road.\
Thaketa, Yangon, Myanmar";

// night mode

export const sunIcon = "/icons/sun.png";
export const moonIcon = "/icons/moon.png";
