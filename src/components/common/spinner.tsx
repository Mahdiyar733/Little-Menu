import React from "react";
import { HashLoader } from "react-spinners";

function Spinner() {
	return (
		<div className="flex justify-center items-center h-full w-full min-h-60 ">
			<HashLoader color="#F56141" />
		</div>
	);
}

export default Spinner;
