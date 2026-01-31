import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "../Input";

describe("Input", () => {
  it("renders with correct default properties", () => {
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("px-3", "py-2", "text-sm"); // default size md
  });

  it("applies different sizes correctly", () => {
    const { rerender } = render(<Input placeholder="Small" size="sm" />);
    let input = screen.getByPlaceholderText("Small");
    expect(input).toHaveClass("px-3", "py-1.5", "text-sm");

    rerender(<Input placeholder="Large" size="lg" />);
    input = screen.getByPlaceholderText("Large");
    expect(input).toHaveClass("px-4", "py-3", "text-base");
  });

  it("applies error variant correctly", () => {
    render(<Input placeholder="Error input" variant="error" />);

    const input = screen.getByPlaceholderText("Error input");
    expect(input).toHaveClass(
      "border-red-300",
      "focus:ring-red-500",
      "focus:border-red-500"
    );
  });

  it("renders with start icon", () => {
    const startIcon = <span data-testid="start-icon">🔍</span>;
    render(<Input placeholder="Search" startIcon={startIcon} />);

    expect(screen.getByTestId("start-icon")).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Search");
    expect(input).toHaveClass("pl-10"); // padding for icon
  });

  it("renders with end icon", () => {
    const endIcon = <span data-testid="end-icon">✓</span>;
    render(<Input placeholder="Valid" endIcon={endIcon} />);

    expect(screen.getByTestId("end-icon")).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Valid");
    expect(input).toHaveClass("pr-10"); // padding for icon
  });

  it("handles disabled state correctly", () => {
    render(<Input placeholder="Disabled" disabled />);

    const input = screen.getByPlaceholderText("Disabled");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("disabled:cursor-not-allowed");
  });

  it("handles change events", () => {
    const handleChange = vi.fn();
    render(<Input placeholder="Test input" onChange={handleChange} />);

    const input = screen.getByPlaceholderText("Test input");
    fireEvent.change(input, { target: { value: "test value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    render(<Input placeholder="Custom" className="custom-input" />);

    const input = screen.getByPlaceholderText("Custom");
    expect(input).toHaveClass("custom-input");
  });

  it("accepts different input types", () => {
    render(<Input type="email" placeholder="Email" />);

    const input = screen.getByPlaceholderText("Email");
    expect(input).toHaveAttribute("type", "email");
  });
});
