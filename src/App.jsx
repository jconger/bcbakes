import { useEffect, useMemo, useState } from 'react';
import {
  announcement,
  business,
  categories,
  faqs,
  featuredItems,
  proofPoints,
  steps,
} from './content.js';
import './styles.css';

const emojiByCategory = {
  Bread: '🥖',
  Cookies: '🍪',
  Sweet: '✨',
  Seasonal: '🌿',
};

function getNextThursdayWindow() {
  const now = new Date();
  const target = new Date(now);
  const day = now.getDay(); // Sunday = 0, Thursday = 4
  let daysUntil = (4 - day + 7) % 7;

  target.setDate(now.getDate() + daysUntil);
  target.setHours(16, 0, 0, 0);

  const close = new Date(target);
  close.setHours(19, 30, 0, 0);

  if (daysUntil === 0 && now > close) {
    target.setDate(target.getDate() + 7);
  }

  return target;
}

function getCountdownLabel() {
  const next = getNextThursdayWindow();
  const diff = Math.max(next.getTime() - Date.now(), 0);
  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;
  const minuteMs = 60 * 1000;
  const days = Math.floor(diff / dayMs);
  const hours = Math.floor((diff % dayMs) / hourMs);
  const minutes = Math.floor((diff % hourMs) / minuteMs);

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function Logo() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img">
        <path d="M12 39c0-12 9-23 21-23 10 0 18 8 18 18 0 9-6 16-16 16H18c-4 0-6-2-6-6v-5Z" fill="#F4C16E" />
        <path d="M21 37c4-7 10-12 19-13" stroke="#2F1D14" strokeWidth="5" strokeLinecap="round" />
        <path d="M25 45h16" stroke="#fff4dd" strokeWidth="4" strokeLinecap="round" opacity=".75" />
      </svg>
    </span>
  );
}

