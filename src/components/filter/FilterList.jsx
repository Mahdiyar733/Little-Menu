import FilterItem from "./filterItem";
import { FaPizzaSlice } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { IoIosPricetag } from "react-icons/io";
import { useContext } from "react";
import { Context } from "../context";
import { GrPowerReset } from "react-icons/gr";
function FilterList() {
	const { setSortBy, setInputVal, sortBy, setCurrentPage } =
		useContext(Context);

	return (
		<div className="w-full flex flex-row justify-center items-center gap-6 px-5 flex-wrap mt-8">
			<FilterItem
				handler={() => setSortBy("price")}
				icon={<IoIosPricetag size={"20px"} />}
				name="Price"
				isCurrentFilter={sortBy === "price"}
			/>
			<FilterItem
				handler={() => setSortBy("soldOut")}
				icon={<FaPizzaSlice size={"20px"} />}
				name="Available"
				isCurrentFilter={sortBy === "soldOut"}
			/>
			<FilterItem
				handler={() => setSortBy("ingredients")}
				icon={<IoFastFood size={"20px"} />}
				name="Ingredients"
				isCurrentFilter={sortBy === "ingredients"}
			/>
			<FilterItem
				handler={() => {
					setSortBy("");
					setInputVal("");
					setCurrentPage(1);
				}}
				icon={<GrPowerReset size={"20px"} />}
				name="Reset"
			/>
		</div>
	);
}

export default FilterList;
