/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import Skeleton from "../common/skeleton";
import React from "react";

type TItem = {
	name?: string;
	soldOut?: boolean;
	unitPrice?: number;
	imageUrl?: string;
};

function MenuItem({ item }: { item: TItem }) {
	const { name, soldOut, unitPrice, imageUrl } = item;
	const [isLoadingImg, setIsLoadingImg] = useState(true);

	return (
		<div className="border border-gray-600 sm:hover:border-ORG-color transition-colors duration-300 rounded-md overflow-hidden h-auto w-56 grid grid-rows-3 grid-cols-1 animate-fade animate-duration-500 min-h-72">
			<div className="row-span-2 relative">
				<img
					className="hidden"
					src={imageUrl}
					alt="pizza"
					onLoad={() => setIsLoadingImg(false)}
					onError={() => setIsLoadingImg(false)}
				/>
				{isLoadingImg ? (
					<Skeleton rounded="rounded-none" />
				) : (
					<>
						<div className="bg-gradient-to-t opacity-75 from-ORG-color to-50% to-transparent absolute top-0 right-0 w-full h-full"></div>
						<img
							className={`w-full object-cover h-full ${
								soldOut ? "saturate-0" : ""
							}`}
							src={imageUrl}
							alt="pizza"
						/>
					</>
				)}
			</div>
			<div className="flex flex-col py-5 px-4 h-full justify-between">
				<span className="text-black font-semibold text-base text-nowrap">
					{name}
				</span>
				<div className="flex flex-row-reverse items-center justify-between w-full">
					<span className=" font-semibold">
						<AiOutlineLike
							size={"30px"}
							className="text-ORG-color cursor-pointer hover:bg-ORG-color hover:text-white p-0.5 transition-colors duration-300 rounded-md"
						/>
					</span>
					{soldOut ? (
						<span className="text-black font-normal bg-gray-500 opacity-80 bg-opacity-10 py-1 px-2 rounded-md">
							Solded Out
						</span>
					) : (
						<span className="text-black font-normal bg-ORG-color bg-opacity-30 py-1 px-2 rounded-md">
							$ {unitPrice}
						</span>
					)}
				</div>
			</div>
		</div>
	);
}

export default MenuItem;
