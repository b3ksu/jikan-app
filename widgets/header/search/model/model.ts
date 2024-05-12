"use client";

import { useEffect, useLayoutEffect, useState } from "react";

export const useOpenSearch = () => {
	const [open, setOpen] = useState(false);
	const [mount, setMount] = useState(false);

	useLayoutEffect(() => {
		setMount(true);
	}, []);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return { open, mount, setOpen };
};
