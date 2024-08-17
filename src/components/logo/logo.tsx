import React from "react";
import Image from "next/image";

const Logo = () => {
	return (
		<div className='ml-5'>
			<Image src='/logo.png' alt='Logo' width={40} height={40} />
		</div>
	);
};

export default Logo;
