import React from "react";
import { useMachine } from "@xstate/react";
import { toggleMachine } from "../machines/toggleMachine";
import { useIntl } from "../hooks/useIntl";

export function ContrivedStateMachine() {
  const [state, send] = useMachine(toggleMachine);
  const { f } = useIntl();

  React.useEffect(() => {
    if (state.value !== "active") {
      setTimeout(() => {
        send("TOGGLE");
      }, 3000);
    }
  }, [state]);

  switch (state.value) {
    case "loading":
      return <h1>{f("loading")}</h1>;
    case "active":
      return (
        <>
          <h1>{f("hello")}</h1>
          <p>{f("welcomeMessage")}</p>
        </>
      );
    case "inactive":
    default:
      return <h1>{f("inactive")}</h1>;
  }
}
