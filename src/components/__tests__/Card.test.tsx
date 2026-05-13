import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "../Card";

describe("Card - Track D theme", () => {
  it("glass variant uses surface-tile token (not bg-slate-900/60 utility)", () => {
    render(
      <Card variant="glass">
        <span data-testid="content">Hangar</span>
      </Card>
    );
    expect(screen.getByTestId("content")).toBeInTheDocument();
    const card = screen.getByTestId("content").closest("div.rounded-xl") as HTMLElement;
    expect(card).not.toBeNull();
    expect(card.style.backgroundColor).toContain("--surface-tile");
    expect(card.className).not.toMatch(/\bbg-slate-900/);
  });

  it("default variant uses glass-bg + glass-border tokens", () => {
    render(
      <Card variant="default">
        <span data-testid="content">Flight</span>
      </Card>
    );
    const card = screen.getByTestId("content").closest("div.rounded-xl") as HTMLElement;
    expect(card).not.toBeNull();
    expect(card.style.backgroundColor).toContain("--glass-bg");
    expect(card.style.borderColor).toContain("--glass-border");
  });

  it("gradient variant ships a backgroundImage linear-gradient referencing tokens", () => {
    render(
      <Card variant="gradient">
        <span data-testid="content">Stats</span>
      </Card>
    );
    const card = screen.getByTestId("content").closest("div.rounded-xl") as HTMLElement;
    expect(card.style.backgroundImage).toContain("linear-gradient");
    expect(card.style.backgroundImage).toContain("--surface-tile");
  });

  it("renders rounded-xl base class regardless of variant", () => {
    render(
      <Card variant="cockpit">
        <span data-testid="content">Panel</span>
      </Card>
    );
    const card = screen.getByTestId("content").closest("div.rounded-xl") as HTMLElement;
    expect(card.className).toMatch(/\brounded-xl\b/);
  });
});
