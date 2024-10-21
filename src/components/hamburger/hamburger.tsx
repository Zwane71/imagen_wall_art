import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideNav from "../sideNav/SideNav";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Hamburger = () => {
	const { userId } = auth();

	return (
		<div className='mr-9'>
			<ul className='lg:flex gap-5 text-white font-semibold hidden'>
				<li>
					<Link href={"/"}>Home</Link>{" "}
				</li>
				<li>
					<Link href={"/dashboard"}>Services & Products</Link>
				</li>
				<li>
					<Link href={""}>About us</Link>
				</li>
				{!userId ? (
					<>
						<li>
							<Link
								href={"/login"}
								className='transition ease-in-out delay-150  p-2 rounded-xl border  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:border hover:text-[#3a5154] duration-300 '>
								Log In
							</Link>
						</li>

						<li>
							<Link
								href={"/signup"}
								className='transition ease-in-out delay-150 text-[#3a5154] p-2 rounded-xl bg-white hover:-translate-y-1 hover:scale-110 hover:bg-[#3a5154] hover:border hover:text-white duration-300 '>
								Sign Up
							</Link>
						</li>
					</>
				) : (
					<>
						<UserButton />
					</>
				)}
			</ul>
			<div className='flex lg:hidden'>
				{/* <SideButton /> */}
				<SideNav />
			</div>
		</div>
	);
};
export default Hamburger;
