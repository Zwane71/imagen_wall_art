import Link from "next/link";
import React from "react";
import Logo from "../logo/logo";
import Name from "../name/name";
import Hamburger from "../hamburger/hamburger";

const Navbar = () => {
	return (
		<div>
			<nav className='bg-[#3a5154] rounded-3xl p-2 '>
				<ul className='flex items-center justify-between'>
					<li className='flex gap-2'>
						<Logo />
						<div className=' hidden lg:flex'>
							<Name />
						</div>
					</li>
					<li>
						<Link className='text-white m-auto block lg:hidden' href={""}>
							<Name />
						</Link>
					</li>
					<li className=' lg:mr-14'>
						<Hamburger />
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
