import { createFileRoute } from "@tanstack/react-router";
import lantern from "@/assets/lantern.png";
import pattern from "@/assets/pattern.png";
import { VenueMap } from "@/components/VenueMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Louisa & Julian — Wedding Invitation" },
      {
        name: "description",
        content:
          "You are warmly invited to the wedding of Louisa and Julian. Find the venue, attire guide and contact details here.",
      },
      { property: "og:title", content: "Louisa & Julian — Wedding Invitation" },
      {
        property: "og:description",
        content: "Join us as Louisa and Julian begin their journey together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

const VENUE_NAME = "[ Venue Name ]";
const VENUE_ADDRESS = "[ Venue address will go here ]";

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 py-6" aria-hidden="true">
      <span className="rule-gold w-16 sm:w-28" />
      <span className="rotate-45 border border-gold/70 p-1">
        <span className="block h-1.5 w-1.5 bg-gold" />
      </span>
      <span className="rule-gold w-16 sm:w-28" />
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="text-center">
      <p className="text-[0.65rem] uppercase tracking-[0.45em] text-emerald">{kicker}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl text-gilded">{title}</h2>
      <Ornament />
    </header>
  );
}

function Invitation() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: `url(${pattern})`, backgroundSize: "640px" }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_65%)]" />

      {/* Hero */}
      <section className="relative mx-auto max-w-3xl px-6 pt-16 pb-10 text-center">
        <img
          src={lantern}
          alt="Golden Islamic lantern"
          width={768}
          height={1024}
          className="float-slow mx-auto h-40 w-auto drop-shadow-[0_20px_35px_rgba(180,140,40,0.35)]"
        />
        <p className="mt-8 text-[0.7rem] uppercase tracking-[0.5em] text-muted-foreground">
          Together with their families
        </p>
        <h1 className="mt-6 leading-none">
          <span className="script block text-6xl sm:text-8xl text-gilded">Louisa</span>
          <span className="my-2 block text-sm uppercase tracking-[0.6em] text-emerald">and</span>
          <span className="script block text-6xl sm:text-8xl text-gilded">Julian</span>
        </h1>
        <Ornament />
        <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
          Request the honour of your presence as they are joined in marriage. Your prayers and
          blessings would mean the world to us.
        </p>
        <div className="mx-auto mt-8 inline-flex items-center gap-6 border-y border-gold/40 px-8 py-4">
          <span className="text-xs uppercase tracking-[0.3em] text-foreground">[ Day ]</span>
          <span className="h-8 w-px bg-gold/50" />
          <span className="text-xs uppercase tracking-[0.3em] text-foreground">[ Date ]</span>
          <span className="h-8 w-px bg-gold/50" />
          <span className="text-xs uppercase tracking-[0.3em] text-foreground">[ Time ]</span>
        </div>
      </section>

      {/* Attire */}
      <section className="relative mx-auto max-w-4xl px-6 py-14">
        <div className="card-invite arch px-6 py-12 sm:px-12">
          <SectionTitle kicker="Dress Code" title="Attire" />
          <div className="mx-auto flex max-w-md items-end justify-center gap-6">
            {[
              { name: "Black", cls: "bg-ink" },
              { name: "Gold", cls: "bg-gold" },
              { name: "Silver", cls: "bg-[oklch(0.85_0.005_250)]" },
              { name: "White", cls: "bg-[oklch(0.99_0_0)]" },
            ].map((c) => (
              <div key={c.name} className="text-center">
                <span
                  className={`block h-14 w-14 rounded-full border border-gold/50 ${c.cls}`}
                  aria-hidden="true"
                />
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">
            We recommend wearing <span className="text-foreground">black, gold, silver</span> or{" "}
            <span className="text-foreground">white</span>. If you don&apos;t have anything in these
            colours, any formal attire is perfectly welcome.
          </p>
        </div>
      </section>

      {/* Venue */}
      <section className="relative mx-auto max-w-4xl px-6 py-14">
        <SectionTitle kicker="Where" title="The Venue" />
        <div className="text-center">
          <p className="text-2xl text-foreground">{VENUE_NAME}</p>
          <p className="mt-2 text-sm text-muted-foreground">{VENUE_ADDRESS}</p>
        </div>
        <div className="mt-10">
          <VenueMap query={`${VENUE_NAME} ${VENUE_ADDRESS}`} />
        </div>
      </section>

      {/* Gallery placeholders */}
      <section className="relative mx-auto max-w-5xl px-6 py-14">
        <SectionTitle kicker="A Glimpse" title="Venue Gallery" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`flex items-center justify-center border border-dashed border-gold/50 bg-secondary/60 text-center ${
                i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-square"
              }`}
            >
              <span className="px-3 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                Photo {i + 1}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Venue photos to be added
        </p>
      </section>

      {/* Contacts */}
      <section className="relative mx-auto max-w-3xl px-6 py-14 pb-24">
        <div className="card-invite px-6 py-12 sm:px-12">
          <SectionTitle kicker="RSVP" title="Contacts" />
          <div className="grid gap-6 sm:grid-cols-2">
            {["Louisa", "Julian"].map((n) => (
              <div key={n} className="border border-gold/40 px-6 py-8 text-center">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-emerald">{n}</p>
                <p className="mt-4 text-lg tracking-[0.2em] text-muted-foreground">
                  [ phone number ]
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Kindly reach out for any questions or to confirm your attendance.
          </p>
        </div>
        <p className="script mt-16 text-center text-4xl text-gilded">Barakallahu lakuma</p>
      </section>
    </main>
  );
}
