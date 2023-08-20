"use client";

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

interface SmallMenuProps {
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const SmallMenu = ({ setMenuOpen }: SmallMenuProps) => {
	const CloseMenu = () => {
		setMenuOpen(false);
	};

	return (
		<>
			<div className="absolute w-full h-[900px] bg-[rgb(0,0,0.7)] top-0 left-0 z-10"></div>
			<div className="absolute w-250x h-[900px] bg-[rgb(255,255,255,255) top-0 left-o z-20] ">
				<div className="w-14 h-14 cursor-pointer" onClick={CloseMenu}>
					<img
						src="../public/images/icon-close.svg"
						alt="close menu"
						className="object-fill"
					/>
				</div>
				<ul className="">
					<li className="">Collections </li>
					<li className="">Men </li>
					<li className="">Women </li>
					<li className="">About </li>
					<li className="">Contact</li>
				</ul>
			</div>
		</>
	);
};

export default SmallMenu;
