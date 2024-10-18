import Container from "./components/Container";
import ContextProvider from "./components/context";
import FilterList from "./components/filter/filterList";
import Menu from "./components/menu/Menu";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Container>
				<Navbar />
				<ContextProvider>
					<Searchbar />
					<FilterList />
					<Menu />
				</ContextProvider>
			</Container>
		</QueryClientProvider>
	);
}
