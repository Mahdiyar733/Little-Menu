import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { Context } from "./context";

function Searchbar() {
	const { inputVal, setInputVal, setCurrentPage } = useContext(Context);
	return (
		<div className="flex flex-row gap-2 items-center w-5/6 py-1.5 h-auto bg-ORG-color bg-opacity-15 rounded-md px-4  text-black  mt-8 max-w-[550px]">
			<IoSearch
				size={"23px"}
				className="text-gray-500"
			/>
			<input
				type="text"
				placeholder="Search something"
				className="bg-transparent w-full py-1 px-2.5 focus:outline-none capitalize"
				value={inputVal}
				onChange={(e) => {
					setCurrentPage(1);
					setInputVal(e.target.value);
				}}
			/>
		</div>
	);
}

export default Searchbar;
