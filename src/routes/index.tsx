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
    <div className="flex items-center justify-center gap-4 py-7" aria-hidden="true">
      <span className="rule-gold w-20 sm:w-40" />
      <span className="flex items-center gap-2">
        <span className="rotate-45 border border-gold/60 p-[3px]">
          <span className="block h-1 w-1 bg-gold" />
        </span>
        <span
          className="rotate-45 border border-gold-deep p-[5px]"
        >
          <span className="block h-2 w-2 bg-emerald" />
        </span>
        <span className="rotate-45 border border-gold/60 p-[3px]">
          <span className="block h-1 w-1 bg-gold" />
        </span>
      </span>
      <span className="rule-gold w-20 sm:w-40" />
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="rise text-center">
      <p
        className="text-[0.6rem] uppercase tracking-[0.6em] text-emerald"
      >
        {kicker}
      </p>
      <h2 className="mt-4 text-5xl sm:text-7xl text-gilded-anim">{title}</h2>
      <Ornament />
    </header>
  );
}

function Invitation() {
  return (
    <main className="relative overflow-hidden bg-background">
      {/* ============ ACT I — THE DARK HERO ============ */}
      <section className="panel-ivory relative min-h-screen overflow-hidden px-6 pt-20 pb-24 text-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
          style={{ backgroundImage: `url(${pattern})`, backgroundSize: "520px" }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_10%,color-mix(in_oklab,var(--gold)_16%,transparent),transparent_65%)]" />

        <div className="relative mx-auto max-w-3xl">
          <div className="flex items-start justify-center gap-8 sm:gap-20">
            <img
              src={lantern}
              alt=""
              width={768}
              height={1024}
              className="float-slow hidden h-40 w-auto opacity-70 sm:block"
              style={{ animationDelay: "-2s" }}
              aria-hidden="true"
            />
            <img
              src={lantern}
              alt="Golden Islamic lantern"
              width={768}
              height={1024}
              className="float-slow h-56 w-auto drop-shadow-[0_30px_60px_rgba(200,150,50,0.45)]"
            />
            <img
              src={lantern}
              alt=""
              width={768}
              height={1024}
              className="float-slow hidden h-40 w-auto opacity-70 sm:block"
              style={{ animationDelay: "-4s" }}
              aria-hidden="true"
            />
          </div>

  

          <div className="frame-gold mt-10 px-6 py-12 sm:px-14">
            <p className="text-[0.6rem] uppercase tracking-[0.55em] text-muted-foreground">
              Together with their families
            </p>
            <h1 className="mt-8 leading-none">
              <span className="script block pb-3 text-7xl leading-[1.1] sm:text-9xl text-gilded-anim">
                Louisa
              </span>
              <span className="my-3 flex items-center justify-center gap-4 text-xs uppercase tracking-[0.7em] text-emerald-foreground/0">
                <span className="rule-gold w-16" />
                <span className="script text-4xl text-gold">&amp;</span>
                <span className="rule-gold w-16" />
              </span>
              <span className="script block pb-3 text-7xl leading-[1.1] sm:text-9xl text-gilded-anim">
                Julian
              </span>
            </h1>
            <Ornament />
            <p className="mx-auto max-w-md text-sm leading-loose text-muted-foreground">
              Request the honour of your presence as they are joined in marriage. Your prayers and
              blessings would mean the world to us.
            </p>
          </div>

          <div className="mx-auto mt-10 inline-flex items-center gap-8 border-y-2 border-gold/50 px-10 py-5">
            {["[ Friday ]", "[ December 11 ]", "[ 9:00AM ]"].map((t, i) => (
              <span key={t} className="flex items-center gap-8">
                {i > 0 && <span className="h-10 w-px bg-gold/40" />}
                <span className="text-xs uppercase tracking-[0.4em] text-gold-deep">{t}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACT II — ATTIRE ============ */}
      <section className="relative px-6 py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{ backgroundImage: `url(${pattern})`, backgroundSize: "560px" }}
          aria-hidden="true"
        />
        <div className="card-invite arch glow-gold relative mx-auto max-w-4xl px-6 py-16 sm:px-14">
          <SectionTitle kicker="Dress Code" title="Attire" />
          <div className="mx-auto flex max-w-xl flex-wrap items-end justify-center gap-8">
            {[
              { name: "Black", cls: "bg-ink" },
              { name: "Gold", cls: "bg-gold" },
              { name: "Silver", cls: "bg-[oklch(0.85_0.005_250)]" },
              { name: "White", cls: "bg-[oklch(0.99_0_0)]" },
              { name: "Emerald", cls: "bg-emerald" },
            ].map((c) => (
              <div key={c.name} className="text-center">
                <span
                  className={`block h-16 w-16 rounded-full border-2 border-gold/60 shadow-[var(--shadow-soft)] ${c.cls}`}
                  aria-hidden="true"
                />
                <p className="mt-4 text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-lg text-center text-sm leading-loose text-muted-foreground">
            We recommend wearing <span className="text-foreground">black, gold, silver</span> or{" "}
            <span className="text-foreground">white</span>. If you don&apos;t have anything in these
            colours, any formal attire is perfectly welcome.
          </p>
        </div>
      </section>

      {/* ============ ACT III — VENUE (EMERALD BAND) ============ */}
      <section className="panel-ivory-soft relative overflow-hidden px-6 py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
          style={{ backgroundImage: `url(${pattern})`, backgroundSize: "480px" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl">
          <SectionTitle kicker="Where" title="The Venue" />
          <div className="text-center">
            <p className="text-3xl text-gold-deep"> JV EVENTS PALACE </p>
            <p className="mt-3 text-sm tracking-[0.2em] text-muted-foreground">
F. Valenzuela Street , Valenzuela, Philippines, 1444</p>
          </div>
          <div className="mt-12">
            <VenueMap query={`${VENUE_NAME} ${VENUE_ADDRESS}`} />
          </div>
        </div>
      </section>

      {/* ============ ACT IV — GALLERY ============ */}
      <section className="relative px-6 py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: `url(${pattern})`, backgroundSize: "560px" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl">
          <SectionTitle kicker="A Glimpse" title="Venue Gallery" />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`arch flex items-center justify-center border border-gold/50 bg-secondary/60 text-center shadow-[var(--shadow-soft)] ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-square"
                }`}
              >
                <span className="px-3 text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground">
                  Photo {i + 1}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
            Venue photos to be added
          </p>
        </div>
      </section>

      {/* ============ ACT V — CONTACTS (BLACK FINALE) ============ */}
      <section className="panel-ivory relative overflow-hidden px-6 py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
          style={{ backgroundImage: `url(${pattern})`, backgroundSize: "520px" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl">
          <SectionTitle kicker="RSVP" title="Contacts" />
          <div className="grid gap-6 sm:grid-cols-2">
            {["Louisa", "Julian"].map((n) => (
              <div key={n} className="frame-gold px-6 py-10 text-center">
                <p className="text-[0.6rem] uppercase tracking-[0.5em] text-gold">{n}</p>
                <p className="mt-5 text-lg tracking-[0.25em] text-muted-foreground">[ phone number ]</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Kindly reach out for any questions or to confirm your attendance.
          </p>
          <Ornament />
          <p className="script text-center text-5xl text-gilded-anim">Barakallahu lakuma</p>
        </div>
      </section>
    </main>
  );
}
