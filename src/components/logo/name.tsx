import React from "react";
import Image from "next/image";

const Imagen = () => {
	return (
		<div>
			<Image src='/full-pic.png' alt='Logo' width={110} height={20} />
		</div>
	);
};

export default Imagen;
