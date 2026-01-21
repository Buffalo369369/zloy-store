"use client";

import { products } from "@/lib/data";

type CartItem = { slug: string; qty: number };

const KEY = "yourstore_cart_v1";
export const DELIVERY_PRICE = 25;

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

/**  */
export function getCartBrands(): Set<string> {
  const items = read();
  const brands = new Set<string>();

  for (const it of items) {
    const p = products.find((x) => x.slug === it.slug);
    if (!p) continue;
    if (it.qty > 0) brands.add(p.category);
  }

  return brands;
}

/** "Driada отдельно" */
export function canAddToCartBySlug(slug: string): boolean {
  const p = products.find((x) => x.slug === slug);
  if (!p) return true; // 

  const cartBrands = getCartBrands();

  // 
  if (cartBrands.size === 0) return true;

  const isDriada = p.category === "driada";
  const cartHasDriada = cartBrands.has("driada");

  // 
  if (isDriada) {
    return cartBrands.size === 1 && cartHasDriada;
  }

  // 
  return !cartHasDriada;
}

export function setQty(slug: string, qty: number) {
  // 
  if (qty > 0 && !canAddToCartBySlug(slug)) {
    window.dispatchEvent(
      new CustomEvent("cart:error", {
        detail:
          "Нельзя смешивать Driada с другими брендами. Оформляйте Driada отдельным заказом.",
      })
    );
    return;
  }

  const items = read().filter((x) => x.slug !== slug);
  if (qty > 0) items.push({ slug, qty });
  write(items);
}

export function inc(slug: string) {
  if (!canAddToCartBySlug(slug)) {
    window.dispatchEvent(
      new CustomEvent("cart:error", {
        detail:
          "Нельзя смешивать Driada с другими брендами. Оформляйте Driada отдельным заказом.",
      })
    );
    return;
  }

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