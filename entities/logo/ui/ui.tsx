import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link href="/" className="flex items-center gap-3">
			<Image
				src="/images/logo.png"
				alt="jikan"
				width={50}
				height={50}
				className="rounded-md"
			/>
			<p className="text-2xl font-bold">Jikan</p>
		</Link>
	);
};
