/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

function MenuList({ currentItems }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-14 h-80 overflow-auto py-1 pr-2">
			{currentItems?.map((item) => (
				<MenuItem
					key={item.id}
					item={item}
				/>
			))}
		</div>
	);
}

export default MenuList;
