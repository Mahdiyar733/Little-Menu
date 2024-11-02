import React, { ReactNode } from "react";
type Titem = {
	handler: () => React.Dispatch<React.SetStateAction<string>> | void;
	icon: ReactNode;
	name: string;
	isCurrentFilter?: boolean;
};
/* eslint-disable react/prop-types */
function FilterItem({ handler, icon, name, isCurrentFilter }: Titem) {
	return (
		<div
			className={`w-24 min-w-24 text-sm h-20 ${
				isCurrentFilter ? "bg-ORG-color bg-opacity-15" : ""
			} sm:hover:bg-ORG-color sm:hover:bg-opacity-15 cursor-pointer transition-all duration-300 rounded-md border-2 border-ORG-color border-solid flex flex-col justify-center items-center gap-3 text-ORG-color`}
			onClick={handler}>
			<span>{icon}</span>
			<span>{name}</span>
		</div>
	);
}

export default FilterItem;
