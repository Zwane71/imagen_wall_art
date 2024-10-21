import Image from "next/image";
import React from "react";

interface DashBoardProps {
	pic: string;
	name: string; // Assuming you might want to use the name prop in the future
}

const DashBoard: React.FC<DashBoardProps> = ({ pic, name }) => {
	return (
		<div>
			<div className='bg-[#D9D9D9] flex flex-col bg-opacity-60 items-center justify-center p-5 mt-5 w-52 md:w-80 rounded-2xl'>
				<Image
					src={pic}
					alt={name || "Print AND Branding"}
					layout='responsive' // Set the layout to responsive
					width={150} // Define the aspect ratio width
					height={200} // Define the aspect ratio height
					className=' shadow-lg'
				/>
				<h4 className='bg-[#A9EDF8] mx-8 font-[Kreon] rounded-md p-1 text-[0.6rem] md:text-lg shadow-xl font-semibold opacity-80 text-center mt-5 md:w-60'>
					{name || "Default Name"}
				</h4>
			</div>
		</div>
	);
};

export default DashBoard;
