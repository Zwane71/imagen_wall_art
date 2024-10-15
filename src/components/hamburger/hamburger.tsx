import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideNav from "../sideNav/SideNav";

const Hamburger = () => {
	return (
		<div className='mr-9'>
			<ul className='lg:flex gap-5 text-white font-semibold hidden'>
				<li>
					<Link href={"/"}>Home</Link>{" "}
				</li>
				<li>
					<Link href={"/"}>Services & Products</Link>
				</li>
				<li>
					<Link href={""}>Log In</Link>
				</li>
				<li>
					<Link href={""}>Sign Up</Link>
				</li>
			</ul>
			<div className='flex lg:hidden'>
				{/* <SideButton /> */}
				<SideNav />
			</div>
		</div>
	);
};
export default Hamburger;
