import Fulllogo from "@/components/name/full-logo";

export default function Home() {
	return (
		<main className='flex flex-col min-h-screen items-center bg-[rgb(4,64,75)]'>
			<div className='p-4'>
				<h1 className='text-white'>
					<Fulllogo />
				</h1>
				<div className='p-20'>
					<div className='text-white text-2xl font-extrabold text-center p-2'>
						<p>Bring Your Memories to</p>
						<p>Life in just a</p>
						<p>few clicks</p>
					</div>
					<div className='bg-[rgb(169,237,248)] p-1 rounded-3xl w-28 mx-auto my-4'></div>
					<div className='text-white text-xl font-extrabold text-center p-2'>
						<p>Effortlessly turn your designs</p>
						<p>into stunning prints and</p>
						<p>signboards</p>
					</div>
				</div>
				<button className='bg-[#a9edf8] font-semibold w-32 text-center p-2 rounded-2xl mx-auto block'>
					Get Started
				</button>
			</div>
		</main>
	);
}
