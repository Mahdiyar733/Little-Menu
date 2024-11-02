import React, { createContext, ReactNode, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://react-fast-pizza-api.onrender.com/api/menu";

// Define the shape of the context value
export interface ContextType {
	sortBy: string;
	setSortBy: React.Dispatch<React.SetStateAction<string>>;
	isPending: boolean;
	data: any; // You can replace 'any' with a more specific type if you know the structure of the data
	error: object | unknown; // Use 'unknown' for error type, or specify a more detailed type if needed
	setInputVal: React.Dispatch<React.SetStateAction<string>>;
	inputVal: string;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

// Create context with a default value
export const Context = createContext<ContextType | null>(null);

function ContextProvider({ children }: { children: ReactNode }) {
	const [inputVal, setInputVal] = useState<string>("");
	const [sortBy, setSortBy] = useState<string>("");
	const [currentPage, setCurrentPage] = useState<number>(1);

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
