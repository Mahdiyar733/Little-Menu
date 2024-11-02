import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Skeleton from "./common/skeleton";
import React from "react";
function Navbar() {
	const [isLoadingImg, setIsLaodingImg] = useState(true);
	return (
		<div className="flex flex-row justify-between w-full items-center px-6 py-3 border-b border-gray-200 border-solid">
			<HiOutlineMenuAlt2
				className="text-black cursor-pointer hover:bg-gray-100 p-1 rounded-md transition-colors duration-300 sm:hidden"
				size={"34px"}
			/>
			<h1 className="hidden sm:block text-xl font-semibold tracking-wide text-ORG-color">
				Little Menu
			</h1>

			<img
				src="https://i.pravatar.cc/100?u=bb"
				className="hidden"
				onLoad={() => setIsLaodingImg(false)}
				onError={() => setIsLaodingImg(false)}
			/>
			{isLoadingImg ? (
				<Skeleton
					w="w-8"
					h="h-8"
				/>
			) : (
				<img
					src="https://i.pravatar.cc/100?u=bb"
					alt="profile pic"
					className="rounded-full w-8 h-8 cursor-pointer"
				/>
			)}
		</div>
	);
}

export default Navbar;
