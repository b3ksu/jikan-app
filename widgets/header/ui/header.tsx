import { Logo } from "@/entities";
import { Search } from "../search";

export const Header = () => {
	return (
		<header className="fixed top-0 z-[100] w-screen py-2">
			<div className="container flex items-center gap-6">
				<Logo />
				<Search />
			</div>
		</header>
	);
};
