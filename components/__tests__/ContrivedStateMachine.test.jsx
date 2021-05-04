import React from "react";
import { render, screen, act } from "test/testUtils";
import { en } from "content/locale";
import { ContrivedStateMachine } from "components/ContrivedStateMachine";

jest.useFakeTimers();

describe("ContrivedStateMachine component", () => {
  describe("state machine", () => {
    test("displays correct content based on state flow", () => {
      // test english vs french
      render(<ContrivedStateMachine />, {
        wrapperProps: {
          pathname: "/contrived",
        },
      });

      const { inactive, hello, welcomeMessage, loading } = en["/contrived"];

      // inactive state
      expect(screen.getByText(inactive)).toBeInTheDocument();

      // loading state
      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(screen.getByText(loading)).toBeInTheDocument();

      // active (final) state
      act(() => {
        jest.runOnlyPendingTimers();
      });
      expect(screen.getByText(hello)).toBeInTheDocument();
      expect(screen.getByText(welcomeMessage)).toBeInTheDocument();
    });
  });
});