function Header() {
  return (
    <header className="topbar">
      <div className="container nav">
        <a className="brand" href="#top" aria-label="BC Bakes Tally home">
          <Logo />
          <div>
            <strong>{business.name}</strong>
            <span>{business.tagline}</span>
          </div>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#how">How it works</a>
          <a href="#about">About</a>
          <a href="#pickup">Pickup</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-actions">
          <a className="btn btn-primary" href={business.orderUrl} target="_blank" rel="noreferrer">
            Order on Hotplate <span aria-hidden="true">↗</span>
          </a>
          <a className="btn btn-ghost icon-btn" href={business.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
            ◎
          </a>
        </div>
      </div>
    </header>
  );
}

function Countdown() {
  const [label, setLabel] = useState(getCountdownLabel);

  useEffect(() => {
    const id = window.setInterval(() => setLabel(getCountdownLabel()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="countdown" aria-label="Countdown to next Thursday pop-up">
      <strong>{label}</strong>
      <span>to Thursday pop-up</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-pill">
            <strong>Small batch</strong>
            <span>Made fresh in Tallahassee — order windows rotate weekly.</span>
          </div>
          <h1>
            Fresh bread days should feel <span>this good.</span>
          </h1>
          <p className="hero-lede">
            {business.name} turns simple ingredients into artisan sourdough, chewy bagels, cozy cinnamon rolls,
            cookie butter cookies, and market-ready sweet treats — baked by hand by {business.baker}.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={business.orderUrl} target="_blank" rel="noreferrer">
              See this week’s drop <span aria-hidden="true">↗</span>
            </a>
            <a className="btn btn-ghost" href="#menu">
              Explore favorites
            </a>
          </div>
          <ul className="hero-meta" aria-label="Bakery highlights">
            <li>Artisan sourdough</li>
            <li>Bagels + focaccia</li>
            <li>Cinnamon rolls</li>
            <li>Cookies + seasonal treats</li>
          </ul>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="float-card a">
            <span className="emoji">🍞</span>
            <div><strong>Hand-shaped loaves</strong><span>mixed, folded, baked</span></div>
          </div>
          <div className="float-card b">
            <span className="emoji">🍪</span>
            <div><strong>Rotating cookies</strong><span>Biscoff, banana pudding & more</span></div>
          </div>
          <div className="float-card c">
            <span className="emoji">📍</span>
            <div><strong>Local pickup</strong><span>new Thursday pop-up</span></div>
          </div>
          <div className="loaf-card">
            <div className="loaf-scene">
              <span className="steam one" />
              <span className="steam two" />
              <span className="steam three" />
              <div className="loaf" />
              <div className="order-ticket">
                <div>
                  <small>Fresh this week</small>
                  <strong>Sourdough, sweets & local favorites</strong>
                  <span>Check Hotplate for live inventory.</span>
                </div>
                <div className="ticket-badge">Preorder friendly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container announcement-wrap">
        <Announcement />
        <Marquee />
      </div>
    </section>
  );
}

function Announcement() {
  return (
    <aside className="announcement" aria-label="Bakery pickup announcement">
      <div className="announcement-icon" aria-hidden="true">📍</div>
      <div>
        <p>{announcement.eyebrow}</p>
        <h2>{announcement.title}</h2>
        <p>{announcement.details}</p>
      </div>
      <Countdown />
    </aside>
  );
}

function Marquee() {
  const line = ['Sourdough loaves', 'Chewy bagels', 'Cookie butter cookies', 'Cinnamon rolls', 'Focaccia', 'Seasonal bakes'];
  const items = [...line, ...line];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container story-grid">
        <div className="story-card">
          <p className="section-kicker">Meet the baker</p>
          <h2 className="section-title">From a home kitchen to Tallahassee bread runs.</h2>
          <p>
            BC Bakes Tally is the kind of neighborhood bakery people find through a fresh loaf, a market table,
            a pickup reminder, and one more “save me a cookie” text. Every loaf is handled in small batches,
            with a focus on simple ingredients, slow bread, and a lot of care.
          </p>
          <p>
            This landing page keeps the live ordering where it belongs — Hotplate — while giving customers a
            warm, memorable place to discover the bakery, browse favorite bakes, and find the latest pickup details.
          </p>
          <ul className="proof-list">
            {proofPoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
        <div className="quote-card">
          <blockquote>“From my kitchen to yours, with love — and probably a little flour.”</blockquote>
          <cite>
            A warm, promotional line inspired by the bakery’s public messaging and handmade small-batch style.
          </cite>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState([]);
  const [toast, setToast] = useState('');

  const visibleItems = useMemo(() => {
    if (active === 'All') return featuredItems;
    return featuredItems.filter((item) => item.category === active);
  }, [active]);

  const toggleItem = (name) => {
    setSelected((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  };

  const copyWishlist = async () => {
    const text = selected.length
      ? `Hi BC Bakes! I’m interested in: ${selected.join(', ')}. Is anything like this available in the current Hotplate drop?`
      : 'Hi BC Bakes! I’d love to see what is available in the current Hotplate drop.';

    try {
      await navigator.clipboard.writeText(text);
      setToast('Wishlist copied — paste it into a DM or note!');
    } catch {
      setToast('Wishlist ready — Hotplate has the live menu.');
    }

    window.setTimeout(() => setToast(''), 2400);
  };

  return (
    <section className="section" id="menu">
      <div className="container">
        <div className="menu-header">
          <div>
            <p className="section-kicker">Rotating favorites</p>
            <h2 className="section-title">The bakes people plan their week around.</h2>
            <p className="section-lede">
              These cards promote known favorites and recurring categories. Hotplate should remain the live source
              for exact availability, prices, preorder deadlines, and pickup instructions.
            </p>
          </div>
          <div className="filter-row" role="tablist" aria-label="Filter menu categories">
            {categories.map((category) => (
              <button
                className={`filter-chip ${active === category ? 'active' : ''}`}
                type="button"
                key={category}
                onClick={() => setActive(category)}
                aria-pressed={active === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="menu-grid">
          {visibleItems.map((item) => {
            const added = selected.includes(item.name);
            return (
              <article className="menu-card" key={item.name}>
                <div>
                  <div className="menu-emoji" aria-hidden="true">{emojiByCategory[item.category] || '🥐'}</div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-tags">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="card-footer">
                  <small>{item.mood}</small>
                  <button className={`add-btn ${added ? 'added' : ''}`} type="button" onClick={() => toggleItem(item.name)}>
                    {added ? 'Added' : 'Wishlist'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <div className="builder">
          <div className="builder-panel">
            <h3>Build a “don’t forget this” list</h3>
            <p>
              Customers can tap favorites, copy a note, then jump to Hotplate or Instagram. It feels interactive
              without pretending this static site is the live cart.
            </p>
            <div className="builder-list" aria-live="polite">
              {selected.length ? selected.map((item) => <span key={item}>{item}</span>) : <span className="empty-selection">No favorites selected yet.</span>}
            </div>
          </div>
          <div className="builder-panel">
            <h3>Ready for the current drop?</h3>
            <p>Use Hotplate for the official menu, inventory, prices, deadlines, and pickup details.</p>
            <div className="builder-actions">
              <button className="btn btn-dark" type="button" onClick={copyWishlist}>Copy wishlist note</button>
              <a className="btn btn-primary" href={business.orderUrl} target="_blank" rel="noreferrer">Order on Hotplate ↗</a>
            </div>
          </div>
        </div>
      </div>
      {toast ? <div className="toast" role="status">{toast}</div> : null}
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <p className="section-kicker">How it works</p>
        <h2 className="section-title">A simple preorder flow for small-batch bakes.</h2>
        <p className="section-lede">
          The goal is to promote the bakery while keeping the ordering experience operationally accurate.
        </p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pickup() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(announcement.address)}`;
  return (
    <section className="section" id="pickup">
      <div className="container">
        <p className="section-kicker">Pickup & pop-ups</p>
        <h2 className="section-title">Fresh bakes, now easier to find.</h2>
        <p className="section-lede">
          The newest public update points customers to a Thursday setup with Susan’s Homestead Harvest at Killearn Lakes Taekwondo.
          Keep social links visible for weather, sell-outs, and schedule changes.
        </p>
        <div className="location-grid">
          <div className="map-card" aria-label="Map-style card for Killearn Lakes Taekwondo pickup">
            <div className="map-pin" aria-hidden="true">🥖</div>
            <div className="map-label">
              <small>Thursday pop-up</small>
              <strong>{announcement.venue}</strong>
              <span>{announcement.address}</span>
            </div>
          </div>
          <div className="location-cards">
            <article className="info-card">
              <h3><span aria-hidden="true">⏰</span>{announcement.time}</h3>
              <p>{announcement.details}</p>
              <div className="mini-actions">
                <a className="btn btn-primary" href={mapsUrl} target="_blank" rel="noreferrer">Open map ↗</a>
                <a className="btn btn-ghost" href={business.instagramUrl} target="_blank" rel="noreferrer">Follow updates</a>
              </div>
            </article>
            <article className="info-card">
              <h3><span aria-hidden="true">🛒</span>Hotplate remains the live menu</h3>
              <p>
                Inventory can change quickly for a microbakery. Send customers to Hotplate for exact preorder windows,
                pickup choices, availability, and checkout.
              </p>
              <div className="mini-actions">
                <a className="btn btn-dark" href={business.orderUrl} target="_blank" rel="noreferrer">View Hotplate ↗</a>
              </div>
            </article>
            <article className="info-card">
              <h3><span aria-hidden="true">🌾</span>Market-friendly messaging</h3>
              <p>
                The copy is intentionally flexible for Southwood Street Market appearances, seasonal events, and pop-ups.
                Update the announcement copy in src/content.js whenever the weekly location changes.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <p className="section-kicker">Good to know</p>
        <h2 className="section-title">Clear answers before customers click order.</h2>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section" aria-label="Final call to order">
      <div className="container">
        <div className="cta-card">
          <div>
            <p className="section-kicker">Crumb and get it</p>
            <h2>Make the next bread day the best part of the week.</h2>
            <p>Browse the current drop, preorder early, and follow along for market updates, sold-out notices, and fresh flavor announcements.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={business.orderUrl} target="_blank" rel="noreferrer">Order on Hotplate ↗</a>
            <a className="btn btn-ghost" href={business.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>{business.name}</strong> · {business.tagline}
          <br />
          <span>Static React promo site. Hotplate handles live ordering.</span>
        </div>
        <div className="socials">
          <a href={business.orderUrl} target="_blank" rel="noreferrer">Hotplate</a>
          <a href={business.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <a href={business.facebookUrl} target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

function Crumbs() {
  return (
    <div className="crumbs" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          className="crumb"
          key={index}
          style={{ left: `${(index * 47) % 100}%`, animationDelay: `${index * -1.7}s`, animationDuration: `${14 + (index % 6)}s` }}
        />
      ))}
    </div>
  );
}

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: business.name,
    url: business.homeUrl,
    description: business.description,
    servesCuisine: ['Bakery', 'Sourdough', 'Cookies'],
    areaServed: 'Tallahassee, Florida',
    sameAs: [business.instagramUrl, business.facebookUrl, business.orderUrl],
    makesOffer: featuredItems.map((item) => ({ '@type': 'Offer', itemOffered: { '@type': 'Product', name: item.name, category: item.category } })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function App() {
  return (
    <div className="site-shell">
      <JsonLd />
      <a className="skip-link" href="#menu">Skip to menu</a>
      <Crumbs />
      <Header />
      <main>
        <Hero />
        <Menu />
        <HowItWorks />
        <About />
        <Pickup />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
