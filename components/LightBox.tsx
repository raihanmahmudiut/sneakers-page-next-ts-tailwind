/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

interface LightboxProps {
	imageUrl: string;
	onClose: (event: any) => void;
}

const Lightbox = ({ imageUrl, onClose }: LightboxProps) => {
	return (
		<div className="hidden sm:block">
			<div className="fixed inset-0 flex justify-center items-center z-50">
				<div className="p-6 rounded-lg shadow-lg relative">
					<img
						src="/images/icon-close-white.svg"
						alt="close-icon"
						className="absolute top-1 right-6 cursor-pointer w-3 h-3 "
						onClick={onClose}
					/>
					<div className="flex flex-col items-center">
						<img
							src={imageUrl}
							alt="lightbox-image"
							className="rounded-md w-[28rem]"
						/>
						<div className="mt-8 w-4/5 gap-4 flex flex-row">
							<img
								src="/images/image-product-1-thumbnail.jpg"
								alt="Thumbnail 1"
								className="cursor-pointer hover:opacity-80 rounded-lg w-20 "
							/>

							<img
								src="/images/image-product-2-thumbnail.jpg"
								alt="Thumbnail 2"
								className="cursor-pointer hover:opacity-80 rounded-lg w-20 "
							/>
							<img
								src="/images/image-product-3-thumbnail.jpg"
								alt="Thumbnail 3"
								className="cursor-pointer hover:opacity-80 rounded-lg w-20 "
							/>
							<img
								src="/images/image-product-4-thumbnail.jpg"
								alt="Thumbnail 4"
								className="cursor-pointer hover:opacity-80 rounded-lg w-20 "
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lightbox;
