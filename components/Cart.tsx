/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Image from "next/image";

import Link from "next/link";

const Cart = () => {
	return (
		<div className="shadow-2xl rounded-md">
			<h2 className="p-4 sm:p-6 text-black font-bold ">Cart</h2>
			<hr className="w-full border-gray-300 " />
			<div className="flex flex-col p-4 mt-1">
				<div className="flex flex-row items-center gap-4 mb-2 mr-1">
					<img
						src="/images/image-product-1-thumbnail.jpg"
						alt=""
						className="w-12 h-12 rounded"
					/>
					<div className="flex flex-col text-sm">
						<div className="text-slate-500">Fall Limited Edition Sneakers</div>
						<div className="text-slate-500">
							$125.00 x 3 ={" "}
							<span className="text-black font-semibold">$375.00</span>
						</div>
					</div>
					<div className="flex items-center">
						<img
							src="./images/icon-delete.svg"
							alt=""
							className="cursor-pointer filter brightness-50 hover:brightness-0 duration-[0.3s]"
						/>
					</div>
				</div>
				<div className="cursor-pointer bg-primary-orange hover:opacity-60 transition-opacity duration-[0.3s] text-white font-semibold text-sm box-border text-center mt-4 mb-1 px-4 py-3 rounded-md">
					Checkout
				</div>
			</div>
		</div>
	);
};

export default Cart;
