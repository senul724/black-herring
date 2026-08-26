// export const Route = createFileRoute("/links")({
//   head: () => ({
//     meta: [
//       { title: "Black Herring — Quick Links" },
//       { name: "description", content: "All the links you need for Black Herring — menu, specials, reservations, reviews and more." },
//     ],
//   }),
//   component: LinksPage,
// });

import { linkItems } from "@/lib/data/links";
import Link from "next/link";

export default function LinksPage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-background">
			<div className="max-w-sm w-full flex flex-col items-center text-center">
				{/* Logo */}
				<div className="mb-8 flex flex-col items-center">
					<img
						src="/logo.webp"
						alt="Black Herring"
						className="h-20 w-20 rounded-full object-cover mb-4"
					/>
					<span className="font-display text-4xl tracking-tight">Black Herring</span>
					<span className="eyebrow block mt-1 text-muted-foreground">
						Miami Beach
					</span>
				</div>

				<p className="text-sm text-muted-foreground mb-10 max-w-xs">
					Dining &amp; socialising, by friends for friends. 450 Ocean Drive,
					Miami Beach, FL 33139.
				</p>

				{/* Links */}
				<div className="w-full flex flex-col gap-4">
					{linkItems.map((item) => {
						const baseClasses =
							"w-full flex items-center gap-4 px-6 py-4 border border-border bg-card/50 text-foreground text-sm tracking-wide hover:border-primary hover:text-primary transition-all duration-300";
						return (
							<Link
								key={item.label}
								href={item.href}
								className={baseClasses}
								target={item.external ? "_blank" : undefined}
							>
								<span className="text-primary/80">{item.icon}</span>
								<span>{item.label}</span>
							</Link>
						);
					})}
				</div>

				{/* Footer */}
				<div className="mt-12 text-[11px] text-muted-foreground tracking-widest uppercase">
					Open daily · 11:00 – 23:00
				</div>
			</div>
		</div>
	);
}
