//navbar
export const navTexts = ["Home", "About", "Skills", "Portfolio", "Contact"];

export const darkModeIcon = "/icons/night-mode.png";

//hero
export const heroIcons = [
	{
		icon: "/icons/facebook.png",
	},
	{
		icon: "/icons/linkedin.png",
	},
	{
		icon: "/icons/github-icon.png",
	},
];

export const heroDiscription =
	"Hi, I'm Soe Nay Lin. I am a Junior Web Developer specialized in React and Next.";

//about
export const aboutText =
	" I am currentley a junior web developer specilize in ReactJs and NextJs.Strongly interested in Web Development  and App Development. I like to learn new technologies and exploring others programming fields. I also like to collaborate with others teams and sharing opinions each other to improve or skills and expend our tech field.";

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
];

export const projectsData = [
	{
		name: "SparkleGrove.com",
		desc: "A lifestyle blog featuring DIY crafts, home decor ideas, and inspiration for creating a cozy and stylish living space.",
		url: "/projects/image-1.jpg",
		tech: ["Figma", "Photoshop", "HTML"],
	},
	{
		name: "TechTrekker.net",
		desc: "A technology news and review site covering the latest gadgets, software updates, and trends in the tech industry.",
		url: "/projects/image-2.jpg",
		tech: ["Figma", "Photoshop"],
	},
	{
		name: "CozyNestHomes.org",
		desc: "A resource for homeowners and renters alike, offering tips on interior design, home improvement projects, and sustainable living practices.",
		url: "/projects/image-3.jpg",
		tech: ["HTML", "CSS", "JavaScript"],
	},
	{
		name: "WanderLuxeTravels.co",
		desc: "A travel website that provides luxury travel guides, destination reviews, and tips for planning unforgettable vacations.",
		url: "/projects/image-4.jpg",
		tech: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
	},
	{
		name: "ByteBoosters.io",
		desc: "A tech startup specializing in software development, offering innovative solutions and services for businesses looking to enhance their digital presence.",
		url: "/projects/image-5.jpg",
		tech: ["Figma", "ReactJS", "TailwindCSS", "CSS"],
	},
	{
		name: "GreenLeafGardens.biz",
		desc: "An online store and community hub for gardening enthusiasts, featuring a wide range of plants, gardening tools, and expert advice.",
		url: "/projects/image-6.jpg",
		tech: ["ReactJS", "TailwindCSS", , "CSS", "FramerMotion"],
	},
	{
		name: "PixelPerfectDesigns.info",
		desc: "A graphic design portfolio showcasing the work of a freelance designer, including branding, web design, and illustration projects.",
		url: "/projects/image-7.jpg",
		tech: ["NextJS", "FramerMotion"],
	},
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
	"237 Zingama Road.\
Thaketa, Yangon, Myanmar";

// night mode

export const sunIcon = "/icons/sun.png";
export const moonIcon = "/icons/moon.png";
