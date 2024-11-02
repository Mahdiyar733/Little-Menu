import { FaPizzaSlice } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { IoIosPricetag } from "react-icons/io";
import { useContext } from "react";
import { Context } from "../context"; // Ensure you're importing the correct context
import { GrPowerReset } from "react-icons/gr";
import FilterItem from "./FilterItem";
import React from "react";

function FilterList() {
	const context = useContext(Context);

	if (!context) {
		return null;
	}
	const { setSortBy, setInputVal, sortBy, setCurrentPage } = context;

	return (
		<div className="w-full flex flex-row justify-center items-center gap-6 px-5 flex-wrap mt-8">
			<FilterItem
				handler={() => setSortBy("price")}
				icon={<IoIosPricetag size={"20px"} />}
				name="Price"
				isCurrentFilter={sortBy === "price"}
				aria-label="Sort by price"
			/>
			<FilterItem
				handler={() => setSortBy("soldOut")}
				icon={<FaPizzaSlice size={"20px"} />}
				name="Available"
				isCurrentFilter={sortBy === "soldOut"}
				aria-label="Sort by availability"
			/>
			<FilterItem
				handler={() => setSortBy("ingredients")}
				icon={<IoFastFood size={"20px"} />}
				name="Ingredients"
				isCurrentFilter={sortBy === "ingredients"}
				aria-label="Sort by ingredients"
			/>
			<FilterItem
				handler={() => {
					setSortBy("");
					setInputVal("");
					setCurrentPage(1);
				}}
				icon={<GrPowerReset size={"20px"} />}
				name="Reset"
				aria-label="Reset filters"
			/>
		</div>
	);
}

export default FilterList;
