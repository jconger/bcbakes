import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { announcement, business, categories, faqs, featuredItems, proofPoints, steps, } from './content.js';
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
    if (days > 0)
        return `${days}d ${hours}h`;
    if (hours > 0)
        return `${hours}h ${minutes}m`;
    return `${minutes}m`;
}
function Logo() {
    return (_jsx("span", { className: "brand-mark", "aria-hidden": "true", children: _jsxs("svg", { viewBox: "0 0 64 64", role: "img", children: [_jsx("path", { d: "M12 39c0-12 9-23 21-23 10 0 18 8 18 18 0 9-6 16-16 16H18c-4 0-6-2-6-6v-5Z", fill: "#F4C16E" }), _jsx("path", { d: "M21 37c4-7 10-12 19-13", stroke: "#2F1D14", strokeWidth: "5", strokeLinecap: "round" }), _jsx("path", { d: "M25 45h16", stroke: "#fff4dd", strokeWidth: "4", strokeLinecap: "round", opacity: ".75" })] }) }));
}
function Header() {
    return (_jsx("header", { className: "topbar", children: _jsxs("div", { className: "container nav", children: [_jsxs("a", { className: "brand", href: "#top", "aria-label": "BC Bakes Tally home", children: [_jsx(Logo, {}), _jsxs("div", { children: [_jsx("strong", { children: business.name }), _jsx("span", { children: business.tagline })] })] }), _jsxs("nav", { className: "nav-links", "aria-label": "Primary navigation", children: [_jsx("a", { href: "#menu", children: "Menu" }), _jsx("a", { href: "#how", children: "How it works" }), _jsx("a", { href: "#about", children: "About" }), _jsx("a", { href: "#pickup", children: "Pickup" }), _jsx("a", { href: "#faq", children: "FAQ" })] }), _jsxs("div", { className: "nav-actions", children: [_jsxs("a", { className: "btn btn-primary", href: business.orderUrl, target: "_blank", rel: "noreferrer", children: ["Order on Hotplate ", _jsx("span", { "aria-hidden": "true", children: "\u2197" })] }), _jsx("a", { className: "btn btn-ghost icon-btn", href: business.instagramUrl, target: "_blank", rel: "noreferrer", "aria-label": "Instagram", children: "\u25CE" })] })] }) }));
}
function Countdown() {
    const [label, setLabel] = useState(getCountdownLabel);
    useEffect(() => {
        const id = window.setInterval(() => setLabel(getCountdownLabel()), 60000);
        return () => window.clearInterval(id);
    }, []);
    return (_jsxs("div", { className: "countdown", "aria-label": "Countdown to next Thursday pop-up", children: [_jsx("strong", { children: label }), _jsx("span", { children: "to Thursday pop-up" })] }));
}
function Hero() {
    return (_jsxs("section", { className: "hero", id: "top", children: [_jsxs("div", { className: "container hero-grid", children: [_jsxs("div", { className: "hero-copy", children: [_jsxs("div", { className: "hero-pill", children: [_jsx("strong", { children: "Small batch" }), _jsx("span", { children: "Made fresh in Tallahassee \u2014 order windows rotate weekly." })] }), _jsxs("h1", { children: ["Fresh bread days should feel ", _jsx("span", { children: "this good." })] }), _jsxs("p", { className: "hero-lede", children: [business.name, " turns simple ingredients into artisan sourdough, chewy bagels, cozy cinnamon rolls, cookie butter cookies, and market-ready sweet treats \u2014 baked by hand by ", business.baker, "."] }), _jsxs("div", { className: "hero-actions", children: [_jsxs("a", { className: "btn btn-primary", href: business.orderUrl, target: "_blank", rel: "noreferrer", children: ["See this week\u2019s drop ", _jsx("span", { "aria-hidden": "true", children: "\u2197" })] }), _jsx("a", { className: "btn btn-ghost", href: "#menu", children: "Explore favorites" })] }), _jsxs("ul", { className: "hero-meta", "aria-label": "Bakery highlights", children: [_jsx("li", { children: "Artisan sourdough" }), _jsx("li", { children: "Bagels + focaccia" }), _jsx("li", { children: "Cinnamon rolls" }), _jsx("li", { children: "Cookies + seasonal treats" })] })] }), _jsxs("div", { className: "hero-visual", "aria-hidden": "true", children: [_jsxs("div", { className: "float-card a", children: [_jsx("span", { className: "emoji", children: "\uD83C\uDF5E" }), _jsxs("div", { children: [_jsx("strong", { children: "Hand-shaped loaves" }), _jsx("span", { children: "mixed, folded, baked" })] })] }), _jsxs("div", { className: "float-card b", children: [_jsx("span", { className: "emoji", children: "\uD83C\uDF6A" }), _jsxs("div", { children: [_jsx("strong", { children: "Rotating cookies" }), _jsx("span", { children: "Biscoff, banana pudding & more" })] })] }), _jsxs("div", { className: "float-card c", children: [_jsx("span", { className: "emoji", children: "\uD83D\uDCCD" }), _jsxs("div", { children: [_jsx("strong", { children: "Local pickup" }), _jsx("span", { children: "new Thursday pop-up" })] })] }), _jsx("div", { className: "loaf-card", children: _jsxs("div", { className: "loaf-scene", children: [_jsx("span", { className: "steam one" }), _jsx("span", { className: "steam two" }), _jsx("span", { className: "steam three" }), _jsx("div", { className: "loaf" }), _jsxs("div", { className: "order-ticket", children: [_jsxs("div", { children: [_jsx("small", { children: "Fresh this week" }), _jsx("strong", { children: "Sourdough, sweets & local favorites" }), _jsx("span", { children: "Check Hotplate for live inventory." })] }), _jsx("div", { className: "ticket-badge", children: "Preorder friendly" })] })] }) })] })] }), _jsxs("div", { className: "container announcement-wrap", children: [_jsx(Announcement, {}), _jsx(Marquee, {})] })] }));
}
function Announcement() {
    return (_jsxs("aside", { className: "announcement", "aria-label": "Bakery pickup announcement", children: [_jsx("div", { className: "announcement-icon", "aria-hidden": "true", children: "\uD83D\uDCCD" }), _jsxs("div", { children: [_jsx("p", { children: announcement.eyebrow }), _jsx("h2", { children: announcement.title }), _jsx("p", { children: announcement.details })] }), _jsx(Countdown, {})] }));
}
function Marquee() {
    const line = ['Sourdough loaves', 'Chewy bagels', 'Cookie butter cookies', 'Cinnamon rolls', 'Focaccia', 'Seasonal bakes'];
    const items = [...line, ...line];
    return (_jsx("div", { className: "marquee", "aria-hidden": "true", children: _jsx("div", { className: "marquee-track", children: items.map((item, index) => _jsx("span", { children: item }, `${item}-${index}`)) }) }));
}
function About() {
    return (_jsx("section", { className: "section", id: "about", children: _jsxs("div", { className: "container story-grid", children: [_jsxs("div", { className: "story-card", children: [_jsx("p", { className: "section-kicker", children: "Meet the baker" }), _jsx("h2", { className: "section-title", children: "From a home kitchen to Tallahassee bread runs." }), _jsx("p", { children: "BC Bakes Tally is the kind of neighborhood bakery people find through a fresh loaf, a market table, a pickup reminder, and one more \u201Csave me a cookie\u201D text. Every loaf is handled in small batches, with a focus on simple ingredients, slow bread, and a lot of care." }), _jsx("p", { children: "This landing page keeps the live ordering where it belongs \u2014 Hotplate \u2014 while giving customers a warm, memorable place to discover the bakery, browse favorite bakes, and find the latest pickup details." }), _jsx("ul", { className: "proof-list", children: proofPoints.map((point) => _jsx("li", { children: point }, point)) })] }), _jsxs("div", { className: "quote-card", children: [_jsx("blockquote", { children: "\u201CFrom my kitchen to yours, with love \u2014 and probably a little flour.\u201D" }), _jsx("cite", { children: "A warm, promotional line inspired by the bakery\u2019s public messaging and handmade small-batch style." })] })] }) }));
}
function Menu() {
    const [active, setActive] = useState('All');
    const [selected, setSelected] = useState([]);
    const [toast, setToast] = useState('');
    const visibleItems = useMemo(() => {
        if (active === 'All')
            return featuredItems;
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
        }
        catch {
            setToast('Wishlist ready — Hotplate has the live menu.');
        }
        window.setTimeout(() => setToast(''), 2400);
    };
    return (_jsxs("section", { className: "section", id: "menu", children: [_jsxs("div", { className: "container", children: [_jsxs("div", { className: "menu-header", children: [_jsxs("div", { children: [_jsx("p", { className: "section-kicker", children: "Rotating favorites" }), _jsx("h2", { className: "section-title", children: "The bakes people plan their week around." }), _jsx("p", { className: "section-lede", children: "These cards promote known favorites and recurring categories. Hotplate should remain the live source for exact availability, prices, preorder deadlines, and pickup instructions." })] }), _jsx("div", { className: "filter-row", role: "tablist", "aria-label": "Filter menu categories", children: categories.map((category) => (_jsx("button", { className: `filter-chip ${active === category ? 'active' : ''}`, type: "button", onClick: () => setActive(category), "aria-pressed": active === category, children: category }, category))) })] }), _jsx("div", { className: "menu-grid", children: visibleItems.map((item) => {
                            const added = selected.includes(item.name);
                            return (_jsxs("article", { className: "menu-card", children: [_jsxs("div", { children: [_jsx("div", { className: "menu-emoji", "aria-hidden": "true", children: emojiByCategory[item.category] || '🥐' }), _jsx("h3", { children: item.name }), _jsx("p", { children: item.description }), _jsx("div", { className: "menu-tags", children: item.tags.map((tag) => _jsx("span", { children: tag }, tag)) })] }), _jsxs("div", { className: "card-footer", children: [_jsx("small", { children: item.mood }), _jsx("button", { className: `add-btn ${added ? 'added' : ''}`, type: "button", onClick: () => toggleItem(item.name), children: added ? 'Added' : 'Wishlist' })] })] }, item.name));
                        }) }), _jsxs("div", { className: "builder", children: [_jsxs("div", { className: "builder-panel", children: [_jsx("h3", { children: "Build a \u201Cdon\u2019t forget this\u201D list" }), _jsx("p", { children: "Customers can tap favorites, copy a note, then jump to Hotplate or Instagram. It feels interactive without pretending this static site is the live cart." }), _jsx("div", { className: "builder-list", "aria-live": "polite", children: selected.length ? selected.map((item) => _jsx("span", { children: item }, item)) : _jsx("span", { className: "empty-selection", children: "No favorites selected yet." }) })] }), _jsxs("div", { className: "builder-panel", children: [_jsx("h3", { children: "Ready for the current drop?" }), _jsx("p", { children: "Use Hotplate for the official menu, inventory, prices, deadlines, and pickup details." }), _jsxs("div", { className: "builder-actions", children: [_jsx("button", { className: "btn btn-dark", type: "button", onClick: copyWishlist, children: "Copy wishlist note" }), _jsx("a", { className: "btn btn-primary", href: business.orderUrl, target: "_blank", rel: "noreferrer", children: "Order on Hotplate \u2197" })] })] })] })] }), toast ? _jsx("div", { className: "toast", role: "status", children: toast }) : null] }));
}
function HowItWorks() {
    return (_jsx("section", { className: "section", id: "how", children: _jsxs("div", { className: "container", children: [_jsx("p", { className: "section-kicker", children: "How it works" }), _jsx("h2", { className: "section-title", children: "A simple preorder flow for small-batch bakes." }), _jsx("p", { className: "section-lede", children: "The goal is to promote the bakery while keeping the ordering experience operationally accurate." }), _jsx("div", { className: "steps-grid", children: steps.map((step, index) => (_jsxs("article", { className: "step-card", children: [_jsx("div", { className: "step-number", children: index + 1 }), _jsx("h3", { children: step.title }), _jsx("p", { children: step.body })] }, step.title))) })] }) }));
}
function Pickup() {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(announcement.address)}`;
    return (_jsx("section", { className: "section", id: "pickup", children: _jsxs("div", { className: "container", children: [_jsx("p", { className: "section-kicker", children: "Pickup & pop-ups" }), _jsx("h2", { className: "section-title", children: "Fresh bakes, now easier to find." }), _jsx("p", { className: "section-lede", children: "The newest public update points customers to a Thursday setup with Susan\u2019s Homestead Harvest at Killearn Lakes Taekwondo. Keep social links visible for weather, sell-outs, and schedule changes." }), _jsxs("div", { className: "location-grid", children: [_jsxs("div", { className: "map-card", "aria-label": "Map-style card for Killearn Lakes Taekwondo pickup", children: [_jsx("div", { className: "map-pin", "aria-hidden": "true", children: "\uD83E\uDD56" }), _jsxs("div", { className: "map-label", children: [_jsx("small", { children: "Thursday pop-up" }), _jsx("strong", { children: announcement.venue }), _jsx("span", { children: announcement.address })] })] }), _jsxs("div", { className: "location-cards", children: [_jsxs("article", { className: "info-card", children: [_jsxs("h3", { children: [_jsx("span", { "aria-hidden": "true", children: "\u23F0" }), announcement.time] }), _jsx("p", { children: announcement.details }), _jsxs("div", { className: "mini-actions", children: [_jsx("a", { className: "btn btn-primary", href: mapsUrl, target: "_blank", rel: "noreferrer", children: "Open map \u2197" }), _jsx("a", { className: "btn btn-ghost", href: business.instagramUrl, target: "_blank", rel: "noreferrer", children: "Follow updates" })] })] }), _jsxs("article", { className: "info-card", children: [_jsxs("h3", { children: [_jsx("span", { "aria-hidden": "true", children: "\uD83D\uDED2" }), "Hotplate remains the live menu"] }), _jsx("p", { children: "Inventory can change quickly for a microbakery. Send customers to Hotplate for exact preorder windows, pickup choices, availability, and checkout." }), _jsx("div", { className: "mini-actions", children: _jsx("a", { className: "btn btn-dark", href: business.orderUrl, target: "_blank", rel: "noreferrer", children: "View Hotplate \u2197" }) })] }), _jsxs("article", { className: "info-card", children: [_jsxs("h3", { children: [_jsx("span", { "aria-hidden": "true", children: "\uD83C\uDF3E" }), "Market-friendly messaging"] }), _jsx("p", { children: "The copy is intentionally flexible for Southwood Street Market appearances, seasonal events, and pop-ups. Update the announcement copy in src/content.js whenever the weekly location changes." })] })] })] })] }) }));
}
function FAQ() {
    return (_jsx("section", { className: "section", id: "faq", children: _jsxs("div", { className: "container", children: [_jsx("p", { className: "section-kicker", children: "Good to know" }), _jsx("h2", { className: "section-title", children: "Clear answers before customers click order." }), _jsx("div", { className: "faq-grid", children: faqs.map((faq) => (_jsxs("details", { className: "faq-item", children: [_jsx("summary", { children: faq.q }), _jsx("p", { children: faq.a })] }, faq.q))) })] }) }));
}
function CTA() {
    return (_jsx("section", { className: "section", "aria-label": "Final call to order", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "cta-card", children: [_jsxs("div", { children: [_jsx("p", { className: "section-kicker", children: "Crumb and get it" }), _jsx("h2", { children: "Make the next bread day the best part of the week." }), _jsx("p", { children: "Browse the current drop, preorder early, and follow along for market updates, sold-out notices, and fresh flavor announcements." })] }), _jsxs("div", { className: "cta-actions", children: [_jsx("a", { className: "btn btn-primary", href: business.orderUrl, target: "_blank", rel: "noreferrer", children: "Order on Hotplate \u2197" }), _jsx("a", { className: "btn btn-ghost", href: business.instagramUrl, target: "_blank", rel: "noreferrer", children: "Instagram" })] })] }) }) }));
}
function Footer() {
    return (_jsx("footer", { className: "footer", children: _jsxs("div", { className: "container footer-grid", children: [_jsxs("div", { children: [_jsx("strong", { children: business.name }), " \u00B7 ", business.tagline, _jsx("br", {}), _jsx("span", { children: "Static React promo site. Hotplate handles live ordering." })] }), _jsxs("div", { className: "socials", children: [_jsx("a", { href: business.orderUrl, target: "_blank", rel: "noreferrer", children: "Hotplate" }), _jsx("a", { href: business.instagramUrl, target: "_blank", rel: "noreferrer", children: "Instagram" }), _jsx("a", { href: business.facebookUrl, target: "_blank", rel: "noreferrer", children: "Facebook" })] })] }) }));
}
function Crumbs() {
    return (_jsx("div", { className: "crumbs", "aria-hidden": "true", children: Array.from({ length: 18 }).map((_, index) => (_jsx("span", { className: "crumb", style: { left: `${(index * 47) % 100}%`, animationDelay: `${index * -1.7}s`, animationDuration: `${14 + (index % 6)}s` } }, index))) }));
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
    return _jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(data) } });
}
export default function App() {
    return (_jsxs("div", { className: "site-shell", children: [_jsx(JsonLd, {}), _jsx("a", { className: "skip-link", href: "#menu", children: "Skip to menu" }), _jsx(Crumbs, {}), _jsx(Header, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(Menu, {}), _jsx(HowItWorks, {}), _jsx(About, {}), _jsx(Pickup, {}), _jsx(FAQ, {}), _jsx(CTA, {})] }), _jsx(Footer, {})] }));
}
