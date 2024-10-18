/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";

const API_URL = "https://react-fast-pizza-api.onrender.com/api/menu";

export const Context = createContext();

function ContextProvider({ children }) {
	const [inputVal, setInputVal] = useState("");
	const [sortBy, setSortBy] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const { isPending, data, error } = useQuery({
		queryKey: ["menuData"],
		queryFn: () => fetch(API_URL).then((res) => res.json()),
	});

	return (
		<Context.Provider
			value={{
				sortBy,
				setSortBy,
				isPending,
				data,
				error,
				setInputVal,
				inputVal,
				currentPage,
				setCurrentPage,
			}}>
			{children}
		</Context.Provider>
	);
}

export default ContextProvider;
