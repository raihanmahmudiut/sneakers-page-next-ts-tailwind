"use client";
import Cart from "./Cart";
import { useState } from "react";
import Image from "next/image";

import Link from "next/link";

function Navbar() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [showCart, setshowCart] = useState(false);

	const toggleMobileMenu = () => {
		setShowMobileMenu(!showMobileMenu);
	};

	const closeMobileMenu = () => {
		setShowMobileMenu(false);
	};

	const toggleCart = () => {
		setshowCart(!showCart);
	};

	return (
		<nav className="flex justify-between items-center p-5">
			<div className="flex flex-row sm:flex-none ">
				<div
					className="sm:hidden justify-start cursor-pointer"
					onClick={toggleMobileMenu}
				>
					<Image
						src="/images/icon-menu.svg"
						alt="menu"
						width={20}
						height={20}
					/>
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
				<div className="cursor-pointer ml-4  ">
					<Link href="/">
						<Image
							alt="logo"
							src="/images/logo.svg"
							width={120}
							height={30}
							className="w-22 md:w-32"
						/>
					</Link>
				</div>
			</div>
			{/* Menu on larger screens */}
			<div className="list-none hidden sm:list-item self-center flex-1 ">
				<ul className=" flex text-slate-500  text-sm ml-6 pl-4">
					<li className="self-center cursor-pointer absolute top-7 pb-8  transition-opacity duration-[0.3s] hover:text-black hover:border-[rgb(255,255,255)] hover:border-b-primary-orange hover:border-b-[4px]">
						Collection
					</li>
					<li className="self-center ml-[6rem] cursor-pointer absolute top-7 pb-8 transition-opacity duration-[0.3s] hover:text-black hover:border-[#fff] hover:border-b-primary-orange  hover:border-b-[4px]">
						Men
					</li>
					<li className="self-center ml-[9rem] cursor-pointer absolute top-7 pb-8 transition-opacity duration-[0.3s] hover:text-black hover:border-[#fff] hover:border-b-primary-orange hover:border-b-[4px]">
						Women
					</li>
					<li className="self-center ml-[14rem] cursor-pointer absolute top-7 pb-8 transition-opacity duration-[0.3s] hover:text-black hover:border-[#fff] hover:border-b-primary-orange  hover:border-b-[4px]">
						About
					</li>
					<li className=" self-center ml-[18rem] cursor-pointer absolute top-7 pb-8 transition-opacity duration-[0.3s] hover:text-black hover:border-[#fff] hover:border-b-primary-orange  hover:border-b-[4px]">
						Contact
					</li>
				</ul>
			</div>

			{/* Icons on the top right */}
			<div className="flex space-x-7 justify-end ">
				<div
					className="cursor-pointer self-center relative"
					onClick={toggleCart}
				>
					<div className="  box-border text-center text-[8px] font-semibold bg-primary-orange text-white rounded-3xl px-1.5 absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
						3
					</div>
					<Image
						src="/images/icon-cart.svg"
						alt="cart"
						width={20}
						height={20}
					/>
				</div>
				<div className="cursor-pointer self-center ">
					<Image
						src="/images/image-avatar.png"
						alt="avatar"
						width={40}
						height={40}
						className="w-6 sm:w-10 rounded-full hover:border-primary-orange  hover:border-[3px]"
					/>
				</div>
				{showCart && (
					<div className="rounded mt-14 sm:top-30 sm:right-28 fixed bg-white ">
						<Cart />
					</div>
				)}
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
