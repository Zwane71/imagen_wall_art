import Link from "next/link";
import React from "react";
import Logo from "../logo/logo";
import Name from "../name/name";
import Hamburger from "../hamburger/hamburger";

const Navbar = () => {
	return (
		<div>
			<nav className=' justify-between'>
				<ul>
					<div className='flex justify-between bg-[#3a5154] rounded-3xl p-2 '>
						<li>
							<Logo />
						</li>
						<li>
							<Link className='text-white' href={""}>
								<Name />
							</Link>
						</li>
						<li>
							<Hamburger />
						</li>
					</div>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
