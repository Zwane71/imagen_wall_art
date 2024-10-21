import Image from "next/image";

export default function Loading() {
	return (
		<div className=' flex min-h-screen items-center justify-center'>
			<Image
				src={"/full-logo.png"}
				alt={"Loading"}
				width={450}
				height={450}
				className='animate-fadeIn' // Use the fadeIn animation class
			/>
		</div>
	);
}
