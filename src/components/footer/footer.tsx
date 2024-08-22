import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<div className='flex flex-row bg-[rgb(31,37,47)] justify-between p-2'>
				<div className='ml-2'>
					<Image
						src='/full-logo.png'
						alt='Logo'
						width={250}
						height={250}
						className='w-24 sm:w-32 md:w-48 lg:w-64'
						style={{ height: "auto" }}
					/>
				</div>
				<div className='text-white text-xs sm:text-sm md:text-base lg:text-lg'>
					<div>Services</div>
					<ul>
						<li>
							<Link href={"/"}>Graphic Design</Link>
						</li>
						<li>
							<Link href={"/"}>Printing And Branding</Link>
						</li>
						<li>
							<Link href={"/"}>Artistic Encasement</Link>
						</li>
						<li>
							<Link href={"/"}>Signage Engineering</Link>
						</li>
					</ul>
				</div>
				<div className='text-white text-xs sm:text-sm md:text-base lg:text-lg'>
					<div>Contact</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
