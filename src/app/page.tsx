import Fulllogo from "@/components/name/full-logo";

export default function Home() {
	return (
		<main className='flex flex-col min-h-screen items-center'>
			<div className='p-4'>
				<h1 className='text-white'>
					<Fulllogo />
				</h1>
			</div>
		</main>
	);
}
