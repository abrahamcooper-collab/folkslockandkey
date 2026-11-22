"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { business, phoneHref } from "@/content/business";
import { CONTACT_HREF, primaryNav, type NavGroup, type NavItem } from "@/content/navigation";
import { Logo } from "./Logo";

type MenuItem = Extract<NavItem, { kind: "menu" }>;

const SCROLLED_AFTER_PX = 12;

const COLUMN_CLASS: Record<NavGroup["columns"], string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
};

/** Desktop panel width per menu: services has two groups side by side. */
const PANEL_CLASS: Record<MenuItem["id"], string> = {
  services: "w-[min(780px,calc(100vw-2rem))] grid-cols-[2fr_1fr]",
  "service-areas": "w-[min(600px,calc(100vw-2rem))] grid-cols-1",
};

const desktopLinkClass =
  "rounded-md px-3 py-2 text-sm font-medium text-white/75 transition-colors hover:text-gold";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLLED_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the mobile menu whenever the route changes.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-900/95 shadow-lg shadow-ink-900/20 backdrop-blur-md"
          : "border-b border-white/5 bg-ink-900/70 backdrop-blur-xs"
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) =>
            item.kind === "menu" ? (
              <DesktopMenu key={item.id} item={item} />
            ) : (
              <NavAnchor key={item.href} href={item.href} className={desktopLinkClass}>
                {item.label}
              </NavAnchor>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={phoneHref}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-white transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4 text-gold" />
            {business.phone}
          </a>
          <a
            href={CONTACT_HREF}
            className="rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-ink-900 shadow-xs transition-all hover:bg-gold-400 hover:shadow-md"
          >
            Request Service
          </a>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 bg-ink-900 transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          mobileOpen ? "max-h-[calc(100dvh-4rem)] overflow-y-auto opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
          {primaryNav.map((item) =>
            item.kind === "menu" ? (
              <MobileMenu key={item.id} item={item} onNavigate={closeMobile} />
            ) : (
              <NavAnchor
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className="rounded-md px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
              >
                {item.label}
              </NavAnchor>
            ),
          )}
          <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
            <a
              href={phoneHref}
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 rounded-md border border-white/15 px-4 py-3 text-base font-semibold text-white"
            >
              <Phone className="h-4 w-4 text-gold" />
              Call {business.phone}
            </a>
            <a
              href={CONTACT_HREF}
              onClick={closeMobile}
              className="rounded-md bg-gold px-4 py-3 text-center text-base font-bold text-ink-900"
            >
              Request Service
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

/** In-page hashes ("#contact") stay plain anchors; routes use client-side navigation. */
function NavAnchor({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function DesktopMenu({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  const close = () => setOpen(false);

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Escape" || !open) return;
    close();
    triggerRef.current?.focus();
  };

  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) close();
  };

  return (
    // Not `relative`: the panel is positioned against the header bar so wide menus stay on-screen.
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={close} onKeyDown={onKeyDown} onBlur={onBlur}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={`${desktopLinkClass} flex items-center gap-1 ${open ? "text-gold" : ""}`}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={panelId}
        className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 ${
          open ? "visible opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <div
          className={`grid gap-6 rounded-xl border border-white/10 bg-ink-900/95 p-6 shadow-lg shadow-ink-900/20 backdrop-blur-md ${PANEL_CLASS[item.id]}`}
        >
          {item.groups.map((group, index) => (
            <div key={group.title ?? index}>
              {group.title && (
                <p className="px-3 text-xs uppercase tracking-[0.18em] text-gold">{group.title}</p>
              )}
              <ul className={`grid gap-x-2 ${group.title ? "mt-3" : ""} ${COLUMN_CLASS[group.columns]}`}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="block rounded-md px-3 py-1.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href={item.viewAll.href}
            onClick={close}
            className="col-span-full -mt-2 border-t border-white/10 px-3 pt-4 text-sm font-bold text-gold transition-colors hover:text-gold-400"
          >
            {item.viewAll.label} →
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ item, onNavigate }: { item: MenuItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
      >
        {item.label}
        <ChevronDown
          className={`h-5 w-5 text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {item.groups.map((group, index) => (
            <div key={group.title ?? index} className="pb-2 pl-3">
              {group.title && (
                <p className="px-3 pb-1 pt-2 text-xs uppercase tracking-[0.18em] text-gold">
                  {group.title}
                </p>
              )}
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      tabIndex={open ? undefined : -1}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href={item.viewAll.href}
            onClick={onNavigate}
            tabIndex={open ? undefined : -1}
            className="mb-2 ml-3 block rounded-md px-3 py-2.5 text-sm font-bold text-gold hover:bg-white/5"
          >
            {item.viewAll.label} →
          </Link>
        </div>
      </div>
    </div>
  );
}
