/* eslint-disable react/prop-types */

//////////////////////////////////// Paginate ////////////////////////////////////

const PaginateBtns = ({ totalPages, currentPage, onPageChange }) => {
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
				currPage={currentPage}>
				Prev
			</PaginateBtn>
			<span>
				Page <span className="text-ORG-color">{currentPage}</span> of{" "}
				{totalPages}
			</span>
			<PaginateBtn
				handler={handleNextClick}
				disabled={currentPage === totalPages}
				currPage={currentPage}
				totalPages={totalPages}>
				Next
			</PaginateBtn>
		</div>
	);
};

export default PaginateBtns;

//////////////////////////////////// paginate btn ////////////////////////////////////

function PaginateBtn({ handler, disabled, currPage, children, totalPages }) {
	const isNext = children === "Next";
	return (
		<button
			onClick={handler}
			disabled={disabled}
			className={`px-4 py-2 border border-solid border-black transition-colors duration-300 rounded-md ${
				!isNext
					? currPage === 1
						? "opacity-50 cursor-not-allowed"
						: "sm:hover:border-ORG-color sm:hover:text-ORG-color"
					: currPage === totalPages
					? "opacity-50 cursor-not-allowed"
					: "sm:hover:border-ORG-color sm:hover:text-ORG-color"
			}`}>
			{children}
		</button>
	);
}
