import Fulllogo from "@/components/name/full-logo";
import Link from "next/link";

export default function Home() {
	return (
		<main className=' min-h-screen  bg-[rgb(4,64,75)]'>
			<div className='p-4 '>
				<div className=' text-white mx-40 gap-40  '>
					<div className='mt-10 flex-col md:flex md:flex-row  md:justify-between'>
						<div className='md:ml-24 '>
							<Fulllogo />
						</div>
						<h3 className='text-[#a9edf8] text-xl lg:text-2xl md:mt-5 font-extrabold text-center p-2'>
							"TO PROVIDE TIME QUALITY SERVICES AND <br /> OUTSTANDING
							CRAFTSMANSHIP,
							<br />
							WHILE THE TRANQUILITY INTO YOUR SPACE <br /> WITH OUR PRODUCTS"
						</h3>
					</div>
				</div>
				<div className='p-20 '>
					<div className='text-white text-2xl lg:text-4xl font-extrabold text-center p-2'>
						<p>Bring Your Memories to</p>
						<p>Life in just a</p>
						<p>few clicks</p>
					</div>
					<div className='bg-[rgb(169,237,248)] p-1 rounded-3xl w-28 mx-auto my-4 lg:mt-5 '></div>
					<div className='text-white text-xl lg:text-2xl font-extrabold text-center p-2'>
						<p>Effortlessly turn your designs</p>
						<p>into stunning prints and</p>
						<p>signboards</p>
					</div>
				</div>
				<Link
					href={"/signup"}
					className=' bg-[#a9edf8] font-semibold w-32 text-center p-2 rounded-2xl mx-auto flex items-center justify-center'>
					Get Started
				</Link>
			</div>
		</main>
	);
}
