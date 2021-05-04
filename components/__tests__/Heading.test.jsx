import React from "react";
import { render, screen } from "test/testUtils";
import { en, fr } from "content/locale";
import { Heading } from "components/Heading";

describe("Heading component", () => {
  describe("internationalised content", () => {
    test("displays expected content based on language region setting", () => {
      // render using @testing-library/react
      render(<Heading />, {
        wrapperProps: {
          locale: "en",
        },
      });

      expect(screen.getByText(en["/"].hello)).toBeInTheDocument();
      expect(screen.getByText(en["/"].welcomeMessage)).toBeInTheDocument();
    });
  });
});

describe("Heading component", () => {
  describe("internationalised content", () => {
    test("displays expected content based on language region setting", () => {
      // test english vs french
      const { unmount } = render(<Heading />, {
        wrapperProps: {
          locale: "en",
        },
      });

      expect(screen.getByText(en["/"].hello)).toBeInTheDocument();
      expect(screen.getByText(en["/"].welcomeMessage)).toBeInTheDocument();

      unmount();

      // test english vs french
      render(<Heading />, {
        wrapperProps: {
          locale: "fr",
        },
      });

      expect(screen.getByText(fr["/"].hello)).toBeInTheDocument();
      expect(screen.getByText(fr["/"].welcomeMessage)).toBeInTheDocument();
    });

    test("displays expected english content when region is not supported", () => {
      render(<Heading />);

      expect(screen.getByText(en["/"].hello)).toBeInTheDocument();
      expect(screen.getByText(en["/"].welcomeMessage)).toBeInTheDocument();
    });
  });
});
