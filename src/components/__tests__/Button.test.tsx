import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "../Button";

describe("Button - Track D theme", () => {
  it("primary variant uses accent-warm token with blue fallback (not bg-blue-600 utility)", () => {
    render(<Button variant="primary">Log Flight</Button>);
    const btn = screen.getByRole("button", { name: /log flight/i });
    // Inline style backgroundColor should reference the CSS var.
    expect(btn.style.backgroundColor).toContain("--accent-warm");
    // The legacy bg-blue-600 utility class must NOT be applied anymore.
    expect(btn.className).not.toMatch(/\bbg-blue-600\b/);
  });

  it("primary + gradient uses a linear gradient backgroundImage with token", () => {
    render(<Button variant="primary" gradient>Log Flight</Button>);
    const btn = screen.getByRole("button", { name: /log flight/i });
    expect(btn.style.backgroundImage).toContain("linear-gradient");
    expect(btn.style.backgroundImage).toContain("--accent-warm");
  });

  it("secondary variant uses surface-tile token, not slate-800 utility", () => {
    render(<Button variant="secondary">Cancel</Button>);
    const btn = screen.getByRole("button", { name: /cancel/i });
    expect(btn.style.backgroundColor).toContain("--surface-tile");
    expect(btn.className).not.toMatch(/\bbg-slate-800\b/);
  });

  it("does not leak Bootstrap-blue focus ring on the base class string", () => {
    render(<Button variant="primary">Edit</Button>);
    const btn = screen.getByRole("button", { name: /edit/i });
    // focus ring colour should not be the legacy blue-500 token
    expect(btn.className).not.toMatch(/focus:ring-blue-500/);
  });

  it("danger / success variants keep their semantic palette (meaning, not decoration)", () => {
    const { rerender } = render(<Button variant="danger">Delete</Button>);
    expect(screen.getByRole("button").className).toMatch(/\bbg-red-600\b/);
    rerender(<Button variant="success">Save</Button>);
    expect(screen.getByRole("button").className).toMatch(/\bbg-emerald-600\b/);
  });
});
