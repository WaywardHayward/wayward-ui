import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FormField, FormSection } from "../FormField";

describe("FormField", () => {
  it("renders children correctly", () => {
    render(
      <FormField>
        <input data-testid="test-input" aria-label="test input" />
      </FormField>
    );

    expect(screen.getByTestId("test-input")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(
      <FormField label="Username">
        <input aria-label="Username" />
      </FormField>
    );

    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("renders required asterisk when required=true", () => {
    render(
      <FormField label="Email" required>
        <input aria-label="Email" />
      </FormField>
    );

    expect(screen.getByText("*")).toBeInTheDocument();
    expect(screen.getByText("*")).toHaveClass("text-red-500");
  });

  it("renders hint when provided and no error", () => {
    render(
      <FormField hint="Enter your username">
        <input aria-label="username input" />
      </FormField>
    );

    expect(screen.getByText("Enter your username")).toBeInTheDocument();
    expect(screen.getByText("Enter your username")).toHaveClass(
      "text-gray-500"
    );
  });

  it("renders error message and hides hint when error provided", () => {
    render(
      <FormField hint="Enter your username" error="Username is required">
        <input aria-label="username input" />
      </FormField>
    );

    expect(screen.getByText("Username is required")).toBeInTheDocument();
    expect(screen.getByText("Username is required")).toHaveClass(
      "text-red-600"
    );
    expect(screen.queryByText("Enter your username")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <FormField className="custom-field">
        <input aria-label="custom input" />
      </FormField>
    );

    expect(container.firstChild).toHaveClass("custom-field");
  });
});

describe("FormSection", () => {
  it("renders children correctly", () => {
    render(
      <FormSection>
        <div data-testid="section-content">Content</div>
      </FormSection>
    );

    expect(screen.getByTestId("section-content")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(
      <FormSection title="Personal Information">
        <div>Content</div>
      </FormSection>
    );

    expect(screen.getByText("Personal Information")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Personal Information"
    );
  });

  it("renders description when provided", () => {
    render(
      <FormSection description="Fill in your personal details">
        <div>Content</div>
      </FormSection>
    );

    expect(
      screen.getByText("Fill in your personal details")
    ).toBeInTheDocument();
  });

  it("renders both title and description", () => {
    render(
      <FormSection title="Contact Details" description="How we can reach you">
        <div>Content</div>
      </FormSection>
    );

    expect(screen.getByText("Contact Details")).toBeInTheDocument();
    expect(screen.getByText("How we can reach you")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <FormSection className="custom-section">
        <div>Content</div>
      </FormSection>
    );

    expect(container.firstChild).toHaveClass("custom-section");
  });
});
