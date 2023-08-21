/* eslint-disable @next/next/no-img-element */
"use client";
import Lightbox from "@/components/LightBox";
import { useState } from "react";

export default function ProductMain() {
	const [lightboxImage, setLightboxImage] = useState<string | null>(null);

	const openLightbox = (imageUrl: string) => {
		setLightboxImage(imageUrl);
	};

	const closeLightbox = () => {
		setLightboxImage(null);
	};
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="flex flex-col w-full md:w-4/6 sm:mt-20 sm:ml-[80px]">
				<div>
					<img
						src="/images/image-product-1.jpg"
						alt="product-main-img"
						className="rounded-md cursor-pointer hover:bg-primary-orange"
						onClick={() => openLightbox("/images/image-product-1.jpg")}
					/>
				</div>
				<div className=" flex-row w-full pt-4 flex  bg-white ">
					{/* Thumbnails */}
					<div className="hidden md:flex justify-between">
						<img
							src="/images/image-product-1-thumbnail.jpg"
							alt="Thumbnail 1"
							className="rounded-lg w-1/5 h-auto cursor-pointer hover:opacity-80"
						/>
						<img
							src="/images/image-product-2-thumbnail.jpg"
							alt="Thumbnail 2"
							className="rounded-lg w-1/5 h-auto cursor-pointer hover:opacity-80"
						/>
						<img
							src="/images/image-product-3-thumbnail.jpg"
							alt="Thumbnail 3"
							className="rounded-lg w-1/5 h-auto cursor-pointer hover:opacity-80"
						/>
						<img
							src="/images/image-product-4-thumbnail.jpg"
							alt="Thumbnail 4"
							className="rounded-lg w-1/5 h-auto cursor-pointer hover:opacity-80"
						/>
					</div>
					{lightboxImage && (
						<Lightbox imageUrl={lightboxImage} onClose={closeLightbox} />
					)}
				</div>
			</div>
			<div className="flex flex-col sm:ml-2 sm:mt-24 p-5 sm:mr-14 sm:pt-6 sm:pr-20 justify-content-between ">
				<h2 className="text-primary-orange font-bold mb-3">Sneaker Company</h2>
				<div className="font-bold text-4xl mb-10">
					Fall Limited Edition Sneakers
				</div>
				<p className="text-sm font-normal text-slate-500">
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they’ll withstand everything
					the weather can offer.
				</p>
				<div className="mt-6">
					<div className="flex flex-row sm:flex-col justify-between">
						<div className="flex flex-row">
							<p className="font-extrabold text-2xl">$125.00</p>
							<p className="self-center ml-4 px-2 py-1 rounded font-extrabold text-primary-orange bg-primary-pale-orange">
								50%
							</p>
						</div>
						<div className="text-slate-500 text-sm font-bold ">
							<del>$250.00</del>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:grid md:grid-cols-3 gap-4 mt-8">
					{/* Left Div */}

					<div className="grid grid-cols-3 p-2 px-6 md:p-0 items-center  w-full bg-neutral-light-grayish-blue box-border rounded-md">
						<div className="cursor-pointer ml-10 md:ml-5 text-primary-orange hover:opacity-60 transition-opacity duration-[0.3s] text-2xl font-bold  ">
							<img src="/images/icon-minus.svg" alt="" className="" />
						</div>
						<p className=" text-black font-bold text-base text-center ">1</p>
						<div className="cursor-pointer ml-10 md:ml-5 text-primary-orange hover:opacity-60 transition-opacity duration-[0.3s] text-2xl font-bold ">
							<img src="/images/icon-plus.svg" alt="" className="" />
						</div>
					</div>

					{/* Right Div */}

					<div className="flex items-center justify-center cursor-pointer col-span-2 p-4 px-8 w-full font-bold text-white text-xs box-border bg-primary-orange hover:opacity-60 transition-opacity duration-[0.3s] rounded-md">
						<div className="w-4 h-4 mr-2">
							<img src="/images/icon-cart-white.svg" alt="" className="" />
						</div>
						<div>Add to Cart</div>
					</div>
				</div>
			</div>
			{/* Overlay when mobile menu is open */}
			{lightboxImage && (
				<div
					className="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-10"
					onClick={closeLightbox}
				/>
			)}
		</div>
	);
}
