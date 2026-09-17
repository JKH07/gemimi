import TypedPronunciation from "../components/TypedPronunciation.jsx";

const DOWNLOADS = [
  { platform: "windows", label: "Windows", meta: ".exe · ~400 MB", href: "#" },
  { platform: "mac", label: "macOS", meta: ".dmg · ~400 MB", href: "#" },
  { platform: "linux", label: "Linux", meta: ".AppImage · ~400 MB", href: "#" },
  { platform: "android", label: "Android", meta: ".apk · ~4 MB", href: "#" },
];

export default function AppPage() {
  return (
    <>
      <TypedPronunciation />
      <main className="app-main">
        <section className="app-hero">
          <p className="eyebrow-line">for desktop &amp; android</p>
          <h1>Gemimi</h1>
          <p className="pronunciation">
            /dʒʌ&nbsp;miː&nbsp;miː/ — <em>"juh&#8209;mee&#8209;mee"</em>
          </p>
          <p className="hero-body">
            A weekly planner with a pet that grows alongside your days. Tasks, notes, projects,
            and a small creature that's easier to check on than a to-do list.
          </p>

          <div className="downloads">
            {DOWNLOADS.map((d) => (
              <a key={d.platform} className="download-btn" href={d.href} data-platform={d.platform}>
                <span className="dl-label">{d.label}</span>
                <span className="dl-meta">{d.meta}</span>
              </a>
            ))}
          </div>

          <p className="hint">
            Desktop builds are unsigned — Windows SmartScreen or macOS Gatekeeper may warn before
            opening. That's expected for a personal, non-commercial app.
          </p>
        </section>
      </main>
    </>
  );
}
