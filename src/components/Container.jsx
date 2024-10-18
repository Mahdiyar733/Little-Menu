/* eslint-disable react/prop-types */
function Container({ children }) {
	return (
		<div className="bg-ORG-color bg-opacity-5 flex justify-center items-center w-dvw min-h-dvh h-auto md:h-dvh p-5 sm:px-6 sm:py-5">
			<div className="border border-solid border-gray-50 min-w-80 h-full w-full flex flex-col rounded-sm  overflow-y-auto pb-7 items-center bg-white">
				{children}
			</div>
		</div>
	);
}

export default Container;
