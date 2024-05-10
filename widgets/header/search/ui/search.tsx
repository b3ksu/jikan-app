"use client";

import { SearchSuggest } from "@/features/search-suggest/ui/ui";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog";
import { useOpenSearch } from "../model/useOpenSearch";
import { SearchTrigger } from "./search-trigger/search-trigger";

export const Search = () => {
	const { mount, open, setOpen } = useOpenSearch();

	if (!mount) return <div>Loading</div>;

	return (
		<Dialog open={open} onOpenChange={setOpen} modal>
			<DialogTrigger>
				<SearchTrigger />
			</DialogTrigger>

			<DialogContent className="w-full max-w-md overflow-hidden rounded-md p-0">
				<SearchSuggest />
			</DialogContent>
		</Dialog>
	);
};
