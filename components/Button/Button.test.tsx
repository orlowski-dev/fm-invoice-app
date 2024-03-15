import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from ".";

describe("Button Component", () => {
  afterEach(cleanup);

  it("renders primary variant", () => {
    render(<Button color="primary">Button</Button>);
    const btn = screen.getByText("Button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("btn primary");
  });

  it("renders soft variant", () => {
    render(<Button color="soft">Button</Button>);
    const btn = screen.getByText("Button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("btn soft");
  });

  it("renders dimmed variant", () => {
    render(<Button color="dimmed">Button</Button>);
    const btn = screen.getByText("Button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("btn dimmed");
  });

  it("renders danger variant", () => {
    render(<Button color="danger">Button</Button>);
    const btn = screen.getByText("Button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("btn danger");
  });

  it("renders plain variant", () => {
    render(<Button color="plain">Button</Button>);
    const btn = screen.getByText("Button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("btn plain");
  });

  it("renders with children", () => {
    render(<Button>Button</Button>);
    const btn = screen.getByText("Button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("btn primary");
    expect(btn).toHaveAttribute("aria-live", "assertive");
    expect(btn).not.toHaveAttribute("aria-busy", "true");
    expect(btn).not.toHaveAttribute("disabled");
  });

  it("renders with start icon", () => {
    render(<Button startIcon={<>🐒</>}>Button</Button>);

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("btn primary with-start-icon");
    expect(btn).toHaveTextContent("🐒Button");
    expect(btn).toHaveAttribute("aria-live", "assertive");
    expect(btn).not.toHaveAttribute("aria-busy", "true");
    expect(btn).not.toHaveAttribute("disabled");
  });

  it("renders with loading", () => {
    render(<Button loading>Button</Button>);

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("btn primary");
    expect(btn).toHaveAttribute("aria-live", "assertive");
    expect(btn).toHaveAttribute("aria-busy", "true");
    expect(btn).toHaveAttribute("disabled");
  });
});
