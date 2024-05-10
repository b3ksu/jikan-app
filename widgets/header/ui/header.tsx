import { Logo } from "@/entities/logo/logo";
import { Search } from "../search";

export const Header = () => {
	return (
		<header className="fixed top-0 w-screen py-2">
			<div className="container flex items-center gap-6">
				<Logo />
				<Search />
			</div>
		</header>
	);
};
