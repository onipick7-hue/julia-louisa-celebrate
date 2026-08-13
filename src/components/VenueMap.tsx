export function VenueMap({ query }: { query: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div className="overflow-hidden rounded-sm border border-gold/40 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3 border-b border-gold/30 bg-secondary px-4 py-3">
        <span className="inline-block h-3 w-3 rounded-full bg-emerald" />
        <div className="min-w-0">
          <p className="truncate text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Google Maps
          </p>
          <p className="truncate text-sm text-foreground">{query}</p>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`}
          target="_blank"
          rel="noreferrer"
          className="ml-auto shrink-0 rounded-sm border border-gold/50 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-deep transition-colors hover:bg-gold/10"
        >
          Directions
        </a>
      </div>
      <iframe
        title="Venue location map"
        src={src}
        loading="lazy"
        className="h-[340px] w-full"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
