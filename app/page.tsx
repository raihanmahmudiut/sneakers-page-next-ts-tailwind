/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./globals.css";
import Image from "next/image";

export default function Page() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="flex flex-col w-full md:w-3/5">
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
			<div className="md:pl-14">
				<h2 className="text-primary-orange font-bold">Sneaker Company</h2>
				<div className="font-bold text-3xl">Fall Limited Edition Sneakers</div>
				<p className="text-base font-normal text-neutral-grayish-blue">
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they’ll withstand everything
					the weather can offer.
				</p>
			</div>
		</div>
	);
}
