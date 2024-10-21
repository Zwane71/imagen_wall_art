import DashBoard from "@/components/dashboard/DashBoard";
import React from "react";

interface DashBoardItem {
	pic: string;
	name: string;
}

const dashboardItems: DashBoardItem[] = [
	{ pic: "/pictures/image.svg", name: "Printing and Branding" },
	{ pic: "/pictures/image-1.svg", name: "Signage ; sticker ; Banners" },
	{ pic: "/pictures/image-4.svg", name: "Graphic Design" },
	{ pic: "/pictures/image-2.svg", name: "Artistic Encasement" },
	{ pic: "/pictures/image-3.svg", name: "Canvas Artistry" },
	{ pic: "/pictures/image-5.svg", name: "Appliance Wrapping" },
];

const Dashboard: React.FC = () => {
	return (
		<div className='mx-3 md:mx-10 min-h-screen p-5'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8'>
				{dashboardItems.map((item, index) => (
					<div key={index} className='flex justify-center'>
						<DashBoard pic={item.pic} name={item.name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
