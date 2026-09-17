import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow-line">developer &amp; writer</p>
        <h1>Hi — I'm Gemimi.</h1>
        <p className="tagline">
          <em>I build small, careful things: an app I live inside of, and words I keep in notebooks.</em>
        </p>
        <p className="hero-body">
          By day I'm building a planner app I actually use — the kind of tool that started as a
          years-long paper habit and slowly grew into software. Outside of that, I write, translate,
          and study, usually with a cup of tea going cold beside the keyboard.
        </p>
      </section>

      <section className="section-block">
        <h2>What I'm making</h2>
        <div className="project-row">
          <div className="project-text">
            <h3>Gemimi</h3>
            <p>
              A weekly planner that grew a small pet inside it. Tasks, notes, and a creature that
              notices whether you've shown up for your days — built solo, for myself first.
            </p>
          </div>
          <Link className="project-link" to="/app">
            See the app →
          </Link>
        </div>
      </section>

      <section className="section-block quiet">
        <h2>Elsewhere</h2>
        <p className="hero-body small">
          Some days this means Chinese vocabulary drills, some days a line of a poem that isn't
          working yet, some days a mineral I've been turning over in my hand. All of it ends up in
          a notebook eventually.
        </p>
      </section>
    </main>
  );
}
