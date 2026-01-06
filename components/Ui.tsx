import Link from "next/link";
import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={"rounded-xl border border-black/10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] " + className}>
      {children}
    </div>
  );
}

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export function Button({ href, children, className = "", ...rest }: BtnProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold " +
    "bg-[#f2d34b] text-black hover:brightness-95 active:brightness-90 transition " +
    "shadow-[0_10px_25px_rgba(242,211,75,0.35)]";
  if (href) {
    return (
      <Link href={href} className={base + " " + className}>
        {children}
      </Link>
    );
  }
  return (
    <button className={base + " " + className} {...rest}>
      {children}
    </button>
  );
}

export function GhostButton({ href, children, className = "", ...rest }: BtnProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold " +
    "border border-white/60 text-white hover:bg-white/10 active:bg-white/15 transition";
  if (href) {
    return (
      <Link href={href} className={base + " " + className}>
        {children}
      </Link>
    );
  }
  return (
    <button className={base + " " + className} {...rest}>
      {children}
    </button>
  );
}

export function SectionTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="text-center">
      {kicker ? (
        <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">{kicker}</div>
      ) : null}
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
      {sub ? <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">{sub}</p> : null}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="h-1 w-1 rounded-full bg-[#f2d34b]" />
        <span className="h-1 w-1 rounded-full bg-[#f2d34b]" />
        <span className="h-1 w-16 rounded-full bg-[#f2d34b]" />
      </div>
    </div>
  );
}