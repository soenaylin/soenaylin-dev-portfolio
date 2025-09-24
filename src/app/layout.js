import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "Soe Nay Lin",
	description: "Portfolio Website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				cz-shortcut-listen="true"
				className={`${poppins.className}`}>
				{children}
			</body>
		</html>
	);
}
