import React from "react";
import { useIntl } from "../hooks/useIntl";

export function Heading() {
  const { f } = useIntl();
  return (
    <>
      <h1>{f("hello")}</h1>
      <p>{f("welcomeMessage")}</p>
    </>
  );
}
