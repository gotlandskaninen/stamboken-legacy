import * as React from "react";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

/** Stands where a closed function was (ADR-0020 in gotlandskaninen/stamboken): the API answers 410 there. */
export function MovedToNewStamboken({
  children,
  href = "https://gotlandskaninen.se/stamboken",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Alert
      severity="info"
      action={
        <Button color="inherit" size="small" href={href}>
          Till nya Stamboken →
        </Button>
      }
      style={{ flexWrap: "wrap" }}
    >
      {children}
    </Alert>
  );
}
