import React from "react";

/* eslint-disable react/prop-types */
function Skeleton({ w = "w-full", h = "h-full", rounded = "rounded-full" }) {
	return <div className={`${rounded} ${w} ${h} skeleton bg-gray-400`}></div>;
}

export default Skeleton;
