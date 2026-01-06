"use client";

type CartItem = { slug: string; qty: number };

const KEY = "yourstore_cart_v1";

function read(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function write(items: CartItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("cart"));
}

export function getCart() {
  return read();
}

export function getCartCount() {
  return read().reduce((sum, x) => sum + x.qty, 0);
}

export function setQty(slug: string, qty: number) {
  const items = read().filter((x) => x.slug !== slug);
  if (qty > 0) items.push({ slug, qty });
  write(items);
}

export function inc(slug: string) {
  const items = read();
  const hit = items.find((x) => x.slug === slug);
  if (hit) hit.qty += 1;
  else items.push({ slug, qty: 1 });
  write(items);
}

export function dec(slug: string) {
  const items = read();
  const hit = items.find((x) => x.slug === slug);
  if (!hit) return;
  hit.qty -= 1;
  const next = items.filter((x) => x.qty > 0);
  write(next);
}

export function clearCart() {
  write([]);
}