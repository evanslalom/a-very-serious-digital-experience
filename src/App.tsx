import { useState } from "react";

const stickers = [
  { text: "100% HUMAN MADE", className: "sticker sticker-one" },
  { text: "NO COOKIES. JUST CRUMBS.", className: "sticker sticker-two" },
  { text: "EST. 1991 / 2091", className: "sticker sticker-three" },
];

export default function App() {
  const [chaos, setChaos] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <main className={chaos ? "page chaos" : "page"}>
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <p>THE INTERNET&apos;S LEAST IMPORTANT WEBSITE</p>
        <p className="blink">● LIVE-ish</p>
        <p>37°46&apos;N / 122°25&apos;W</p>
      </header>

      <section className="hero">
        <div className="issue-tag">ISSUE NO. 000</div>
        <p className="eyebrow">A VERY SERIOUS DIGITAL EXPERIENCE</p>
        <h1 aria-label="Hello World">
          <span className="hello">HELLO</span>
          <span className="world">WORLD</span>
          <span className="punctuation">!</span>
        </h1>
        <p className="side-copy">
          PLEASE ROTATE YOUR DEVICE
          <br />
          UNTIL THIS LOOKS EXPENSIVE
        </p>
        <div className="smiley" aria-hidden="true">
          <span>×</span>
          <span>×</span>
          <b>⌣</b>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          HELLO, STRANGER ★ WELCOME TO NOWHERE ★ PLEASE DO NOT TAP THE GLASS ★
          HELLO, STRANGER ★ WELCOME TO NOWHERE ★ PLEASE DO NOT TAP THE GLASS ★
        </div>
      </div>

      <section className="lower">
        <article className="manifesto">
          <span className="number">01</span>
          <h2>We made a website.</h2>
          <p>
            It has no purpose, no funnel, and absolutely no quarterly goals. It
            is simply here, shouting into the beautifully overdesigned void.
          </p>
          <button onClick={() => setChaos((value) => !value)}>
            {chaos ? "OK, FIX IT" : "MAKE IT WORSE"}
            <span>↗</span>
          </button>
        </article>

        <aside className="specimen" aria-label="Typography specimen">
          <p>FREE SAMPLE</p>
          <strong>Aa</strong>
          <div>
            <span>ABCDEFGHIJKLM</span>
            <span>NOPQRSTUVWXYZ</span>
            <span>0123456789!?#</span>
          </div>
        </aside>

        <div className="bad-nav">
          <span>MENU</span>
          <button type="button">ABOUT</button>
          <button type="button">SHOP*</button>
          <button type="button">PANIC</button>
        </div>
      </section>

      {stickers.map((sticker) => (
        <div className={sticker.className} key={sticker.text}>
          {sticker.text}
        </div>
      ))}

      {!dismissed && (
        <div className="popup" role="dialog" aria-label="Important notice">
          <button
            className="popup-close"
            onClick={() => setDismissed(true)}
            aria-label="Close notice"
          >
            ×
          </button>
          <p>CONGRATULATIONS!</p>
          <strong>You are visitor #000001</strong>
          <small>This is not an achievement.</small>
        </div>
      )}

      <footer>
        <span>© NO ONE, EVER</span>
        <span>SCROLLING WAS A CHOICE</span>
        <span className="tiny">TERMS &amp; CONDITIONS APPLY*</span>
      </footer>
    </main>
  );
}
