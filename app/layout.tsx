import { QueryProvider } from "@/shared/providers/query-provider";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { Header } from "@/widgets";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Jikan",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${nunito.className} antialiased`}>
				<QueryProvider>
					<ThemeProvider attribute="class" defaultTheme="dark">
						<Header />
						<main className="pt-20">{children}</main>
					</ThemeProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
