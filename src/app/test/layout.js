"use client";
import { useEffect } from "react";

export default function TestLayout({ children }) {
  return (
    <section>
      <h2 className="mb-3">test layout</h2>
      {children}
    </section>
  )
}
