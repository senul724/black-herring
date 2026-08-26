export function SiteFooter() {
	return (
		<footer id="visit" className="border-t border-border mt-32">
			<div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
				<div>
					<img src="/logo.webp" alt="Black Herring" className="h-12 md:h-16 w-auto mb-6 rounded-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
					<p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
						Dining & socialising, by friends for friends. An indulgent escape in
						Miami Beach.
					</p>
				</div>
				<div>
					<p className="eyebrow mb-4">Visit</p>
					<p className="text-sm leading-relaxed text-foreground/90">
						450 Ocean Drive
						<br />
						Miami Beach, FL 33139
					</p>
					<p className="text-sm mt-3 text-muted-foreground">
						Open daily · 11:00 – 23:00
					</p>
				</div>
				<div>
					<p className="eyebrow mb-4">Contact</p>
					<a
						href="tel:+13055550188"
						className="block text-sm hover:text-primary transition-colors"
					>
						+1 (305) 555-0188
					</a>
					<a
						href="https://instagram.com/blackherring_miami"
						className="block text-sm mt-2 hover:text-primary transition-colors"
					>
						@blackherring_miami
					</a>
				</div>
			</div>
			<div className="border-t border-border py-6 text-center text-xs text-muted-foreground tracking-widest uppercase">
				© {new Date().getFullYear()} Black Herring
			</div>
		</footer>
	);
}
