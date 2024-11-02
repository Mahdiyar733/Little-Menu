/* eslint-disable react/prop-types */
import React, { ReactNode } from "react";
//////////////////////////////////// Paginate ////////////////////////////////////
interface TPaginateBtns {
	totalPages: number;
	currentPage: number;
	onPageChange: (arg: number) => void;
}

const PaginateBtns = ({
	totalPages,
	currentPage,
	onPageChange,
}: TPaginateBtns) => {
	const handlePrevClick = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handleNextClick = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	return (
		<div className="flex items-center space-x-4 text-gray-500">
			<PaginateBtn
				handler={handlePrevClick}
				disabled={currentPage === 1}
				currentPage={currentPage}>
				Prev
			</PaginateBtn>
			<span>
				Page <span className="text-ORG-color">{currentPage}</span> of{" "}
				{totalPages}
			</span>
			<PaginateBtn
				handler={handleNextClick}
				disabled={currentPage === totalPages}
				currentPage={currentPage}
				totalPages={totalPages}>
				Next
			</PaginateBtn>
		</div>
	);
};

export default PaginateBtns;

//////////////////////////////////// paginate btn ////////////////////////////////////

interface TPaginateBtn extends Partial<TPaginateBtns> {
	children?: ReactNode;
	disabled?: boolean;
	handler: () => void;
}

function PaginateBtn({
	handler,
	disabled,
	currentPage,
	children,
	totalPages,
}: TPaginateBtn) {
	const isNext = children === "Next";
	return (
		<button
			onClick={handler}
			disabled={disabled}
			className={`px-4 py-2 border border-solid border-black transition-colors duration-300 rounded-md ${
				!isNext
					? currentPage === 1
						? "opacity-50 cursor-not-allowed"
						: "sm:hover:border-ORG-color sm:hover:text-ORG-color"
					: currentPage === totalPages
					? "opacity-50 cursor-not-allowed"
					: "sm:hover:border-ORG-color sm:hover:text-ORG-color"
			}`}>
			{children}
		</button>
	);
}
