import { useEffect, useState, ReactNode } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface ImageSlidesProps {
	children: ReactNode[]; // Expecting an array of React elements or nodes
	autoSlide?: boolean;
	AutoSlideInterval?: number;
}

export default function ImageSlides({
	children: slides,
	autoSlide = false,
	AutoSlideInterval = 3000,
}: ImageSlidesProps) {
	const [curr, setCurr] = useState(0);

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, AutoSlideInterval);
		return () => clearInterval(slideInterval);
	}, [autoSlide, AutoSlideInterval]);

	return (
		<div className='overflow-hidden relative max-w-lg'>
			<div
				className='flex ml-10 space-x-40 transition-transform ease-out duration-500 p-2'
				style={{ transform: `translateX(-${curr * 100}%)` }}>
				{slides}
			</div>
			<div className='absolute inset-0 flex items-center justify-between p-3'>
				<button
					onClick={prev}
					className='p-1 rounded-full shadow bg-slate-50 text-gray-800 hover:bg-white'>
					<FaAngleLeft size={30} color='black' />
				</button>
				<button
					onClick={next}
					className='p-1 rounded-full shadow bg-slate-50 text-gray-800 hover:bg-white'>
					<FaAngleRight size={30} color='black' />
				</button>
			</div>
			<div className='absolute bottom-4 right-0 left-0'>
				<div className='flex items-center justify-center gap-2'>
					{slides.map((_, i) => (
						<div
							key={i}
							className={`transition-all w-3 h-3 bg-white rounded-full ${
								curr === i ? `p-2` : `bg-opacity-50`
							}`}></div>
					))}
				</div>
			</div>
		</div>
	);
}
