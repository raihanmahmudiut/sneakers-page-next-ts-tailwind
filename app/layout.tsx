import "./globals.css";
import type { Metadata } from "next";

import Navbar from "../components/navbar";

export const metadata: Metadata = {
	title: "Sneakers Store",
	description: "Generated by create next app",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang="en">
				<body className="mx-0 lg:mx-10 xl:mx-52">
					<Navbar />
					<hr className="hidden sm:block sm:border-[#E4E9F2] sm:mt-3.5" />
					<div>{children}</div>
				</body>
			</html>
		</>
	);
}
