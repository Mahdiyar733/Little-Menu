import React from "react";

/* eslint-disable react/prop-types */
function PizzaNums({ filteredData }: { filteredData: any[] }) {
	return (
		<span className="md:absolute md:left-6 text-gray-500 font-normal">
			Number of pizzas :{" "}
			<span className="text-ORG-color">{filteredData.length}</span>
		</span>
	);
}

export default PizzaNums;
