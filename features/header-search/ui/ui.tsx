"use client";

import { HeaderSearchSuggest, HeaderSearchTrigger } from "@/features";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog";
import { useOpenSearch } from "../model/model";

export const HeaderSearch = () => {
	const { mount, open, setOpen } = useOpenSearch();

	if (!mount) return <div>Loading</div>;

	return (
		<Dialog open={open} onOpenChange={setOpen} modal>
			<DialogTrigger>
				<HeaderSearchTrigger />
			</DialogTrigger>

			<DialogContent className="w-full max-w-md overflow-hidden rounded-md p-0">
				<HeaderSearchSuggest />
			</DialogContent>
		</Dialog>
	);
};
