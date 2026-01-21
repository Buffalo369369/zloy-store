"use client";

export type UserProfile = {
  email: string;
  name: string;      //
  phone: string;
  telegram: string;  //
};

const KEY = "zloypharm_user_v1";

export function getUser(): UserProfile | null {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(KEY) || "null");
  } catch {
    return null;
  }
}

export function setUser(user: UserProfile) {
  localStorage.setItem(KEY, JSON.stringify(user));
  window.dispatchEvent(new Event("auth"));
}

export function logout() {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("auth"));
}

export function isAuthed() {
  return !!getUser();
}