import React from "react";
import { Context } from "../context";
import { useContext } from "react";
import PaginateBtns from "../common/paginateBtns";
import EmptyError from "./EmptyError";
import PizzaNums from "./PizzaNums";
import MenuList from "./MenuList";
import Spinner from "../common/spinner";

function Menu() {
	const context = useContext(Context);

	if (!context) {
		return null;
	}

	const {
		sortBy,
		isPending,
		data,
		error,
		inputVal,
		currentPage,
		setCurrentPage,
	} = context;

	const itemsPerPage = 5;

	if (isPending) return <Spinner />;

	let sortedData;
	switch (sortBy) {
		case "price":
			sortedData = [...data.data].sort((a, b) => b.unitPrice - a.unitPrice);
			break;
		case "soldOut":
			sortedData = [...data.data].sort((a, b) => a.soldOut - b.soldOut);
			break;
		case "ingredients":
			sortedData = [...data.data].sort(
				(a, b) => b.ingredients.length - a.ingredients.length,
			);
			break;
		default:
			sortedData = data.data;
			break;
	}

	const filteredData = [...sortedData]?.filter((item) =>
		item.name.toLowerCase().includes(inputVal.toLowerCase()),
	);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	// if (error) return "An error has occurred: " + error?.message;
	console.log("error : ", error);

	return (
		<div className="flex flex-col justify-center items-center gap-5">
			{filteredData.length ? (
				<>
					<MenuList currentItems={currentItems} />
					<div className="flex flex-col gap-4 md:flex-row items-center justify-center w-full relative">
						<PaginateBtns
							totalPages={totalPages}
							currentPage={currentPage}
							onPageChange={handlePageChange}
						/>
						<PizzaNums filteredData={filteredData} />
					</div>
				</>
			) : (
				<EmptyError />
			)}
		</div>
	);
}

export default Menu;
