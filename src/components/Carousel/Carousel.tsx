"use client";

import ImageSlides from "./ImageSlides";
import Image from "next/image";

const slides = [
	"/Slides/1.svg",
	"/Slides/2.svg",
	"/Slides/3.svg",

	"/Slides/6.svg",
	"/Slides/9.svg",
	"/Slides/10.svg",
	"/Slides/11.svg",
	"/Slides/13.svg",
	"/Slides/14.svg",
]; // Path without /public

export default function Carousel() {
	return (
		<div className=' border border-black rounded-2xl bg-[#D9D9D9] bg-opacity-30 hidden xl:flex'>
			<ImageSlides>
				{slides.map((s, index) => (
					<Image
						key={index}
						src={s}
						alt='not found'
						width={300}
						height={300}
						className=' rounded-lg items-center ml-20 '
					/>
				))}
			</ImageSlides>
		</div>
	);
}
