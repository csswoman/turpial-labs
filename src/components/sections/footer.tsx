export function Footer() {
  return (
    <footer className="border-t border-brown-muted/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-heading text-lg font-bold tracking-tight text-ink">
          turpial<span className="text-yellow-dark">.</span>
        </p>

        <p className="font-body text-sm text-brown-muted">
          © {new Date().getFullYear()} Turpial Labs. Made with care in
          Latin America.
        </p>

        <div className="flex gap-6">
          {["Twitter", "GitHub", "LinkedIn"].map((label) => (
            <a
              key={label}
              href="#"
              className="font-body text-sm text-brown-light transition-colors duration-200 hover:text-ink"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
