"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link"; // Adjust this import if using a different router
import { auth } from "@clerk/nextjs/server";
import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/clerk-react";

const Sidebar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isNestedMenuOpen, setIsNestedMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
	const toggleNestedMenu = () => setIsNestedMenuOpen((prev) => !prev);

	return (
		<div className='relative inline-block'>
			<button
				onClick={toggleMenu}
				className='py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'
				type='button'>
				<GiHamburgerMenu size={40} />
			</button>

			{isMenuOpen && (
				<ul
					role='menu'
					className='absolute right-0 z-10 min-w-[180px] max-w-[280px] h-[100vh] mt-1 overflow-y-auto rounded-lg bg-[#1F252F] bg-opacity-50 p-1.5 shadow-lg focus:outline-none'>
					<li role='menuitem'>
						<Link
							href='/'
							onClick={() => setIsMenuOpen(false)}
							className='cursor-pointer text-white text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
							{`Home`}
						</Link>
					</li>
					<li role='menuitem'>
						<Link
							href='/dashboard'
							onClick={() => setIsMenuOpen(false)}
							className='cursor-pointer text-white text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
							{`Services & Products`}
						</Link>
					</li>
					<li role='menuitem'>
						<Link
							href='/'
							onClick={() => setIsMenuOpen(false)}
							className='cursor-pointer text-white text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
							{`About`}
						</Link>
					</li>

					<li role='menuitem'>
						<Link
							href='/'
							onClick={() => setIsMenuOpen(false)}
							className='cursor-pointer text-white text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
							{`Contact`}
						</Link>
					</li>

					<SignedOut>
						<li role='menuitem'>
							<Link
								href='/login'
								onClick={() => setIsMenuOpen(false)}
								className='cursor-pointer text-white text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
								{`Log In`}
							</Link>
						</li>
						<li role='menuitem'>
							<Link
								href='/signup'
								onClick={() => setIsMenuOpen(false)}
								className='cursor-pointer text-white text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
								{`Sign Up`}
							</Link>
						</li>
					</SignedOut>
					<SignedIn>
						<li role='menuitem'>
							<Link
								href='/profile'
								onClick={() => setIsMenuOpen(false)}
								className='cursor-pointer text-white text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
								{`Profile`}
							</Link>
						</li>
					</SignedIn>
				</ul>
			)}

			{isNestedMenuOpen && (
				<ul
					role='menu'
					className='absolute right-0 z-10 min-w-[180px] max-w-[280px] h-[100vh] mt-1 overflow-y-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none'>
					<li role='menuitem'>
						<Link
							href='/nested-item1'
							onClick={() => setIsNestedMenuOpen(false)}
							className='cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
							{`Nested Item 1`}
						</Link>
					</li>
					<li role='menuitem'>
						<Link
							href='/nested-item2'
							onClick={() => setIsNestedMenuOpen(false)}
							className='cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
							{`Nested Item 2`}
						</Link>
					</li>
					<li role='menuitem'>
						<Link
							href='/nested-item3'
							onClick={() => setIsNestedMenuOpen(false)}
							className='cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
							{`Nested Item 3`}
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Sidebar;
