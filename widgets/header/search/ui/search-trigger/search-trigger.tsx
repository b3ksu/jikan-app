import { SearchIcon } from "lucide-react";

export const SearchTrigger = () => {
	return (
		<div className="relative w-60">
			<div className="0 flex h-8 w-full max-w-md items-center justify-start rounded-md border border-gray-300 px-4 pl-11 text-sm text-gray-600 transition-all duration-100 hover:ring-0 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-background">
				Search anime...
			</div>
			<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<SearchIcon className="text-gray-400" size={20} />
			</div>
		</div>
	);
};
