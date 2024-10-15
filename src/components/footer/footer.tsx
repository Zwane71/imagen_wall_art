import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
	return (
		<div>
			<div className='flex items-center md:flex-row  bg-[rgb(31,37,47)] justify-between p-2'>
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
				<div className='text-white text-xs sm:text-sm md:text-base lg:text-lg '>
					<h1 className='font-bold'>Services</h1>
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
				<div className='text-white text-xs sm:text-sm md:text-base lg:text-lg hidden md:block mt-5'>
					<h1 className='font-bold'>Contact</h1>
					<ul className=' p-2 space-y-2'>
						<li className='flex gap-4'>
							{" "}
							<IoHome size={28} /> Near Mabote Police Rd, Foso, Maseru, Lesotho
						</li>
						<li>
							{" "}
							<Link
								href={"mailto:makhohlisathabo@gmail.com"}
								className='flex gap-4'>
								<MdMail size={28} /> makhohlisathabo@gmail.com
							</Link>
						</li>
						<li>
							{" "}
							<Link href={"tel:+26663774797"} className='flex gap-4'>
								<BsTelephoneFill size={28} /> +266 6377 4797 / +266 5633 9864
							</Link>
						</li>
						<li>
							{" "}
							<Link href={"https://wa.me/26656339864"} className='flex gap-4'>
								<RiWhatsappFill size={28} /> +266 5633 9864
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
