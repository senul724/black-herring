import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	variable: "--font-cormorant",
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Black Herring",
	description: "Best BYOB restuarant in Colombo",
};

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<body className="min-h-screen">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SiteHeader />
					{children}
					<SiteFooter />
				</ThemeProvider>
			</body>
		</html>
	);
}
