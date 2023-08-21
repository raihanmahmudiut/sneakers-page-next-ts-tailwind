/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./globals.css";
import Image from "next/image";

export default function Page() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="flex flex-col w-full md:w-4/6 sm:mt-20 sm:ml-[80px]">
				<div>
					<img
						src="/images/image-product-1.jpg"
						alt="product-main-img"
						className="rounded-xl "
						// Use responsive layout
					/>
				</div>
				<div className=" flex-row w-full pt-4 flex  bg-white ">
					{/* Thumbnails */}
					<div className="hidden md:flex justify-between">
						<img
							src="/images/image-product-1-thumbnail.jpg"
							alt="Thumbnail 1"
							className="rounded-lg w-1/5 h-auto"
						/>
						<img
							src="/images/image-product-2-thumbnail.jpg"
							alt="Thumbnail 2"
							className="rounded-lg w-1/5 h-auto"
						/>
						<img
							src="/images/image-product-3-thumbnail.jpg"
							alt="Thumbnail 3"
							className="rounded-lg w-1/5 h-auto"
						/>
						<img
							src="/images/image-product-4-thumbnail.jpg"
							alt="Thumbnail 4"
							className="rounded-lg w-1/5 h-auto"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col sm:ml-2 sm:mt-24 p-5 sm:pt-6 sm:pr-20 justify-content-between ">
				<h2 className="text-primary-orange font-bold mb-2">Sneaker Company</h2>
				<div className="font-bold text-3xl mb-8">
					Fall Limited Edition Sneakers
				</div>
				<p className="text-sm font-normal text-neutral-grayish-blue">
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they’ll withstand everything
					the weather can offer.
				</p>
				<div className="mt-4">
					<div className="flex flex-row sm:flex-col justify-between">
						<div className="flex flex-row">
							<p className="font-extrabold text-xl">$125.00</p>
							<p className="self-center ml-4 px-2 py-1 rounded font-extrabold text-primary-orange bg-primary-pale-orange">
								50%
							</p>
						</div>
						<div className="text-neutral-grayish-blue text-sm font-bold ">
							<del>$250.00</del>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-4 mt-4">
					{/* Left Div */}

					<div className="flex flex-row items-center w-full box-border">
						<div className="cursor-pointer text-primary-orange bg-neutral-light-grayish-blue text-2xl font-bold rounded-md">
							<img src="/images/icon-minus.svg" alt="" className="p-5" />
						</div>
						<p className="text-center text-blackfont-bold text-base py-3 bg-neutral-light-grayish-blue">
							1
						</p>
						<div className="cursor-pointer text-primary-orange bg-neutral-light-grayish-blue text-2xl font-bold rounded-md">
							<img src="/images/icon-plus.svg" alt="" className="p-4" />
						</div>
					</div>

					{/* Right Div */}

					<div className=" cursor-pointer col-span-2 p-2 w-full text-center text-sm items-center box-border bg-primary-orange text-white rounded-md">
						Add to Cart
					</div>
				</div>
			</div>
		</div>
	);
}
