"use client";

import { useState } from "react";
import Image from "next/image";
import SmallMenu from "./smallmenu";
import Link from "next/link";

function Navbar() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const toggleMobileMenu = () => {
		setShowMobileMenu(!showMobileMenu);
	};

	const closeMobileMenu = () => {
		setShowMobileMenu(false);
	};

	return (
		<nav className="flex justify-between items-center p-5">
			<div
				className="sm:hidden justify-start cursor-pointer"
				onClick={toggleMobileMenu}
			>
				<Image src="/images/icon-menu.svg" alt="menu" width={20} height={20} />
			</div>

			{/* Mobile menu */}
			{showMobileMenu && (
				<div className="fixed justify-items-start left-0 top-0 h-screen w-4/6 bg-white z-20">
					<div onClick={closeMobileMenu} className="pt-7 pr-7 pl-7 pb-4">
						<Image
							src="/images/icon-close.svg"
							alt="menu"
							width={15}
							height={15}
						/>
					</div>
					<ul className="flex flex-col pl-4 text-black font-bold text-base ml-3 mt-6">
						<li className="py-2">Collection</li>
						<li className="py-2">Men</li>
						<li className="py-2">Women</li>
						<li className="py-2">About</li>
						<li className="py-2">Contact</li>
					</ul>
				</div>
			)}

			{/* Logo */}
			<div className="cursor-pointer">
				<Link href="/">
					<Image
						alt="logo"
						src="/images/logo.svg"
						width={200}
						height={40}
						className="w-40 md:w-48"
					/>
				</Link>
			</div>

			{/* Menu on larger screens */}
			<ul className="hidden sm:flex list-none space-x-6 text-neutral-grayish-blue text-base">
				<li>Collection</li>
				<li>Men</li>
				<li>Women</li>
				<li>About</li>
				<li>Contact</li>
			</ul>

			{/* Icons on the top right */}
			<div className="flex space-x-7 justify-end">
				<div className="cursor-pointer self-center">
					<Image
						src="/images/icon-cart.svg"
						alt="cart"
						width={20}
						height={20}
					/>
				</div>
				<div className="cursor-pointer self-center">
					<Image
						src="/images/image-avatar.png"
						alt="avatar"
						width={40}
						height={40}
					/>
				</div>
			</div>

			{/* Overlay when mobile menu is open */}
			{showMobileMenu && (
				<div
					className="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-10"
					onClick={toggleMobileMenu}
				/>
			)}
		</nav>
	);
}

export default Navbar;
